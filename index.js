import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";


const port = 3000;
const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static("public"));
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
    console.log("sent the landing page :");
});
app.get("/user_register",(req,res)=>{
    res.sendFile(__dirname+"/public/register.html"); //work pending on this page
    console.log("A user was sent the register page ");
});

app.get("/user_signin",(req,res)=>{
    res.sendFile(__dirname+"/public/resident-signin.html");
    console.log("A user was sent the resident-signin page");
})

app.get("/admin_signin",(req,res)=>{
    res.sendFile(__dirname+"/public/admin-signin.html");
    console.log("A user was sent the admin-signin page");
})


app.listen(port,(req,res)=>{
    console.log("The server has started");
});