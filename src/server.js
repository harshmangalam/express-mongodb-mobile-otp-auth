require("dotenv").config()
const express = require("express");
const { connectMongo } = require("./utils/mongo");
const authRoutes = require("./routes/auth");
const {
  notFoundErrorHandler,
  globalErrorHandler,
} = require("./middlewares/error");
const app = express();

const PORT = process.env.PORT
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

// register auth routes
app.use("/api/auth", authRoutes);

// api route not found error handling
app.use("*", notFoundErrorHandler);

//global error handler
app.use(globalErrorHandler);

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
