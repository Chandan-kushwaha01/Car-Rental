import User from "../models/User.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import Car from "../models/Car.js";

// Generate JWT token
const generateToken = (userId) => {
    const payload = userId;
    return jwt.sign(payload, process.env.JWT_SECRET);
}


// REGISTER USER
export const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        if( !name || !email || !password ) {
            return res.json({success: false, message: "Fill all the fields."});
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return res.json({ success: false, message: "Please enter a valid email address." });
        }

        if(password.length < 8) {
             return res.json({success: false, message: "Password must be atleast 8 characters."});
        }

        const userExists = await User.findOne({email});
        if(userExists) {
            return res.json({success: false, message: "User already exists."});
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({name, email, password: hashedPassword});
        const token = generateToken(user._id.toString())
        res.json({success: true, token})
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
    }
}


// LOGIN USER
export const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});

        if(!user) {
            return res.json({success: false, message: "User not found."});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.json({success: false, message: "Invaid credentials."});
        }

        const token = generateToken(user._id.toString())
        res.json({success: true, token})

    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
    }
}

// Get user data using token
export const getUserData = async (req, res) => {
    try {
        const {user} = req;
        res.json({success: true, user})
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
    }
}

// Get all the cars for frontend
export const getCars = async (req, res) => {
    try {
        const cars = await Car.find({isAvaliable: true})
        res.json({success: true, cars});
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
    }
}