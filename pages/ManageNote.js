import React from 'react'
import { useRouter } from 'next/router'
import { Box, Typography } from '@mui/material';
import NoteTable from './components/noteTable';
import MenuAppBar from './components/appbar';
function ManageNote() {
    const router=useRouter();
    const {title, FY}=router.query;
    const noteString= router.query.notes;
    const notes=JSON.parse(noteString);

  return (
    <>
      <MenuAppBar appBarTitle="Manage Notes" appBarLink="/" />
      <Box sx={{ marginTop: "80px" }}>
        <Typography
          style={{
            textAlign: "center",
            color: "black",
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: "10px"
          }}
        >
          {title}
        </Typography>
        <NoteTable detail={notes} fy={FY} title={title} />
      </Box>
    </>
  );
}

export default ManageNote