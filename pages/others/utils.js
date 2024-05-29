// import { PermissionsAndroid } from "react-native";
// import { Alert } from "react-native";
// import { Buffer } from "buffer";
// import { PDFDocument, rgb, StandardFonts, degrees } from "pdf-lib";
// import RNFS from "react-native-fs";
// import base64 from "base64-js";
// import storage from "@react-native-firebase/storage";

// export const uriToBlob = (uri) => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.onload = function () {
//       resolve(xhr.response);
//     };
//     xhr.onerror = function () {
//       reject(new Error("uriToBlob failed"));
//     };
//     xhr.responseType = "blob";
//     xhr.open("GET", uri, true);
//     xhr.send(null);
//   });
// };

// export const requestStoragePermission = async () => {
//   try {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//       {
//         title: "Storage Permission",
//         message: "App needs access to your storage to upload files.",
//         buttonNeutral: "Ask Me Later",
//         buttonNegative: "Cancel",
//         buttonPositive: "OK",
//       }
//     );
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//       console.log("Storage permission granted");
//       // Perform your file selection logic here
//     } else {
//       console.log("Storage permission denied");
//     }
//   } catch (err) {
//     console.warn(err);
//   }
// };

// export const pickDocument = async () => {
//   try {
//     const result = await DocumentPicker.pick({
//       type: [DocumentPicker.types.allFiles], // Allow all file types
//     });
//     console.log("Inisde the pickDoc: ", result);
//     return result;
//   } catch (error) {
//     if (DocumentPicker.isCancel(error)) {
//       throw new Error("User cancelled document selection.");
//     } else {
//       throw new Error(`Error picking document: ${error}`);
//     }
//   }
// };

// const generateHTML = (data, notetitle, notedate, noteId, status) => {
//   return `
//       <html>
//         <head>
//           <title>Work Flow</title>
//           <style>
//          table {
//             width: 100%;
//             border-collapse: collapse;
//           }
//           th, td {
//             border: 1px solid black;
//             padding: 8px;
//             text-align: left;
//             word-wrap: break-word; /* Allow content to wrap within table cells */
//           }
//           #logo {
//             width: 100px; /* Adjust the width of the logo as needed */
//             height: auto;
//           }
//           </style>
//         </head>
//         <body>
//         <img src="https://firebasestorage.googleapis.com/v0/b/tgb-app-e24e1.appspot.com/o/assets%2FCapture.PNG?alt=media&token=8423ee39-47b3-42f6-83f2-4a60ae03cb78" />
//         <br>
//           <table>
//           <thead>
//           <tr>
//             <th style='text-align:center; background-color:lightblue' colspan=4>Note Details</th>
//           </tr>
//           <tr>   
//             <th>Note No:</th><th> ${noteId}</th><th  style='text-align:center; background-color:lightblue'>STATUS</th>
//             <th  style='text-align:center; background-color:lightblue'>${status}</th> 
//           </tr>
//           <tr>  <th>SUBJECT:</th>         
//             <th colspan=3 style='text-align:LEFT'>${notetitle.toUpperCase()} ON  ${notedate}</th>               
//           </tr>
//            <tr>           
//             <th colspan=4 style='text-align:center; background-color:lightblue'><h3>AUDIT LOG</h3></th>               
//           </tr>
//             </thead>           
//           </table>  
          
//           <br>
//           <table>
           
//             <tbody>
//               ${data
//                 .map(
//                   (item) => `
//                 <tr>
//                 <td>${item.status.toUpperCase()} by ${item.username}(${
//                     item.userId
//                   }) ${item.desig} ON ${item.postDate}. <br> Remark: ${
//                     item.detail
//                   }</td>                              
//                 </tr>
//               `
//                 )
//                 .join("")}
//             </tbody>
//           </table>
//         </body>
//       </html>
//     `;
// };

