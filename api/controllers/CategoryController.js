const Category = require("../models/Category")


// create category

const categorycreate = async (req, res) => {
    console.log('22222')

    try {

        const newcategory = await Category.create({
            category: req.body.category
        });

        return res.status(200).json({
            status: 'success',
            message: "successfully created",
            newcategory: newcategory
        })
    } catch (error) {
        console.log(error.message);
    }
}
//get all category

const getall = async (req, res) => {
    try {
        const sale = await Category.find({})
            .sort({ createdAt: -1 })

        return res.status(200).json({
            status: "success",
            sale: sale
        });
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = { categorycreate, getall }