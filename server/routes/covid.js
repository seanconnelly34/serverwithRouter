require("dotenv").config();
const path = require("path");
const express = require("express");
const router = new express.Router();
const fs = require("fs");
const PDFDocument = require("pdfkit");
const transporter = require("../config");
const Timestamp = require("../utils/Timestamp");


const NewDate = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var dateObj = new Date();
  var month = monthNames[dateObj.getMonth()];
  var day = dateObj.getDate();
  var year = dateObj.getFullYear();

  const newdate = month + " " + day + ", " + year;

  return newdate;
};



router.post("/covid", (req, res) => {
  const secondsId = Timestamp();
  const doc = new PDFDocument({ margin: 20, compress: false });
  let fileName = req.body.name;

  doc.pipe(
    fs.createWriteStream(__dirname + `/Covid_${fileName}_${secondsId}.pdf`)
  );
  // Set some meta data
  doc.info["Title"] = "Covid Assessment Form";
  doc.info["Author"] = "Landings Surgical Center";

  doc.image(__dirname + "/covid-risk-1.jpg", 10, 10, { width: 600 });
  doc.fontSize(11);
  doc.font("Times-Roman");
  doc.text(NewDate(), 90, 190);
  doc.text(req.body.name, 125, 213);
  doc.text(req.body.dob, 90, 233);
  req.body.cough ? doc.image(__dirname + "/check.png", 82, 286, { width: 10 }) : "";
  req.body.fever ? doc.image(__dirname + "/check.png", 82, 298, { width: 10 }) : "";
  req.body.nosimp ? doc.image(__dirname + "/check.png", 82, 309, { width: 10 }) : "";

  req.body.throat ? doc.image(__dirname + "/check.png", 82, 355, { width: 10 }) : "";
  req.body.headache ? doc.image(__dirname + "/check.png", 82, 367, { width: 10 }) : "";
  req.body.nose ? doc.image(__dirname + "/check.png", 82, 378, { width: 10 }) : "";
  req.body.breath ? doc.image(__dirname + "/check.png", 82, 389, { width: 10 }) : "";
  req.body.nosimp2 ? doc.image(__dirname + "/check.png", 82, 400, { width: 10 }) : "";

  
  req.body.waitingresults ? doc.image(__dirname + "/check.png", 82, 457, { width: 10 }) : "";
  req.body.testedpositive ? doc.image(__dirname + "/check.png", 82, 469, { width: 10 }) : "";
  req.body.hadcontact ? doc.image(__dirname + "/check.png", 82, 480, { width: 10 }) : "";
  req.body.travelled ? doc.image(__dirname + "/check.png", 82, 491, { width: 10 }) : "";
  req.body.requirements ? doc.image(__dirname + "/check.png", 82, 502, { width: 10 }) : "";

  doc.addPage();
  doc.image(__dirname + "/covid-risk-2.jpg", 10, 10, { width: 600 });

  doc.image(req.body.trimmedSignature, 130, 120, { width: 100 });
  doc.text(NewDate(), 400, 150);

  doc.end();

  // res.json({
  //   success: true,
  //   message: "thanks for contacting us.",
  // });
  try {
    const mailOptions = {
      from: "sean@suhbae.com",
      to: "info@landingsurgery.ca",
      subject: `Covid-19 Assessment - ${req.body.name}`,
      html: req.body.date,
      html: req.body.name,
      attachments: [
        {
          filename: `Covid_${fileName}_${secondsId}.pdf`,
          path: __dirname + `/Covid_${fileName}_${secondsId}.pdf`,
          contentType: "application/pdf",
        },
      ],
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.status(500).send({
          success: false,
          message: "sending mail went wrong, try again",
        });
      } else {
        res.send({
          success: true,
          message: "thanks for contacting us.",
        });
      }
    });
  } catch (error) {
    res.sendStatus(500).send({
      success: false,
      message: "covid end catch block, try again later",
    });
  }
});

module.exports = router;
