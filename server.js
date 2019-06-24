const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function(req, res) {
  console.log("AM I GETTING HERE?");
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(3000, () => {
  console.log("Server running on Port 3000");
});