// const generatePDF = async (approver, notetitle, notedate, noteId, status) => {
//   try {
//     const htmlContent = generateHTML(
//       approver,
//       notetitle,
//       notedate,
//       noteId,
//       status
//     );
//     // console.log('HTML Content:', htmlContent); // Add this line
//     console.log("Status", status);
//     const options = {
//       html: htmlContent,
//       fileName: "report",
//       directory: "Documents",
//     };
//     const { filePath } = await RNHTMLtoPDF.convert(options);
//     // console.log(filePath);
//     return filePath;
//   } catch (error) {
//     console.error("Error generating PDF:", error);
//   }
// };

// export const mergePDFs = async (
//   note,
//   annexure,
//   reference,
//   approver,
//   noteId,
//   notetitle,
//   notedate,
//   status
// ) => {
//   console.log("Status", status);

//   let pdfPath;
//   try {
//     pdfPath = await generatePDF(approver, notetitle, notedate, noteId, status);
//     if (!pdfPath) {
//       Alert.alert("PDF not generated yet!");
//       return;
//     }
//     let noteAnnexDoc;
//     let noteRefDoc;
//     // Read the local PDF file
//     const summaryPdfBytes = await RNFS.readFile(pdfPath, "base64");
//     const summaryPdfArrayBuffer = base64.toByteArray(summaryPdfBytes).buffer;

//     // Load the local PDF document
//     const summaryPdfDoc = await PDFDocument.load(summaryPdfArrayBuffer);

//     //getting the note PDF from URL
//     const notepdfUrl = note;
//     const notePdfBytes = await fetch(notepdfUrl).then((res) =>
//       res.arrayBuffer()
//     );
//     // Load the Note PDF document
//     const notePdfDoc = await PDFDocument.load(notePdfBytes);
//     if (annexure) {
//       //getting the note Annexure from URL
//       const noteAnnexUrl = annexure;
//       const noteAnnexBytes = await fetch(noteAnnexUrl).then((res) =>
//         res.arrayBuffer()
//       );
//       // Load the Note PDF document
//       noteAnnexDoc = await PDFDocument.load(noteAnnexBytes);
//     }

//     if (reference) {
//       //getting the note Reference from URL
//       const noteRefUrl = reference;
//       const noteRefBytes = await fetch(noteRefUrl).then((res) =>
//         res.arrayBuffer()
//       );
//       // Load the Note PDF document
//       noteRefDoc = await PDFDocument.load(noteRefBytes);
//     }

//     // Create a new PDF document
//     const pdfDoc = await PDFDocument.create();

