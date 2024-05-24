import React from 'react'
import { useRouter } from 'next/router'
import { Typography } from '@mui/material';
import NoteTable from './components/noteTable';
function ManageNote() {
    const router=useRouter();
    const {title, FY}=router.query;
    const noteString= router.query.notes;
    const notes=JSON.parse(noteString);
    console.log(noteString);
    console.log(title);
    console.log(FY);
  return (
    <>
      <Typography
        style={{
          textAlign: "center",
          color: "black",
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        {title}
      </Typography>
      <NoteTable detail={notes} fy={FY} navigation={navigation} title={title} />
    </>
  );
}

export default ManageNote