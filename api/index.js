const express = require('express');
require('dotenv').config();
const cors = require('cors');
const mongoose = require("mongoose");
const User = require('./models/User');
const Property = require('./models/Property');
const Likes = require('./models/Likes');
const Comments = require('./models/Comments');
const BlogPost = require('./models/BlogPost');
const bcrypt = require('bcryptjs');
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({});

const uploadMiddleware = multer({ storage: storage })
const fs = require('fs');

const cloudinary = require('cloudinary').v2;

const salt = bcrypt.genSaltSync(10);
const secret = 'asdfe45we45w345wegw345werjktjwertkj';

const allowedOrigins = [
  'https://property-market-website-sage.vercel.app',
  'http://localhost:3000'
];

app.use(cors({
  credentials: true,
  origin: allowedOrigins
}));
app.use(express.json());
app.use(cookieParser());
// app.use('/uploads', express.static(__dirname + '/uploads'));


// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true
});

// Log the configuration
// console.log(cloudinary.config());

// Uploads an image file
const uploadImage = async (imagePath) => {

  // Use the uploaded file's name as the asset's public ID and 
  // allow overwriting the asset with new versions
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
    folder: "Homes-Houses(Property-Market)-uploads",
    quality: "auto:eco",
    // transformation: [
    //   { width: 1250, height: 1250, crop: "fill" }, // Adjust width and height as needed
    // ],
  };

  try {
    // Upload the image
    const result = await cloudinary.uploader.upload(imagePath, options);
    // console.log(result);
    // console.log(result.secure_url);
    return result.secure_url;
  } catch (error) {
    console.error(error);
  }
};

// {
//   asset_id: '74aae02aebf89c71efd60772ef81f62a',
//   public_id: 'Homes-Houses(Property-Market)-uploads/vlcsnap-2023-09-12-17h02m45s799',
//   version: 1710192436,
//   version_id: '46c98a1952b1891134d544a24a60a450',
//   signature: 'be8a16ad2e1a6e1b0939a2a4d8f4f1e65c3443b9',
//   width: 1920,
//   height: 960,
//   format: 'png',
//   resource_type: 'image',
//   created_at: '2024-03-11T21:13:02Z',
//   tags: [],
//   bytes: 584492,
//   type: 'upload',
//   etag: '4616ba763a96aa0d997f4b382a12194a',
//   placeholder: false,
//   url: 'http://res.cloudinary.com/dptx5ahvw/image/upload/v1710192436/Homes-Houses%28Property-Market%29-uploads/vlcsnap-2023-09-12-17h02m45s799.png',
//   secure_url: 'https://res.cloudinary.com/dptx5ahvw/image/upload/v1710192436/Homes-Houses%28Property-Market%29-uploads/vlcsnap-2023-09-12-17h02m45s799.png',
//   folder: 'Homes-Houses(Property-Market)-uploads',
//   overwritten: true,
//   original_filename: 'vlcsnap-2023-09-12-17h02m45s799',
//   api_key: '882532315875241'
// }
app.post('/api/register', async (req, res) => {
  // console.log("reached here");
  mongoose.connect(process.env.MONGO_URL);
  const { Username, password, name, phone, description } = req.body;
  try {
    const userDoc = await User.create({
      Username,
      password: bcrypt.hashSync(password, salt),
      role: "agent",
      name: name,
      phone: phone,
      description: description,
    });
    res.json(userDoc);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});

app.post('/api/login', async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  try {
    const { Username, password } = req.body;
    const userDoc = await User.findOne({ Username }).select('+password');
    if (!userDoc) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    //console.log(userDoc);
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      // logged in
      jwt.sign({ Username, id: userDoc._id }, secret, {}, (err, token) => {
        if (err) throw err;
        res.cookie('token', token).json({
          id: userDoc._id,
          Username,
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
  mongoose.connect(process.env.MONGO_URL);
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
    //console.log(info.id, " profile");
  });
});

app.post('/api/logout', (req, res) => {
  res.cookie('token', '').json('ok');
});

app.post('/api/property', uploadMiddleware.any(), async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  // //console.log("Request Body:", req.body);
  // console.log("Request Files:", req.files);
  const files = req.files;
  var images_arrray = [];

  // Iterate through each file in the array
  for (const file of files) {
    const fieldName = file.fieldname;
    const originalName = file.originalname;
    const fileName = file.filename;
    const mimeType = file.mimetype;
    const size = file.size;
    const path = file.path;
    const originalPath = files[0].originalPath;


    // Access the properties as needed
    // console.log(`File ${index + 1}:`);
    // console.log('Field Name:', fieldName);
    // console.log('Original Name:', originalName);
    // console.log('File Name:', fileName);
    // console.log('MIME Type:', mimeType);
    // console.log('Size:', originalPath);
    // console.log('path:', path);

    //     File 1:
    // Field Name: images0
    // Original Name: team .jpg
    // File Name: images0_1710065403482_395850492
    // MIME Type: image/jpeg
    // Size: 295932
    // path: D:\REACT PROJECT\PropertyBuySellRent\api\uploads\images0_1710065403482_395850492

    // const parts = originalName.split('.');
    // const ext = parts[parts.length - 1];
    // const newPath = path + '.' + ext;
    // fs.renameSync(path, newPath);
    // images_arrray.push((fileName + '.' + ext));

    const url = await uploadImage(path);

    images_arrray.push(url);
    //console.log('new path:', newPath);
  };
  const propertyDataJSON = req.body['propertyData.json'];
  const propertyData = JSON.parse(propertyDataJSON);
  // console.log("Property Data:", propertyData);

  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    // console.log(info.id,"<--------");
    const { name, location, amenities, roomDetails, roomnumber, description, price } = propertyData;
    const propertyDoc = await Property.create({
      name,
      location,
      amenities,
      images: images_arrray,
      roomDetails,
      roomnumber,
      description,
      price,
      userId: info.id,
    });

    await User.findByIdAndUpdate(
      info.id,
      { $push: { properties: propertyDoc._id } },
      { new: true }
    );

    res.json(propertyDoc);
  });

});

