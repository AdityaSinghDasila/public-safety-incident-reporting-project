import express from "express";
import bodyParser from "body-parser";

const port = 3000;
const app = express();

app.listen(port,(req,res)=>{
    console.log("The server has started");
})