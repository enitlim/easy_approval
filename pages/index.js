import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import SummaryCard from "./components/SummaryCard";
import { Box, Button, Fab, Grid, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { db } from "@/firebase/SettingFirebase";
const inter = Inter({ subsets: ["latin"] });
import { useSelector, useDispatch } from "react-redux";
import { doc, onSnapshot } from "firebase/firestore";
import NoteTable from "./components/noteTable";
import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/router";
import MenuAppBar from "./components/appbar";
import BottomNavBar from "./components/bottomNavBar";
import { DashboardCardSkeleton,DashboardTableSkeleton } from "./components/skeletonLoading";
export default function Home() {
  const router = useRouter();
  const { userData } = useSelector((state) => state.user);
  // console.log("User Data", userData);
  const [noteData, setNoteData] = useState(null); // All Notes
  const [pendingNoteData, setpendingNoteData] = useState(null);
  const [approvedNoteData, setapprovedNoteData] = useState(null);
  const [RejectedNoteData, setRejectedNoteData] = useState(null);
  const [totalNoteData, settotalNoteData] = useState(null);
  const [FY, setFY] = useState(null);
  const noteStatus = Object.freeze({
    Initiated: 0,
    CmPending: 1,
    GmPending: 2,
    ChPending: 3,
    Approved: 4,
    Rejected: 99,
  });

  useEffect(() => {
    const FY = () => {
      //Calculating Financial Year
      var year;
      var dateNote = new Date();
      var month = dateNote.getMonth() + 1;
      if (month < 4) {
        year = dateNote.getFullYear() - 1 + "-" + dateNote.getFullYear();
      } else {
        year = dateNote.getFullYear() + "-" + (dateNote.getFullYear() + 1);
      }
      return year;
    };
    const getPendingNote = () => {
      const curFYValue = FY();
      setFY(curFYValue);
      onSnapshot(
        doc(db, "easyApproval", "dashboard", `${curFYValue}`, "totalNote"),
        (doc) => {
          setNoteData(doc?.data()?.notes);
        }
      );
    };
    getPendingNote(); //Getting all the Notes
  }, [userData?.emp_id]);

  useEffect(() => {
    const Check = () => {
      if (noteData) {
        if (userData.designation.slice(0, 2) === "GM") {
          setpendingNoteData(
            noteData.filter(
              (note) =>
                note.level == noteStatus.GmPending &&
                note.approvers.find(
                  (approver) =>
                    Object.keys(approver)[0] === userData.designation &&
                    Object.values(approver)[0] === 0
                )
            )
          );

          setapprovedNoteData(
            noteData.filter(
              (note) =>
                note.level == noteStatus.Approved &&
                note.approvers.find(
                  (approver) =>
                    Object.keys(approver)[0] === userData.designation
                )
            )
          );
          setRejectedNoteData(
            noteData.filter(
              (note) =>
                note.level == noteStatus.Rejected &&
                note.approvers.find(
                  (approver) =>
                    Object.keys(approver)[0] === userData.designation
                )
            )
          );
          settotalNoteData(
            noteData.filter(
              (note) =>
                note.level >= noteStatus.GmPending &&
                note.approvers.find(
                  (approver) =>
                    Object.keys(approver)[0] === userData.designation
                )
            )
          );
        } else if (userData.designation.slice(0, 2) === "Ch") {
          setpendingNoteData(
            noteData.filter((note) => note.level == noteStatus.ChPending)
          );
          setapprovedNoteData(
            noteData.filter((note) => note.level == noteStatus.Approved)
          );
          setRejectedNoteData(
            noteData.filter((note) => note.level == noteStatus.Rejected)
          );
          settotalNoteData(
            noteData.filter((note) => note.level >= noteStatus.ChPending)
          );
        } else if (userData.designation.slice(0, 2) === "CM") {
          console.log(userData.designation);
          setpendingNoteData(
            noteData.filter(
              (note) =>
                // console.log("filter Note: ",Object.values(note.approvers))
                // console.log(" Note Level : ",note.level )
                note.level == noteStatus.CmPending &&
                note.approvers.find(
                  (approver) =>
                    Object.keys(approver)[0] === userData.designation &&
                    Object.values(approver)[0] === 0
                )
            )
          );
          setapprovedNoteData(
            noteData.filter(
              (note) =>
                note.level == noteStatus.Approved &&
                note.approvers.find(
                  (approver) =>
                    Object.keys(approver)[0] === userData.designation
                )
            )
          );
          setRejectedNoteData(
            noteData.filter(
              (note) =>
                note.level == noteStatus.Rejected &&
                note.approvers.find(
                  (approver) =>
                    Object.keys(approver)[0] === userData.designation
                )
            )
          );
          settotalNoteData(
            noteData.filter(
              (note) =>
                note.level >= noteStatus.CmPending &&
                note.approvers.find(
                  (approver) =>
                    Object.keys(approver)[0] === userData.designation
                )
            )
          );
        } else {
          setpendingNoteData(
            noteData.filter(
              (note) =>
                note.dept == userData.userDept &&
                note.level == noteStatus.Initiated &&
                note.createdby == userData.emp_id
            )
          );
          setapprovedNoteData(
            noteData.filter(
              (note) =>
                note.dept == userData.userDept &&
                note.level == noteStatus.Approved
            )
          );
          setRejectedNoteData(
            noteData.filter(
              (note) =>
                note.dept == userData.userDept &&
                note.level == noteStatus.Rejected
            )
          );
          settotalNoteData(
            noteData.filter((note) => note.dept == userData.userDept)
          );
        }
      }
    };
    Check();
  }, [noteData]);
  console.log("Total Notes: ", totalNoteData);
  return (
    <>
      <Head>
        <title>Easy Approval</title>
        <meta
          name="description"
          content="Used for raising and approving the Easy Approval"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-no-background.PNG" />
      </Head>
      <MenuAppBar appBarTitle="Home" appBarLink="/" />
      <Box sx={{ paddingRight: 2, paddingLeft: 2 }}>
        <Box sx={{ paddingBottom: 5 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              {totalNoteData === null
                ? console.log("Not Empty")
                : console.log("Empty")}
              {totalNoteData ? (
                <Link
                  style={{ textDecoration: "none" }}
                  href={{
                    pathname: "/ManageNote",
                    query: {
                      notes: JSON.stringify(totalNoteData),
                      title: "Total Notes",
                      FY: FY,
                    },
                  }}
                >
                  <SummaryCard
                    heading="Total Notes"
                    count={totalNoteData.length}
                    bgColor="lightblue"
                    // icon={StickyNote}
                  />
                </Link>
              ) : (
                <DashboardCardSkeleton
                  title="Total Notes"
                  bgColor="lightblue"
                />
              )}
            </Grid>
            <Grid item xs={12} md={4}>
              {approvedNoteData ? (
                <Link
                  style={{ textDecoration: "none" }}
                  href={{
                    pathname: "/ManageNote",
                    query: {
                      notes: JSON.stringify(approvedNoteData),
                      title: "Approved Notes",
                      FY: FY,
                    },
                  }}
                >
                  <SummaryCard
                    heading="Approved Notes"
                    count={approvedNoteData.length}
                    // count="10"
                    bgColor="lightgreen"
                    // icon={CheckCircleIcon}
                  />
                </Link>
              ) : (
                <DashboardCardSkeleton
                  title="Approved Notes"
                  bgColor="lightgreen"
                />
              )}
            </Grid>
            <Grid item xs={12} md={4}>
              {RejectedNoteData ? (
                <Link
                  style={{ textDecoration: "none" }}
                  href={{
                    pathname: "/ManageNote",
                    query: {
                      notes: JSON.stringify(RejectedNoteData),
                      title: "Rejected Notes",
                      FY: FY,
                    },
                  }}
                >
                  <SummaryCard
                    heading="Rejected Notes"
                    count={RejectedNoteData.length}
                    // count="10"
                    bgColor="red"
                    // icon={CheckCircleIcon}
                  />
                </Link>
              ) : (
                <DashboardCardSkeleton title="Rejected Notes" bgColor="red" />
              )}
            </Grid>
          </Grid>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* Pending note Data */}
            {pendingNoteData ? (
              <NoteTable
                detail={pendingNoteData}
                fy={FY}
                title="Pending Notes"
              />
            ) : <DashboardTableSkeleton/>}
            {/* <BottomNavBar /> */}
          </Grid>
        </Grid>
        {/* Dashboard Here */}
        {/* Only Desk office can raise the note */}
        {userData?.designation.slice(0, 2) == "CM" ||
        userData?.designation.slice(0, 2) == "GM" ||
        userData?.designation.slice(0, 2) == "Ch" ? null : (
          <Box sx={{ position: "fixed", bottom: 5, zIndex: 1000 }}>
            <Fab color="primary" aria-label="add">
              <AddIcon onClick={() => router.push("/addNote")} />
            </Fab>
          </Box>
        )}
      </Box>
    </>
  );
}
