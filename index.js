import express from "express";
import bodyParser from 'body-parser';

import Userrouter from "./routes/user.js";

const app = express();
const PORT = 3000;

app.use(bodyParser.json())

app.use('/users',Userrouter);

app.get('/',(req,res) => {
    res.send("Hello from Home Page");
})

app.listen(PORT,()=>{
    console.log(`started the ${PORT}`);
})