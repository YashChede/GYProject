import express from "express";
import userController from "../controller/user.controller.js";
import authController from "../controller/auth.controller.js"

const router = express.Router();

router.post('/signUp',authController.signup)

router
  .route("/")
  //   .get(userController.getAllUsers)
  .get(userController.createUser);

// router
//   .route('/:id')
//   .get(userController.getUser)
//   .patch(userController.updateUser)
//   .delete(userController.deleteUser);

export default router;
