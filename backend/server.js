import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import { connect } from "mongoose";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import router from "./routes/productRoute.js";
import dns from 'dns'
import cartRouter from "./routes/cartRout.js";
import orderRouter from "./routes/orderRout.js";

dns.setServers([
  '1.1.1.1','8.8.8.1'
])

// app config

const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();
// middlewares
app.use(express.json());
const allowedOrigins = [
  "http://localhost:5173",
  "https://cartneo.vercel.app",
  "https://e-comerce-website-sand.vercel.app"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// api endpoints

app.use("/api/user", userRouter);
app.use("/api/product", router);
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
