import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
    movie: { type: String, required: true },
    day: { type: String, required: true },
    time: { type: String, required: true },
    phone: { type: [Number], required: true },
    address: { type: String, required: true },
    seats: { type: [Number], required: true },
}, { timestamps: true });

export default mongoose.models.Booking || mongoose.model("Booking", BookingSchema);
