// Dependencies
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const projectSchema = require("../schema/projectSchema");

// Functions
const router = express.Router();
const UPLOAD_FOLER = "./uploads";

const Project = mongoose.model("project", projectSchema);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOAD_FOLER);
  },
  filename: (req, file, cb) => {
    const fileExt = path.extname(file.originalname);
    const fileName =
      file.originalname
        .replace(fileExt, "")
        .toLowerCase()
        .split(" ")
        .join("-") +
      "-" +
      Date.now();

    cb(null, fileName + fileExt);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
});

router.get("/", (req, res) => {
  res.send("Welcome");
});

router.get("/get-project/:id", async (req, res) => {
  if (req.params.id === "All") {
    const projects = await Project.find({ __v: 0 });
    res.send(projects);
  } else {
    const projects = await Project.find({ type: req.params.id });
    res.send(projects);
  }
});

router.post("/add-project", upload.single("project"), (req, res, next) => {
  if (req.body !== null) {
    try {
      const { name, type, description, liveLink, sourceCode } = req.body;
      const fileInfo = req.file.path;

      Project.create({
        name,
        type,
        image: fileInfo,
        description,
        liveLink,
        sourceCode,
      })
        .then(() => {
          res.send("Project added successfully");
        })
        .catch((err) => {
          res.send(err.message);
        });
    } catch (err) {
      res.send(err.message);
    }
  } else {
    res.send("Please send me required data");
  }
});

module.exports = router;
