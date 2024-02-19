const Expens = require("../models/Expens")


// create category

const expenscreate = async (req, res) => {
console.log('22222')

    try {

        const newexpens = await Expens.create({       
            newexpens:newexpens
        });

        return res.status(200).json({
            status: 'success',
            message: "successfully created",
            newexpens:newexpens
        })
    } catch (error) {
        console.log(error.message);
    }
}
//get all category

const getall = async (req, res) => {
    try {
         await Expens.find({})
        .sort({createdAt: -1})

     
        return res.status(200).json({
            status: "success",
            Expens: Expens
        });
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = { expenscreate, getall }