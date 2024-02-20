const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
dotenv.config();

const CheckAuth = (req, res, next) => {
    console.log(req.headers.authorization)
    try {
        console.log('3333')
        const token = req.headers.authorization.split(" ")[1];
        console.log(token)
        // check token is available in headers
        if(!token) {
            return res.json({
                status: "failed",
                message: "Authorization failed"
            })
        }

        // if token available then verify its authentication and extract userId from it
        const decoded =jwt.verify(token,process.env.JWT_SECRET_KEY);

        // todo check if user id is availab in db

        req.userId = decoded._id;
        next();

    } catch (error) {
        console.log(error.message)
        return res.status(403).json({status: "failed", message: 'Authentication failed.'})
    }
}

module.exports = CheckAuth;