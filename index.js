const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const NewsModel = require("./models/news.js");
const SignupModel = require("./models/Signup.js");
// hari 1234
app.listen(3000, () => {});

app.get("/", (req, res) => {
  res.json({ name: "hari" });
});

app.post("/api/addnews", async (req, res) => {
  try {
    const news = await NewsModel.create(req.body);
    res.status(200).json(news);
    console.log(req.body);
  } catch (error) {
    res.send(500);
  }
});

app.post("/api/signup", async (req, res) => {
  try {
    const Signup = await SignupModel.create(req.body);
    res.status(200).json(Signup);
    console.log(req.body);
  } catch (error) {
    res.send(500);
  }
});
app.post("/api/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const Signup = await SignupModel.findOne({ email: email }).then((user) => {
      if (user) {
        if (user.password === password) {
          res.json("Success");
        } else {
          res.json("Password incorrect");
        }
      } else {
        res.json("No Record Found");
      }
    });

    console.log(req.body);
  } catch (error) {
    res.send(500);
  }
});
app.get("/api/news", async (req, res) => {
  try {
    const news = await NewsModel.find({});
    res.status(200).json(news);
    console.log(req.body);
  } catch (error) {
    res.send(500);
  }
});
app.get("/api/news/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const news = await NewsModel.findById(id);
    res.status(200).json(news);
    //console.log(express.json(news));
  } catch (error) {
    res.send(500);
  }
});

app.put("/api/news/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const news = await NewsModel.findByIdAndUpdate(id, req.body);
    if (!news) {
      return res.status(404).json({ Message: "News not found" });
    }
    const updatenews = await NewsModel.findById(id);
    res.status(200).json(updatenews);

    //console.log(express.json(news));
  } catch (error) {
    res.send(500);
  }
});

app.delete("/api/news/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const news = await NewsModel.findByIdAndDelete(id, req.body);
    if (!news) {
      return res.status(404).json({ Message: "News not found" });
    }
    const updatenews = await NewsModel.findById(id);
    res.status(200).json("Deleted");

    //console.log(express.json(news));
  } catch (error) {
    res.send(500);
  }
});

mongoose
  .connect(
    "mongodb+srv://hari:1234@cluster0.o2xyi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connected to DB");
  });
