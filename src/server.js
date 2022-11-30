const express = require("express");
const { connectMongo } = require("./utils/mongo");

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

async function main() {
  try {
    await connectMongo();
    // start express server 
    app.listen(PORT, () => console.log(`listening on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}

main();
