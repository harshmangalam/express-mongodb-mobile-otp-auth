const express = require("express");

const app = express();

const PORT = 4000;
// parse incomming request into json
app.use(express.json());

// server health check
app.get("/", (req, res) => {
  res.status(200).json({
    type: "success",
    message: "server is up and running",
    data: null,
  });
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
