const Product = require("../models/Product")
const cloudinary = require("cloudinary");

const dotenv = require('dotenv');
dotenv.config();

// setup cloudinary

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


const createProduct = async (req, res) => {
console.log('22222')

    try {
        // converting buffer into base64
        const b64 = Buffer.from(req.file.buffer).toString("base64");
        let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
        const photoObject = await cloudinary.v2.uploader.upload(dataURI);
        // create post
        console.log("before")

        const newproduct = await Product.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image:photoObject.url, 
            quantity: req.body.quantity
        
        });
        return res.status(200).json({
            status: 'success',
            message: "successfully created",
            newproduct: newproduct
        })
    } catch (error) {
        console.log(error.message);
    }
}

const getall = async (req, res) => {
    try {
        const product = await Product.find({})
            // path: "authorId",
            //select: "name", // Only include 'name' field from User collection
            //match: { $exists: true }
        .sort({createdAt: -1})
          
        return res.status(200).json({
            status: "success",
            product: product
        });
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = { createProduct, getall }