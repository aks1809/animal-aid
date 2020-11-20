import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import Stories from "./success.js";
import Adopts from "./adopt.js";
import AdoptContactForms from "./adoptForm.js";
import fileUpload from "express-fileupload";
import { dirname } from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import Pusher from "pusher";
import Messages from "./talkToUs.js";
import Donations from "./donation.js";
import Contacts from "./contact.js";
import axios from "axios";
import Razorpay from "razorpay";
// import { v4 as uuidv4 } from "uuid";
import nodemailer from "nodemailer";

const app = express();
const port = process.env.PORT || 9000;

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "mymail@gmail.com",
//     pass: "mypassword",
//   },
// });

const instance = new Razorpay({
  key_id: "rzp_test_kGHEKiVYhobBNU",
  key_secret: "w88Z5gwKZNwSYXsGrgSHL2BD",
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(cors());

const connection_url =
  "mongodb+srv://Arpit-Akshay:Arpit22@@@animal-aid.sj5o2.mongodb.net/animal-aid?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const pusher = new Pusher({
  appId: "1103940",
  key: "fb46276ac52a5ca3188c",
  secret: "b43eae3e4b0de56194c2",
  cluster: "ap2",
  useTLS: true,
});

const db = mongoose.connection;

db.once("open", () => {
  // console.log("DB connected");
  const messageCollection = db.collection("talk-to-us");
  const changeStream = messageCollection.watch();
  changeStream.on("change", (change) => {
    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("message", "inserted", {
        id: messageDetails._id,
        message: messageDetails.message,
        userId: messageDetails.userId,
        isAdmin: messageDetails.isAdmin,
      });
    } else {
      // console.log("Error triggering pusher");
    }
  });
});

app.get("/success-stories/sync", (req, res) => {
  Stories.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get("/adoptForm/sync", (req, res) => {
  Adopts.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get("/success-stories/:storyId", (req, res) => {
  Stories.findOne({ _id: req.params.storyId }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get("/howToHelp/adopt/:adoptId", (req, res) => {
  Adopts.findOne({ _id: req.params.adoptId }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/success-stories/new", (req, res) => {
  const dbStory = req.body;
  // console.log(req.body);
  // console.log("successfully added");
  Stories.create(dbStory, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
      // console.log("successfully added");
    }
  });
});

app.post("/adoptForm/new", (req, res) => {
  const dbAdopt = req.body;
  // console.log(req.body);
  // console.log("successfully added");
  Adopts.create(dbAdopt, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
      // console.log("successfully added");
    }
  });
});

app.post("/talkToUs/new", (req, res) => {
  const message = req.body;
  Messages.create(message, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
      // console.log("successfully added");
    }
  });
});

app.post("/adoptContactForm/new", (req, res) => {
  const dbAdoptContact = req.body;
  // console.log(req.body);
  AdoptContactForms.create(dbAdoptContact, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
      // console.log("successfully added");
    }
  });
});

const __dirname = dirname(fileURLToPath(import.meta.url));

app.post("/upload", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }
  const file = req.files.file;
  file.mv(
    `${__dirname}/../frontend/animal/public/uploads/${file.name}`,
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }

      res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    }
  );
});

app.get("/talkToUs/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/razorpay", (req, res) => {
  try {
    const payment_capture = 1;
    const amount = req.body.amount;
    const currency = "INR";
    const id = 1;

    const options = {
      amount: amount,
      currency,
      receipt: id,
      payment_capture,
    };
    instance.orders.create(options, (err, data) => {
      if (err) {
        return res.status(500).json({
          message: "Something went wrong",
        });
      }
      return res.status(200).json({
        id: data.id,
        amount: data.amount,
      });
    });
  } catch (err) {
    // console.log(err);
  }
});

app.post("/contactForm", async (req, res) => {
  const contactDetails = req.body;
  if (!contactDetails.token) {
    res.status(400).send("reCaptcha token is missing");
  }
  try {
    const googleVerify = `https://www.google.com/recaptcha/api/siteverify?secret=6LdfAuIZAAAAANnE17sAt33NvLA3f2NEljENmutG&response=${contactDetails.token}`;
    const response = await axios.post(googleVerify);
    const { success } = response.data;
    if (success) {
      Contacts.create(contactDetails, (err, data) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(201).send(data);
          // const mailOptions = {
          //   from: "mymail@gmail.com",
          //   to: details.emailAddress,
          //   subject: "Contact details",
          //   html: `<h1>Someone send a query</h1><p>${
          //     contactDetails.firstName + " " + contactDetails.lastName
          //   }</p><p>${contactDetails.emailAddress}</p><p>${
          //     contactDetails.query
          //   }</p>`,
          // };

          // transporter.sendMail(mailOptions, function (error, info) {
          //   if (error) {
          //     console.log(error);
          //   } else {
          //     console.log("Email sent: " + info.response);
          //   }
          // });
        }
      });
    } else {
      res.status(400).send("reCaptcha error");
    }
  } catch (e) {
    res.status(400).send("reCaptcha error");
  }
});

app.post("/donation/new", (req, res) => {
  const details = req.body;
  // console.log(details);

  // const mailOptions = {
  //   from: "mymail@gmail.com",
  //   to: details.emailAddress,
  //   subject: "Donation details",
  //   html: `<h1>Thank you for donating!</h1><p>${details.amount}</p><p>${details.payment_id}</p><p>${details.order_id}</p>`,
  // };

  // transporter.sendMail(mailOptions, function (error, info) {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log("Email sent: " + info.response);
  //   }
  // });

  Donations.create(details, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get("/", (req, res) => res.status(200).send("hello"));

app.listen(port, () => console.log(`Listening on localhost:${port}`));
