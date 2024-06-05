import { Button, Modal, TextField } from "@mui/material";
import React, { useState } from "react";
import { formatDate } from "../others/utils";

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
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}
      >
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
              row={4}
              fullWidth
            />

            <Button
              sx={margins}
              variant="outlined"
              onClick={handleReturn}
            >
              Send Compliance Acknowledgement
            </Button>
          </>
        )}
      </Modal>  );
};
  const margins= {
    marginTop: 10,
    marginBottom: 10,
  }
  const TextInput= {
    height: 150,
    marginTop: 10,
    marginBottom: 10,
  }
export default ComplianceModal;
