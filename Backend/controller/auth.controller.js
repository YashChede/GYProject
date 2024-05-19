import  User from "../models/user.model.js"
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";


const signup = asyncHandler(async (req, res) => {
// This Allow only admin to access the user info
     const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  res.status(201).json(new ApiResponse(201, {
     user: newUser
  }, "User Signup successfully"));
});


export default {signup}