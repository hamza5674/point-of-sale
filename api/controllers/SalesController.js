const Sales = require("../models/Sales")



const salecreate = async (req, res) => {
console.log('22222')

    try {

        const newsale = await Sales.create({       
            newsale:newsale
        });

        return res.status(200).json({
            status: 'success',
            message: "successfully created",
            newsale: newsale
        })
    } catch (error) {
        console.log(error.message);
    }
}
//get all sales

const getall = async (req, res) => {
    try {
        const sale = await Sales.find({})
        .sort({createdAt: -1})

     
        return res.status(200).json({
            status: "success",
            sale: sale
        });
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = { salecreate, getall }