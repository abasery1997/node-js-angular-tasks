const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs')
const { User } = require('../models/user.model')
const jwt = require("jsonwebtoken");
const { jwt_KEY } = require('../config/auth.config');
const { UserDto } = require('../dto/user.dto')


//get all users
router.get('/', async(req, res) => {
    const users = await User.find({});

    res.json({ users: users })
})

//sign up new user
router.post('/signup', async(req, res) => {

    //get name , email ,password from the user
    const { name, email, password } = req.body

    //check if there is any similer email
    const existingUser = await User.findOne({ email })
    if (existingUser) return res.status(400).json({ message: "Email Is Already Exist" })

    //crypt the password
    const hashedPassword = bcrypt.hashSync(password, 10)

    //add data to a new record in user collection
    const user = new User({
        name,
        email,
        password: hashedPassword
    })

    //save changed
    await user.save()

    //send a message
    res.json({ 'New USer': user })

})

//signin touser acount
router.post('/signin', async(req, res) => {
    const { email, password } = req.body

    //get user data
    const user = await User.findOne({ email })

    // check if ther is a user with this email
    if (!user) return res.status(400).json({ message: "Invalid Credentials" })

    //check if password correct
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) return res.status(400).json({ message: "wrong password" })

    //return some formatted data
    const UserInfo = UserDto(user);

    //return the token that containe user data
    const token = jwt.sign(UserInfo, jwt_KEY);

    res.json({ UserInfo, token });
})






module.exports = router;