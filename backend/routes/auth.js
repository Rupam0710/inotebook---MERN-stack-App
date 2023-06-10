const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body,validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'RupamisfuckingA8some';


//Create a user using : POST "/api/auth/createuser". No login required
router.post('/createuser',[
    body('name','Enter a valid name').isLength({min:3}),
    body('email', 'Enter a valid email').isEmail(),
    body('password' ,'Password must be 5 characters').isLength({min:5}),
],async (req,res)=>{
    //if there are errors,return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array() });
    }
    
    //check whether the user with this email exist already
    try{
    let user = await User.findOne({email:req.body.email});
    if(user){
        return res.status(400).json({errors: "Sorry a user with this email already exists" });
    }
    
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password,salt);

    //create a new user
    user = await User.create({
        name : req.body.name,
        password: secPass,
        email: req.body.email,
    })
    
    const data = {
        user :{
            id:user.ud,
        }
    }
    const auth_token = jwt.sign(data,JWT_SECRET);
    // console.log(auth_token);
    res.json({auth_token});

    } catch(error){
        console.error(error.message);
        res.status(500).send("Some error occured");
    }

})

module.exports = router