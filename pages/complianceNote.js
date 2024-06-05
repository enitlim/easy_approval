import React, { useState, useEffect, useContext } from "react";
import NoteComplianceTable from "./components/noteComplianceTable";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/material";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase/SettingFirebase";
import MenuAppBar from "./components/appbar";
const ComplianceNote = ({ navigation }) => {
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
        doc(db, "easyApproval", "dashboard", `${curFYValue}`, "ComplianceNote"),
        (doc) => {
          setNoteData(doc?.data()?.complianceNotes);
        }
      );
     
    };
    getPendingNote(); //Getting all the Notes
  }, [userData?.emp_id]);

  useEffect(() => {
    const Check = () => {
      if (noteData) {
        if (
          userData.designation.slice(0, 2) === "GM" ||
          userData.designation.slice(0, 2) === "CM"
        ) {
          setpendingNoteData(
            noteData.filter(
              (note) =>
                note.complianceTo === userData.designation &&
                note.cmRemark === null
            )
          );

          settotalNoteData(
            noteData.filter(
              (note) => note.complianceTo === userData.designation
            )
          );
        }
      }
    };
    Check();
  }, [noteData]);
  console.log("Pending Note: ", pendingNoteData);
  console.log("Total Note: ", totalNoteData);
  return (
    <>
      <MenuAppBar />

      <Box style={{ height: "100%" }}>
        {noteData && pendingNoteData && totalNoteData ? (
          <>
            {/* if Chairman show all the note
        else show the split of all and pending */}
            {userData.designation === "Chairman" ? (
              <>
                <NoteComplianceTable
                  detail={noteData}
                  fy={FY}
                  navigation={navigation}
                  title="Pending Compliance Notes"
                />
              </>
            ) : (
              <>
                <NoteComplianceTable
                  detail={pendingNoteData}
                  fy={FY}
                  navigation={navigation}
                  title="Pending Compliance Notes"
                  totalNote={totalNoteData}
                />
                <NoteComplianceTable
                  detail={totalNoteData}
                  fy={FY}
                  navigation={navigation}
                  title="Total Compliance Notes"
                  totalNote={totalNoteData}
                />
              </>
            )}
          </>
        ) : null}
      </Box>
    </>
  );
};

export default ComplianceNote;
