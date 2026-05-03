import express from "express";

const router = express.Router();

router.get("/send", (req, res) => {
  res.send("Send Messages endpoint");
});

router.get("/receive", (req, res) => {
  res.send("Receive Messages endpoint");
});

export default router;