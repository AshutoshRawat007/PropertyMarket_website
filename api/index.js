const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const User = require('./models/User');
// const Agent = require('./models/Agent');
const Property = require('./models/Property');
// const Post = require('./models/Post');
const bcrypt = require('bcryptjs');
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
// const multer = require('multer');
// const uploadMiddleware = multer({ dest: 'uploads/' });
// const fs = require('fs');

const salt = bcrypt.genSaltSync(10);
const secret = 'asdfe45we45w345wegw345werjktjwertkj';

app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));

mongoose.connect('mongodb+srv://admin_buysell:HDkjAhxL5l1cJz9B@cluster0.mq8wi2q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

app.post('/register', async (req,res) => {
  const {Username,password,UserRole,name,phone,description} = req.body;
  try{
    const userDoc = await User.create({
      Username,
      password:bcrypt.hashSync(password,salt),
      UserRole,name,phone,description
    });
    res.json(userDoc);
  } catch(e) {
    console.log(e);
    res.status(400).json(e);
  }
});

app.post('/login', async (req,res) => {
  try{
    const {Username,password} = req.body;
    const userDoc = await User.findOne({Username}).select('+password');
    if (!userDoc) {
      return res.status(401).json({ error: 'Invalid credentials' });
  }
  console.log(userDoc);
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    // logged in
    jwt.sign({Username,id:userDoc._id}, secret, {}, (err,token) => {
      if (err) throw err;
      res.cookie('token', token).json({
        id:userDoc._id,
        Username,
      });
    });
  } else {
    res.status(400).json('wrong credentials');
  }
  }catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
}
});

app.get('/profile', (req,res) => {
  const {token} = req.cookies;
  jwt.verify(token, secret, {}, (err,info) => {
    if (err) throw err;
    res.json(info);
    console.log(info.id," profile");
  });
});

app.post('/logout', (req,res) => {
  res.cookie('token', '').json('ok');
});


// Assuming you have an endpoint for fetching property listings
app.get('/property', async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    console.error('Error fetching properties:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update your property creation endpoint
app.post('/property', async (req, res) => {
  const {  name, location, amenities, images, roomDetails, price,userId } = req.body;
  console.log("post porerty ", req.body);
  try {
    const propertyDoc = await Property.create({      
      name,
      location,
      amenities,
      images,
      roomDetails,
      price,
      userId
    });
    res.json(propertyDoc);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});
// Update property endpoint
app.put('/properties/:id', async (req, res) => {
  const { id } = req.params;
  const { name, location, amenities, images, roomDetails, price } = req.body;
  try {
    const propertyDoc = await Property.findByIdAndUpdate(
      id,
      {
        name,
        location,
        amenities,
        images,
        roomDetails,
        price,
      },
      { new: true }
    );
    res.json(propertyDoc);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});


// Fetch agent details endpoint
app.get('/agents/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const agentDetails = await Agent.findById(id).populate('properties');
    res.json(agentDetails);
  } catch (error) {
    console.error('Error fetching agent details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(4000);
// app.post('/post', uploadMiddleware.single('file'), async (req,res) => {
//   const {originalname,path} = req.file;
//   const parts = originalname.split('.');
//   const ext = parts[parts.length - 1];
//   const newPath = path+'.'+ext;
//   fs.renameSync(path, newPath);

//   const {token} = req.cookies;
//   jwt.verify(token, secret, {}, async (err,info) => {
//     if (err) throw err;
//     const {title,summary,content} = req.body;
//     const postDoc = await Post.create({
//       title,
//       summary,
//       content,
//       cover:newPath,
//       author:info.id,
//     });
//     res.json(postDoc);
//   });

// });

// app.put('/post',uploadMiddleware.single('file'), async (req,res) => {
//   let newPath = null;
//   if (req.file) {
//     const {originalname,path} = req.file;
//     const parts = originalname.split('.');
//     const ext = parts[parts.length - 1];
//     newPath = path+'.'+ext;
//     fs.renameSync(path, newPath);
//   }

//   const {token} = req.cookies;
//   jwt.verify(token, secret, {}, async (err,info) => {
//     if (err) throw err;
//     const {id,title,summary,content} = req.body;
//     const postDoc = await Post.findById(id);
//     const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
//     if (!isAuthor) {
//       return res.status(400).json('you are not the author');
//     }
//     await postDoc.update({
//       title,
//       summary,
//       content,
//       cover: newPath ? newPath : postDoc.cover,
//     });

//     res.json(postDoc);
//   });

// });

// app.get('/post', async (req,res) => {
//   res.json(
//     await Post.find()
//       .populate('author', ['Username'])
//       .sort({createdAt: -1})
//       .limit(20)
//   );
// });

// app.get('/post/:id', async (req, res) => {
//   const {id} = req.params;
//   const postDoc = await Post.findById(id).populate('author', ['Username']);
//   res.json(postDoc);
// })
// app.listen(4000);
//