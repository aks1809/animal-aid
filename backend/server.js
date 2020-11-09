import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Pusher from "pusher";
import Stories from "./success.js";
import Messages from "./talkToUs.js";
import Donations from "./donation.js";

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
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
  console.log("DB connected");
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
      console.log("Error triggering pusher");
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

app.get("/success-stories/:storyId", (req, res) => {
  Stories.findOne({ _id: req.params.storyId }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/success-stories/new", (req, res) => {
  const dbStory = req.body;
  Stories.create(dbStory, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
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
    }
  });
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

app.post("/donate/new", (req, res) => {
  const donationDetails = req.body;
  Donations.create(donationDetails, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/", (req, res) => res.status(200).send("hello"));

app.listen(port, () => console.log(`Listening on localhost:${port}`));
