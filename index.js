const express = require("express");
const mongoose = require("mongoose");
const router = require("./router.js");
const fileUpload = require("express-fileupload");

const app = express();
app.use(express.json());
app.use(fileUpload({}));
app.use("/api", router);
app.use(express.static("./static"));


async function start() {
    try {
        const DB_URL = "mongodb+srv://qseboy:elrCJQatlsMNjQSu@cluster0.xaxl3sw.mongodb.net/?retryWrites=true&w=majority"
        await mongoose.connect(DB_URL, {useNewUrlParser: true});

        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
        console.log("Server start on port" + PORT)
});
    } catch(e) {
        console.log(e);
    }
}

start()

//Серверное приложение, реализованно к бд, описали модель данных POST, сделал декомпозицию логики, описал сервис, контроллер, описал Endpoint, поработал с файлами.


