const express = require("express");
const app = express();
const port = 3000;
const cors= require("cors");
 
 
//middleware
app.use(express.json());
app.use(cors());
 
 
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://<username>:<password>@cluster0.x52xd2s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

async function run() {
  try {
    

console.log("before starting")

  } finally {
    
  }
}
run().catch(console.dir);
