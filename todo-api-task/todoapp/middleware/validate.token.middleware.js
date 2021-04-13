const jwt = require("jsonwebtoken");
const { jwt_KEY } = require('../config/auth.config');



const validateToken = (req, res, next) => {
    try {
        const authorization = req.headers.authorization;
        if (!authorization) return NotAllowed(res);
        const token = req.headers.authorization.split(" ")[1];
        const user = jwt.verify(token, jwt_KEY);
        req.user = user;
        next()

    } catch (err) {
        console.log(err);
        NotAllowed(res);
    }
};



const NotAllowed = (res) => {
    res.status(401).json({ message: "Not Allowed" });
}

module.exports = { validateToken }