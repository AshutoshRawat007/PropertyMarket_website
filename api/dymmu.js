const express = require('express');
require('dotenv').config();
const cors = require('cors');
const mongoose = require("mongoose");
const Likes = require('./models/Likes');
const Comments = require('./models/Comments');
const Property = require('./models/Property');
const bcrypt = require('bcryptjs');
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const path = require('path');
const User = require('./models/User');

const fs = require('fs');

const salt = bcrypt.genSaltSync(10);
const secret = 'asdfe45we45w345wegw345werjktjwertkj';
const allowedOrigins = [
    'https://property-market-website-sage.vercel.app',
    'http://localhost:3000'
];
const uploadImage = require('./util/uploadImage');
const propertyRouter =require('./routes/property');
const blogRouter =require('./routes/blog');
const agnetRouter =require('./routes/agent');

app.use(cors({
    credentials: true,
    origin: allowedOrigins
}));
app.use(express.json());
app.use(cookieParser());
mongoose.connect(process.env.MONGO_URL);


app.post('/api/register', uploadMiddleware.any(), async (req, res) => {
    //
    const Userdatajson = req.body['userData.json'];
    const userdata = JSON.parse(Userdatajson);
    const file = req.files;
    const path = file[0].path;
    const url = await uploadImage(path);
    const { Username, password, name, phone, description } = userdata;
    try {
        const userDoc = await User.create({
            Username,
            password: bcrypt.hashSync(password, salt),
            role: "agent",
            name: name,
            phone: phone,
            profileimg: url,
            description: description,
        });
        res.json(userDoc);
    } catch (e) {
        console.log(e);
        res.status(400).json(e);
    }
});

app.post('/api/login', async (req, res) => {
    //
    try {
        const { Username, password } = req.body;
        const userDoc = await User.findOne({ Username }).select('+password');
        if (!userDoc) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const passOk = bcrypt.compareSync(password, userDoc.password);
        if (passOk) {
            jwt.sign({ Username, id: userDoc._id }, secret, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json({
                    id: userDoc._id,
                    name: userDoc.name,
                    profileimg: userDoc.profileimg,
                    Username,
                    role: userDoc.role,
                    phone: userDoc.phone,
                });
            });
        } else {
            res.status(400).json('wrong credentials');
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/profile', (req, res) => {
    //
    const { token } = req.cookies;
    jwt.verify(token, secret, {}, (err, info) => {
        if (err) throw err;
        res.json(info);
        // console.log(info, " profile");
    });
});

app.post('/api/logout', (req, res) => {
    res.cookie('token', '').json('ok');
});



app.use("/api/property",propertyRouter);
app.use("/api/blog",blogRouter);
app.use("/api/agent",agnetRouter);


app.listen(4000);
