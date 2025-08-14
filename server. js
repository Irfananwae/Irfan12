const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Main route
app.get("/", (req, res) => {
  res.json({ message: "✅ Backend server is working!" });
});

// Example route: Users
app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" }
  ]);
});

// Example route: Balance
app.get("/balance", (req, res) => {
  res.json({ balance: 1500 });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
