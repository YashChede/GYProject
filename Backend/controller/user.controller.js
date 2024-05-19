import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createUser = asyncHandler(async (req, res) => {
  res.status(500).json(new ApiResponse(200, {}, "Route not defined yet"));
});

export default { createUser };
