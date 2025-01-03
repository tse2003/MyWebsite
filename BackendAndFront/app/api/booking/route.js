import connectMongoDB from "@/libs/mongodb";
import Booking from "@/models/Booking";

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
            JSON.stringify({ message: "Таны захиалга амжилттай баталгаажилаа. Бид тантай удахгүй холбогдож тасалбарыг нь хүргэх болно.", booking: newBooking }),
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
