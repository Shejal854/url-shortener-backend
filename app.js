const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const connectDB = require("./config/db");
const urlRoutes = require("./routes/urlRoutes");
const { redirectToOriginal } = require("./controllers/urlController");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ success: true, message: "URL Shortener API is running" });
});

app.use("/api/url", urlRoutes);
app.get("/:shortCode", redirectToOriginal);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on the port ${PORT}`);
});