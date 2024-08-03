const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, "../frontend")));

let data = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
];

app.get("/api/data", (req, res) => {
  res.json(data);
});

app.post("/api/data", (req, res) => {
  const newData = req.body;
  data.push(newData);
  res.json(newData);
});

// Example 3xx redirection
app.get("/api/redirect", (req, res) => {
  res.redirect("/api/data");
});

// Example 4xx client error
app.get("/api/client-error", (req, res) => {
  res.status(400).json({ error: "Bad Request" });
});

// Example 5xx server error
app.get("/api/server-error", (req, res) => {
  res.status(500).json({ error: "Internal Server Error" });
});

// Serve index.html for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
