const express = require("express");
const app = express();
const port = 3000;
const cors= require("cors");

//middleware
app.use(express.json());
app.use(cors());




//mOSRumMFH1wcNdCk
//amin








// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri =
//   "mongodb+srv://amin:mOSRumMFH1wcNdCk@softopark.ockrkce.mongodb.net/?retryWrites=true&w=majority&appName=softopark";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
     
 

// const myDB = client.db("myDB");
// const menucollection= myDB.collection("pizzaMenu");



//    app.post("/data", (req, res) => {
//      const data = req.body;
//      const result = menucollection.insertOne(data);
//      res.json({msg:"data inserted successfully", data: result});
//    });

     
//   } finally {
    
//   }
// }
// run().catch(console.dir);



app.get("/", (req, res) => {
  res.send("Hello World!");
});
const { MongoClient } = require("mongodb");

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
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
