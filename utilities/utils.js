import htmlToPdfmake from "html-to-pdfmake";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { PDFDocument, rgb, StandardFonts, degrees } from "pdf-lib";
import { Buffer } from "buffer";
import { ref, getDownloadURL, uploadString } from "firebase/storage";
import { storage } from "@/firebase/SettingFirebase";

const generateHTML = (data, notetitle, notedate, noteId, status,logo) => {
  return `
    <html>
      <head>
        <title>Work Flow</title>
      </head>
      <body>
        <div style="text-align: center;">
        <img src="${logo}" id="logo" style="width: 500; height: auto;" />
        <h3>Easy Approval</h3></div>
        <table style="width:400; border-collapse: collapse;">
          <thead>
            <tr>
              <th style="text-align: center; background-color: lightblue;" colspan="4">Note Details</th>
            </tr>
            <tr>
              <th>Note No:</th><th>${noteId}</th><th style="text-align: center; background-color: lightblue;">STATUS</th>
              <th style="text-align: center; background-color: lightblue;">${status}</th> 
            </tr>
            <tr>
              <th>SUBJECT:</th>
              <th colspan="3" style="text-align: left;">${notetitle.toUpperCase()} ON ${notedate}</th>
            </tr>
            <tr>
              <th colspan="4" style="text-align: center; background-color: lightblue;"><h3>AUDIT LOG</h3></th>
            </tr>
          </thead>           
        </table>  
        <table style=" border-collapse: collapse;">
          <tbody>
            ${data
              .map(
                (item) => `
                <tr>
                  <td style="border: 1px solid black; padding: 8px; word-wrap: break-word;">
                    ${item.status.toUpperCase()} by ${item.username}(${
                  item.userId
                }) ${item.desig} ON ${item.postDate}. <br> Remark: ${
                  item.detail
                }
                  </td>
                </tr>
              `
              )
              .join("")}
          </tbody>
        </table>
      </body>
    </html>
  `;
};

const generatePDF = async (approver, notetitle, notedate, noteId, status , logo) => {
  const htmlContent = generateHTML(
    approver,
    notetitle,
    notedate,
    noteId,
    status, logo
  );
  const pdfContent = htmlToPdfmake(htmlContent);

  const docDefinition = {
    content: pdfContent,
    styles: {
      
      centered: {
        alignment: "center",
      },
    },
    // defaultStyle: {
    //   font: "Helvetica",
    // },
   
  };

  // Ensure all tables take full width
  pdfContent.forEach((item) => {
    if (item.table) {
      item.layout = "exampleLayout";
      item.widths = Array(item.table.body[0].length).fill("*");
    }
  });

  return new Promise((resolve, reject) => {
    pdfMake.createPdf(docDefinition).getBase64((data) => {
      resolve(data);
    });
  });
};

const fetchAndLoadPdf = async (url) => {
  console.log("URL for the file is here: ",url);
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  return PDFDocument.load(arrayBuffer); //error here
};

const embedPages = async (sourceDoc, targetDoc, statusText) => {
  for (let i = 0; i < sourceDoc.getPageCount(); i++) {
    const [embeddedPage] = await targetDoc.copyPages(sourceDoc, [i]);
    const page = targetDoc.addPage(embeddedPage);
    const { width, height } = page.getSize();
    const helveticaFont = await targetDoc.embedFont(StandardFonts.Helvetica);
    page.drawText(statusText, {
      x: width / 4,
      y: height / 2,
      size: 50,
      font: helveticaFont,
      color: status === "Approved" ? rgb(0, 1, 0) : rgb(1, 0, 0),
      opacity: 0.3,
      rotate: degrees(45),
    });
  }
};

export const mergePDFs = async (
  note,
  annexure,
  reference,
  approver,
  noteId,
  notetitle,
  notedate,
  status, logo 
) => {
  try {
    const summaryPdfBase64 = await generatePDF(
      approver,
      notetitle,
      notedate,
      noteId,
      status, logo
    );
    const summaryPdfBytes = Buffer.from(summaryPdfBase64, "base64");
    const summaryPdfDoc = await PDFDocument.load(summaryPdfBytes);

    const pdfDoc = await PDFDocument.create();

    await embedPages(
      summaryPdfDoc,
      pdfDoc,
      status === "Approved" ? "Approved Note" : "Rejected Note"
    );

    const notePdfDoc = await fetchAndLoadPdf(note);
    await embedPages(
      notePdfDoc,
      pdfDoc,
      status === "Approved" ? "Approved Note" : "Rejected Note"
    );

    if (annexure) {
      const noteAnnexDoc = await fetchAndLoadPdf(annexure);
      await embedPages(
        noteAnnexDoc,
        pdfDoc,
        status === "Approved" ? "Approved Annexure" : "Rejected Annexure"
      );
    }

    if (reference) {
      const noteRefDoc = await fetchAndLoadPdf(reference);
      await embedPages(
        noteRefDoc,
        pdfDoc,
        status === "Approved" ? "Approved Reference" : "Rejected Reference"
      );
    }

    const mergedPdfBytes = await pdfDoc.save();
    const mergedPdfBase64 = Buffer.from(mergedPdfBytes).toString("base64");
    // console.log(mergedPdfBase64);
    const FinalPDF = `data:application/pdf;base64,${mergedPdfBase64}`;
    const storageRef = ref(storage, `easyApproval/${noteId}/Approved_Note`);
     await uploadString(storageRef, FinalPDF, "data_url");
     console.log("Uploaded a blob or file!");

     // Get the download URL
     const url = await getDownloadURL(storageRef);
   
    return url;
  } catch (error) {
    console.error("Error merging PDFs:", error);
    throw error;
  }
};
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
