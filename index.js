const express = require("express");
const app = express();
const port = 3000;
const cors= require("cors");
 
//middleware
app.use(express.json());
app.use(cors());



const  main=()=>{
  
 app.get("/hello", (req, res)=>{
    res.send("world! bad server this  one ");
 }) 


}
  main();





const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://<username>:<password>@cluster0.x52xd2s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

















app.get("/", (req, res) => {
  res.send("Hello World!");
});





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
