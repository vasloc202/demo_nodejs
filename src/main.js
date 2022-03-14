import express from "express";
import router from "./router/index";
import mongoose from "mongoose";
const app = express();
// Middleware
app.use(express.json());
// Router
app.use("/api", router);

mongoose.connect("mongodb://localhost:27017/demo_nodejs")
.then(() => console.log("Connect success"))
.catch((error) => console.log(error))

const port = 4000;
app.listen(port, () => {
    console.log(`Server đang chạy ở cổng ${port}`);
})