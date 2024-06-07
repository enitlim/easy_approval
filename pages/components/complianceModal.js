import { Box, Button, Modal, Skeleton, TextField } from "@mui/material";
import React, { useState } from "react";
import { formatDate } from "@/utilities/utils";

const ComplianceModal = ({
  visible,
  triggerfun,
  type,
  btntxt,
  approverData,
  sendtoCompliance,
  noteID,
}) => {
  // console.log("USer Data: ",userData);
  var CreationDate = formatDate(new Date());

  const [newApprover, setNewApprover] = useState([]);
  const [text, setText] = useState("");
  const [visiblemenu, setVisible] = useState(false);
  const [returnTo, setreturnTo] = useState(null);
  const [Modvisible, setModvisible] = useState(false);
  const [pdfNote, setPdfNote] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const hideModal = () => triggerfun();
  const containerStyle = { backgroundColor: "white", padding: 20, margin: 20 };

  const handleReturn = () => {
    const addrecord = {
      cmRemark: text,
      dateofAck: CreationDate,
    };

    sendtoCompliance(addrecord);
    setText("");
    hideModal();
  };

  return (
    <Modal
      open={visible}
      onClose={hideModal}
    >
      <Box sx={style}>
        {Modvisible ? (
          <Skeleton />
        ) : (
          <>
           
            <TextField
              label="Type your message"
              value={text}
              onChange={(text) => setText(text.target.value)}
              variant="outlined"
              sx={TextInput}
              multiline
              rows={4}
              fullWidth
            />

            <Button  variant="outlined" onClick={handleReturn}>
              Send Compliance Acknowledgement
            </Button>
          </>
        )}
      </Box>
    </Modal>
  );
};

  const TextInput= {
    height: 150,
   
  }
     const style = {
       position: "absolute",
       top: "45%",
       left: "50%",
       transform: "translate(-50%, -50%)",
       width: "75%",
       bgcolor: "background.paper",
       border: "2px solid grey",
       boxShadow: 24,
       borderRadius: 8,
       p: 4,
       maxHeight: "90vh",
       overflowY: "auto",
     };
export default ComplianceModal;
