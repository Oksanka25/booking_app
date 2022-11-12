import express from "express";
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotelRooms, getHotels, updateHotel } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js"
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Create 
router.post("/", verifyAdmin, createHotel)
// Update
router.put("/:id", verifyAdmin, updateHotel)
// Delete
router.delete("/:id", deleteHotel)
// Get A hotel
router.get("/:id", verifyAdmin, getHotel)
// Get ALL hotels
router.get("/", verifyAdmin, getHotels)
router.get("/countByCity", verifyAdmin, countByCity)
router.get("/countByType", verifyAdmin, countByType)
router.get("/room/:id", verifyAdmin, getHotelRooms)


export default router