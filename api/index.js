const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const userRouter = require("./routes/UserRoutes");

// Load environment variables from a .env file
dotenv.config();
app.use(cors());
app.use(express.json());


// import routes
const userRoutes = require("./routes/userRoutes");

// routes
app.use("/user", userRouter);





app.use(express.json());
app.use(cors());

app.use("/user", userRoutes);

app.use(express.static(path.join(__dirname, "uploads")));







mongoose.connect("mongodb://127.0.0.1:27017/pos").then(() => {
    app.listen(4005, () => {
        console.log("db conected")

    })
})