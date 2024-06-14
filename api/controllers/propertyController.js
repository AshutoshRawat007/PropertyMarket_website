const Property = require('../models/Property');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const uploadImage = require('../util/uploadImage');
const secret = 'asdfe45we45w345wegw345werjktjwertkj';

exports.createProperty = async (req, res) => {
    try {
        const files = req.files;
        var images_array = [];
        for (const file of files) {
            const path = file.path;
            const url = await uploadImage(path);
            images_array.push(url);
        }

        const propertyDataJSON = req.body['propertyData.json'];
        const propertyData = JSON.parse(propertyDataJSON);

        const { token } = req.cookies;
        jwt.verify(token, secret, {}, async (err, info) => {
            if (err) throw err;

            const { name, location, amenities, roomDetails, roomnumber, description, price } = propertyData;
            const propertyDoc = await Property.create({
                name,
                location,
                amenities,
                images: images_array,
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
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getAllProperties = async (req, res) => {
    try {
        const data = await Property.find().populate('userId', ['name', 'phone']);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getPropertyById = async (req, res) => {
    try {
        const { id } = req.params;
        const property = await Property.findById(id);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }

        const agent = await User.findOne({ properties: id });
        res.status(200).json({ property, agent });
    } catch (error) {
        console.error('Error finding agent:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.updatePropertyById = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, location, amenities, images, roomDetails, price } = req.body;
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
    } catch (error) {
        console.error(error);
        res.status(400).json(error);
    }
};
