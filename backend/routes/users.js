import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";

const router = express.Router();


//UPDATE
router.put("/:id", updateUser);
//DELETE
router.delete("/:id", deleteUser);
//GET
router.get("/:id", getUser);
//GET ALL
router.put("/", getUsers);



export default router