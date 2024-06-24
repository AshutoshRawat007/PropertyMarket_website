const express = require('express');
require('dotenv').config();
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();
const cookieParser = require('cookie-parser');
const allowedOrigins = [
    'https://property-market-website-sage.vercel.app',
    'http://localhost:3000'
];
const propertyRouter = require('./routes/property');
const blogRouter = require('./routes/blog');
const agnetRouter = require('./routes/agent');
const authRouter = require('./routes/authRoutes');
app.use(cors({
    credentials: true,
    origin: allowedOrigins
}));
app.use(express.json());
app.use(cookieParser());
mongoose.connect(process.env.MONGO_URL);

app.use("/api/auth", authRouter);
app.use("/api/property", propertyRouter);
app.use("/api/blog", blogRouter);
app.use("/api/agents", agnetRouter);


app.listen(4000);
