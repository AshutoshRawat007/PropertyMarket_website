const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const uploadImage = require('../util/uploadImage');
const secret = require('../util/config').secret;
const salt = bcrypt.genSaltSync(10);

exports.register = async (req, res) => {
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
            name,
            phone,
            profileimg: url,
            description,
        });
        res.json(userDoc);
    } catch (e) {
        console.log(e);
        res.status(400).json(e);
    }
};

exports.login = async (req, res) => {
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
};

exports.getProfile = (req, res) => {
    const { token } = req.cookies;
    if (!token) {
        return res.json({});
        // return res.status(401).json({ error: 'JWT token not provided' });
      }
    jwt.verify(token, secret, {}, (err, info) => {
        if (err) throw err;
        res.json(info);
        // console.log(info.id, " profile");
    });
};

exports.logout = (req, res) => {
    res.cookie('token', '').json('ok');
};
