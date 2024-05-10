const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());

const dataFilePath = "./data.json";

// Helper function to read data from the JSON file
const readDataFromFile = () => {
  try {
    const data = fs.readFileSync(dataFilePath);
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading data from file:", error);
    return [];
  }
};

// Helper function to write data to the JSON file
const writeDataToFile = (data) => {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error writing data to file:", error);
  }
};

// GET all items
app.get("/api/items", (req, res) => {
  const items = readDataFromFile();
  res.json(items);
});

// GET item by ID
app.get("/api/items/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const items = readDataFromFile();
  const item = items.find((item) => item.id === itemId);
  if (!item) return res.status(404).send("Item not found");
  res.json(item);
});

// POST a new item
app.post("/api/items", (req, res) => {
  const newItem = {
    id: Date.now(),
    name: req.body.name,
  };
  const items = readDataFromFile();
  items.push(newItem);
  writeDataToFile(items);
  res.status(201).json(newItem);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


//check dara 