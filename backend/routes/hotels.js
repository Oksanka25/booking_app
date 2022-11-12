import express from "express";
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotelRooms, getHotels, updateHotel } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js"

const router = express.Router();

// Create 
router.post("/", createHotel)
// Update
router.put("/:id", updateHotel)
// Delete
router.delete("/:id", deleteHotel)
// Get A hotel
router.get("/:id", getHotel)
// Get ALL hotels
router.get("/", getHotels)
router.get("/countByCity", countByCity)
router.get("/countByType", countByType)
router.get("/room/:id", getHotelRooms)


export default router