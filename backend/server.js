import express from "express";
import mongoose from "mongoose";
import Stories from "./success.js";

const app = express();
const port = process.env.PORT || 9000;
app.use(express.json());

const connection_url =
  "mongodb+srv://Arpit-Akshay:Arpit22@@@animal-aid.sj5o2.mongodb.net/animal-aid?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
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
app.get("/", (req, res) => res.status(200).send("hello"));
app.listen(port, () => console.log(`Listening on localhost:${port}`));
