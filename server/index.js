import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./database/db.js";
import userRoute from "./routes/user.route.js";
import courseRoute from "./routes/course.route.js";
import mediaRoute from "./routes/media.route.js";
import purchaseRoute from "./routes/purchaseCourse.route.js";
import courseProgressRoute from "./routes/courseProgress.route.js";

dotenv.config({});

// call database connection here
connectDB();
const app = express();

const PORT = process.env.PORT || 3000;
console.log("Port number is : ", PORT);

// default middleware
app.use(express.json());
app.use(cookieParser());

<<<<<<< HEAD
app.use(
  cors({
    origin: "https://academix-1-frontend.onrender.com",
    credentials: true,
  })
);

=======
app.use(cors({
    origin:"https://academix-1-frontend.onrender.com",
    credentials:true
}));
 
>>>>>>> 01a14b37b03e661663f5bf8ef2180f27ea3b9513
// apis
app.use("/api/v1/media", mediaRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/course", courseRoute);
app.use("/api/v1/purchase", purchaseRoute);
app.use("/api/v1/progress", courseProgressRoute);




app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method; // HTTP method (GET, POST, etc.)
  const url = req.url; // Requested URL
  const ip = req.ip; // Requester's IP address

  console.log(`[${timestamp}] ${method} request to ${url} from IP: ${ip}`);
  next();
});


app.listen(PORT, () => {
  console.log(`Server listen at port ${PORT}`);
});
