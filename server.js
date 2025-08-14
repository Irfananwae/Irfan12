// server.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Default route (root)
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Welcome to API!" });
});

// Example data route
app.get("/data", (req, res) => {
  res.json({
    message: "✅ Backend is working!",
    time: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
