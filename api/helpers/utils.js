
var jwt = require('jsonwebtoken');

const generateToken  = (user) => {
     // create json web token
     const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '6h' });
     return token;
}

module.exports = {generateToken};