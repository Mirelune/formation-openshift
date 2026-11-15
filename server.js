const express = require("express");
const app = express();
const port = Number(process.env.PORT || 8080);

app.get("/", (_req, res) => {
  res.send("TP4 – application construite par OpenShift Build.");
});

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "UP" });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`TP4 application listening on ${port}`);
});
