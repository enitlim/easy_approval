import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import SummaryCard from "./components/SummaryCard";
import { Button, Fab } from "@mui/material";
import React, { useEffect, useState } from "react";
import { auth, db } from "@/firebase/SettingFirebase";
import { signOut } from "firebase/auth";
const inter = Inter({ subsets: ["latin"] });
import { useSelector, useDispatch } from "react-redux";
import { doc, onSnapshot } from "firebase/firestore";
import NoteTable from "./components/noteTable";
import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/router";
export default function Home() {
  const router=useRouter();
  const { userData } = useSelector((state) => state.user);
  console.log("User Data", userData);
  const [noteData, setNoteData] = useState(null); // All Notes
  const [pendingNoteData, setpendingNoteData] = useState([]);
  const [approvedNoteData, setapprovedNoteData] = useState([]);
  const [totalNoteData, settotalNoteData] = useState([]);
  const [FY, setFY] = useState(null);
  const noteStatus = Object.freeze({
    Initiated: 0,
    CmPending: 1,
    GmPending: 2,
    ChPending: 3,
    Approved: 4,
    Rejected: -1,
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
          settotalNoteData(
            noteData.filter((note) => note.level >= noteStatus.ChPending)
          );
        } else if (userData.designation.slice(0, 2) === "CM") {
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
                note.level == noteStatus.Initiated
            )
          );
          setapprovedNoteData(
            noteData.filter(
              (note) =>
                note.dept == userData.userDept &&
                note.level == noteStatus.Approved
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
  console.log("Note Data",noteData);
  console.log("Total Data", totalNoteData);
  console.log("Approved Data", approvedNoteData);
  console.log("Pending Data", pendingNoteData);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>Home</h2>
      <Button onClick={() => signOut(auth)}>Logout</Button>
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
      ) : null}

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
            heading="Approved"
            count={approvedNoteData.length}
            // count="10"
            bgColor="lightgreen"
            // icon={CheckCircleIcon}
          />
        </Link>
      ) : null}

      {pendingNoteData ? (
        <NoteTable
          detail={pendingNoteData}
          fy={FY}
          navigation={navigation}
          title="Pending Notes"
        />
      ) : null}
      <Fab color="primary" aria-label="add">
        <AddIcon onClick={()=>router.push("/addNote")
        }/>
      </Fab>
    </>
  );
}