//     // Iterate over each page of the local PDF document
//     for (let i = 0; i < summaryPdfDoc.getPageCount(); i++) {
//       const embeddedPage = await pdfDoc.embedPage(summaryPdfDoc.getPage(i));
//       const embeddedPageDims = embeddedPage.scale(0.9);
//       // Add the embedded page to the new PDF document
//       const page = pdfDoc.addPage();
//       page.drawPage(embeddedPage, {
//         ...embeddedPageDims,
//         x: page.getWidth() / 2 - embeddedPageDims.width / 2,
//         y: page.getHeight() - embeddedPageDims.height - 30,
//       });
//     }
//     // Iterate over each page of the local PDF document
//     for (let i = 0; i < notePdfDoc.getPageCount(); i++) {
//       const embeddedPage = await pdfDoc.embedPage(notePdfDoc.getPage(i));
//       const embeddedPageDims = embeddedPage.scale(0.9);
//       // Add the embedded page to the new PDF document
//       const page = pdfDoc.addPage();
//       page.drawPage(embeddedPage, {
//         ...embeddedPageDims,
//         x: page.getWidth() / 2 - embeddedPageDims.width / 2,
//         y: page.getHeight() - embeddedPageDims.height - 10,
//       });
//       // Add watermark
//       const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
//       page.drawText(status == "Approved" ? "Approved Note" : "Rejected Note", {
//         x: 200,
//         y: 300,
//         size: 50,
//         font: helveticaFont,
//         color: status == "Approved" ? rgb(0, 1, 0) : rgb(1, 0, 0),
//         opacity: 0.3,
//         rotate: degrees(45),
//       });
//     }
//     if (annexure) {
//       for (let i = 0; i < noteAnnexDoc.getPageCount(); i++) {
//         const embeddedPage = await pdfDoc.embedPage(noteAnnexDoc.getPage(i));
//         const embeddedPageDims = embeddedPage.scale(0.9);
//         // Add the embedded page to the new PDF document
//         const page = pdfDoc.addPage();
//         page.drawPage(embeddedPage, {
//           ...embeddedPageDims,
//           x: page.getWidth() / 2 - embeddedPageDims.width / 2,
//           y: page.getHeight() - embeddedPageDims.height - 10,
//         });
//         // Add watermark
//         const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
//         page.drawText(
//           status == "Approved" ? "Approved Annexure" : "Rejected Annexure",
//           {
//             x: 200,
//             y: 300,
//             size: 50,
//             font: helveticaFont,
//             color: status == "Approved" ? rgb(0, 1, 0) : rgb(1, 0, 0),
//             opacity: 0.3,
//             rotate: degrees(45),
//           }
//         );
//       }
//     }
//     if (reference) {
//       for (let i = 0; i < noteRefDoc.getPageCount(); i++) {
//         const embeddedPage = await pdfDoc.embedPage(noteRefDoc.getPage(i));
//         const embeddedPageDims = embeddedPage.scale(0.9);
//         // Add the embedded page to the new PDF document
//         const page = pdfDoc.addPage();
//         page.drawPage(embeddedPage, {
//           ...embeddedPageDims,
//           x: page.getWidth() / 2 - embeddedPageDims.width / 2,
//           y: page.getHeight() - embeddedPageDims.height - 10,
//         });
//         // Add watermark
//         const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
//         page.drawText(
//           status == "Approved" ? "Approved Reference" : "Rejected Reference",
//           {
//             x: 200,
//             y: 300,
//             size: 50,
//             font: helveticaFont,
//             color: status == "Approved" ? rgb(0, 1, 0) : rgb(1, 0, 0),
//             opacity: 0.3,
//             rotate: degrees(45),
//           }
//         );
//       }
//     }

//     const pdfBytes = await pdfDoc.save();
//     const base64Pdf = Buffer.from(pdfBytes).toString("base64");
//     // const source = {
//     //   uri: `data:application/pdf;base64,${base64Pdf}`,
//     //   cache: true,
//     // };

//     const storageRef = storage().ref();
//     const remoteFilePath = `easyApproval/${noteId}`;
//     const documentRef = storageRef.child(`${remoteFilePath}/Approved_Note`);
//     try {
//       // await documentRef.put(blob);
//       await documentRef.putString(base64Pdf, "base64");
//       const url = await documentRef.getDownloadURL();
//       // console.log('Approved note Download URL: ', url);
//       return url;
//     } catch (error) {
//       console.log("Error Uploading Document: ", error);
//     }

//     Alert.alert("Note saved successfully!");

//     //   Alert.alert('PDF downloaded successfully!', `Path: ${mergedPath}`);
//   } catch (error) {
//     console.error("Error merging PDFs:", error);
//   }
// };
export const formatDate = (date) => {
  // Get the day, month, year, hours, minutes, and seconds
  var day = date.getDate();
  var month = date.getMonth() + 1; // January is 0
  var year = date.getFullYear();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  // Add leading zeroes if necessary
  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Determine AM or PM
  var amOrPm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 should be converted to 12

  // Construct the formatted date string
  var formattedDate =
    day +
    "/" +
    month +
    "/" +
    year +
    ", " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds +
    " " +
    amOrPm;

  return formattedDate;
};
