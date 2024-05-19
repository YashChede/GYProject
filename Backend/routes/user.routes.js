import express from "express";
import userController from "../controller/user.controller.js";

const router = express.Router();

router
  .route("/")
  //   .get(userController.getAllUsers)
  .post(userController.createUser);

// router
//   .route('/:id')
//   .get(userController.getUser)
//   .patch(userController.updateUser)
//   .delete(userController.deleteUser);

export default router;