app.post('/api/createblog', uploadMiddleware.any(), async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  const files = req.files;
  // console.log("reached here into files : ", files);
  const { title, content } = req.body;
  // console.log("body is  ", req.body);
  // console.log("title and contest is  ", title, content);
  const url = await uploadImage(files[0].path);
  // console.log("url: ",url);
  try {
    const userDoc = await BlogPost.create({
      title,
      coverimage: url,
      content,
    });
    res.json(userDoc);
  } catch (e) {
    // console.log(e);
    res.status(400).json(e);
  }
});


app.put('/api/properties/:id', async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
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
    //console.log(e);
    res.status(400).json(e);
  }
});

app.get('/api/property', async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  try {
    const data = await Property.find().populate('userId', ['name', 'phone']); // Retrieve all data from MongoDB
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
  //  populating methods-------------->]]]
  // const data = await Property.find().populate({
  //   path: 'user',
  //   select: 'username password' // Include the fields you need, even if select: false in schema
  // });

});

app.get('/api/blog', async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  try {
    const data = await BlogPost.find(); // Retrieve all data from MongoDB
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/blog/:id', async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  const { id } = req.params;
  try {
    const data = await BlogPost.find({ _id: id }); // Retrieve all data from MongoDB
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/property/:id', async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  // console.log("enterd into propertyid");
  const { id } = req.params;
  Property.findById(id)
    .then(property => {
      if (!property) {
        // console.log("*******************property*******************",property);
        return res.status(404).json({ message: 'property not found' });
      }
      // console.log(property);
      User.findOne({ properties: id })
        .then(agent => {
          // console.log("agebnt*******************",agent);
          res.status(200).json({ property, agent });
        })
        .catch(error => {
          console.error('Error finding agent:', error);
          res.status(500).json({ message: 'Internal Server Error' });
        });
    })
    .catch(error => {
      console.error('------------The Errotrss----------', error);
      res.status(500).json({ message: 'Internal Server Error' });
    });
});

app.get('/api/agents', async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  try {
    const agentDetails = await User.find();
    res.json(agentDetails);
  } catch (error) {
    console.error('Error fetching agent details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.get('/api/agents/:id', async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  // console.log(" camne to agent id ", req.params);
  const { id } = req.params;
  // Find the user by ID below is the method if user do no contain properties refrence
  User.findById(id)
    .then(user => {
      if (!user) {
        // Handle the case where the user is not found
        return res.status(404).json({ message: 'User not found' });
      }
      // Use the user's ID to find all properties associated with the user
      Property.find({ userId: id })
        .then(properties => {
          // 'properties' now contains an array of properties associated with the user
          //console.log(properties);
          // You can do further processing with the properties here
          res.status(200).json({ user, properties });
        })
        .catch(error => {
          // Handle any errors that occur during the Property.find operation
          console.error('Error finding properties:', error);
          res.status(500).json({ message: 'Internal Server Error' });
        });
    })
    .catch(error => {
      // Handle any errors that occur during the User.findById operation
      console.error('Error finding user:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    });
  //   try {
  //     const agentDetails = await User.findById(id).populate('properties');
  //     res.json(agentDetails);
  //   } catch (error) {
  //     console.error('Error fetching agent details:', error);
  //     res.status(500).json({ error: 'Internal server error' });
  //   }
});

app.listen(4000);
