var fs = require("fs");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("public"));

app.use("/public", express.static("public"));

app.get("/data", (req, res) => {
  let rawdata = fs.readFileSync("data.json");
  let data = JSON.parse(rawdata);
  res.json(data);
});

app.listen(port, () => console.log(`listening on port ${port}!`));
