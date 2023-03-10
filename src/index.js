require("dotenv").config();

const express = require("express");
const cors = require("cors");
 
const userRouter=require("./routes/user.routes") 
 
 
const connect = require("./config/db")
const PORT = process.env.PORT || 3000

const app = express();
app.use(express.json());
app.use(cors({
    origin:"*"
}));

app.use("/", userRouter);
 
 
 

app.listen(PORT, async () => {
    await connect();
    console.log(`listning to http://localhost:${PORT}`)
})
