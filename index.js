const express = require("express");
const app = express();
const port = 3000;
const cors= require("cors");
const { MongoClient } = require("mongodb");

//middleware
app.use(express.json());
app.use(cors());




app.get("/", (req, res) => {
  res.send("Hello World!");
});


// Replace the uri string with your connection string.
const uri = "<connection string uri>";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("sample_mflix");
    const movies = database.collection("movies");

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: "Back to the Future" };
    const movie = await movies.findOne(query);

    console.log(movie);
  } finally {
     
  }
}
run().catch(console.dir);





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
