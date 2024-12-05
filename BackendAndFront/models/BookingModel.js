import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
    userEmail: { type: String, required: true },
    movieId: { type: mongoose.Schema.Types.ObjectId, ref: "Movie" },
    showTime: { type: String, required: true },
    seatsBooked: { type: Number, required: true },
});

export default mongoose.models.Booking || mongoose.model("Booking", BookingSchema);
