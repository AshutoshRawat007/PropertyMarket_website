require('dotenv').config();
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    secure: true
});

const uploadImage = async (imagePath) => {

    const options = {
        use_filename: true,
        unique_filename: false,
        overwrite: true,
        folder: "Homes-Houses(Property-Market)-uploads",
        quality: "auto:eco",
    };

    try {
        const result = await cloudinary.uploader.upload(imagePath, options);
        return result.secure_url;
    } catch (error) {
        console.error(error);
    }
};
module.exports = uploadImage;


