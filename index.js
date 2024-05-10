const express = require("express");
const app = express();
const port = 3000;
const cors= require("cors");
 
 
//middleware
app.use(express.json());
app.use(cors());
 
 
const { MongoClient } = require("mongodb");

// MongoDB connection URI
const uri =
  "mongodb+srv://<username>:<password>@cluster0.x52xd2s.mongodb.net/<dbname>?retryWrites=true&w=majority";

// Function to connect to MongoDB and perform operations
async function connectAndPerformOperations() {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    // Connect to the MongoDB database
    await client.connect();
    console.log("Connected to the MongoDB database");

    // Perform database operations here
    const database = client.db("<dbname>");
    const collection = database.collection("<collection>");

    // Example: Insert a document
    await collection.insertOne({ name: "John", age: 30 });
    console.log("Inserted document into collection");

    // Example: Find documents
    const documents = await collection.find({}).toArray();
    console.log("Found documents:", documents);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    // Close the connection when done
    await client.close();
    console.log("Connection closed");
  }
}

// Call the function to connect and perform operations
connectAndPerformOperations();
