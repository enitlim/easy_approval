// pages/pdf/[uri].js

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import firebase from "firebase/app";
import "firebase/storage";

const PDFViewer = ({ url }) => {
  return (
    <iframe
      src={url}
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        bottom: "0",
        right: "0",
        width: "100%",
        height: "100%",
      }}
      frameBorder="0"
    ></iframe>
  );
};

const PDFPage = () => {
  const router = useRouter();
  const { uri } = router.query;
console.log("URI in the viewNote: ",uri);


  return (
    <div style={{ width: "100%", height: "100vh"}}>
      {uri && <PDFViewer url={uri} />}
      {!uri && <p>Loading...</p>}
    </div>
  );
};

export default PDFPage;
