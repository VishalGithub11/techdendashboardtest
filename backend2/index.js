
const mongoose = require("mongoose")
const express = require("express")
const app = express();

const cookieParser = require("cookie-parser");
const cors  = require("cors")



//DB connection
mongoose.connect("mongodb://localhost:27017/grouptest", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => {
    console.log("DB connected");
    }).catch(() => {
        console.log("DB not connected");
    })

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());


// my Routes
const groupRoute = require("./routes/group")

//my routes (middleware)
app.use("/api", groupRoute);



//port setup
const port = 8888;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})