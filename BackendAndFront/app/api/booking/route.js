import connectMongoDB from "@/libs/mongodb";
import Booking from "@/models/Booking";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectMongoDB();
        const bookings = await Booking.find();

        // Extract all booked seats from the bookings
        const bookedSeats = bookings.flatMap((booking) => booking.seats);

        return NextResponse.json({ bookedSeats });
    } catch (error) {
        console.error("Error fetching bookings:", error);
        return NextResponse.json({ error: "Failed to fetch booked seats" }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        // Connect to MongoDB
        await connectMongoDB();

        // Parse the incoming request body
        const data = await req.json();

        // Validate the data (optional but recommended)
        if (!data.movie || !data.day || !data.time || !data.phone || !data.address || !data.seats) {
            return new Response(
                JSON.stringify({ error: "All fields are required." }),
                { status: 400 }
            );
        }

        // Save to MongoDB
        const newBooking = await Booking.create(data);

        // Respond with success
        return new Response(
            JSON.stringify({ message: "Booking successful!", booking: newBooking }),
            { status: 201 }
        );
    } catch (error) {
        console.error("Error saving booking:", error);
        return new Response(
            JSON.stringify({ error: "Failed to save booking." }),
            { status: 500 }
        );
    }
}
