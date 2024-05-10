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




app.get("/", (req, res) => {
  res.send("Hello World!");
});





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
