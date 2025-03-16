require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path"); // Import path module 👈

const authRoutes = require("./routes/auth");
const bookRoutes = require("./routes/books");

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

// 👇 Add this line to serve uploaded images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/auth", authRoutes);
app.use("/books", bookRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
