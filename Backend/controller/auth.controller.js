import  User from "../models/user.model.js"
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";


const signup = asyncHandler(async (req, res) => {
    const newUser= await User.create(req.body);
  res.status(201).json(new ApiResponse(201, {
     user: newUser
  }, "User Signup successfully"));
});


export default {signup}