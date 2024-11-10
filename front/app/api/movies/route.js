import connectMongoDB from "@/libs/mongodb";
import Movie from "@/models/MovieModel";
import { NextResponse } from "next/server";

export async function GET() {
    await connectMongoDB();
    const movies = await Movie.find();
    return NextResponse.json({ movies });
}

export async function POST(request) {
    const { title, image, age, type, duration, description } = await request.json();
    await connectMongoDB();
    await Movie.create({title, image, age, type, duration, description });
    return NextResponse.json({ message: "Movie Created" }, { status: 201 });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Movie.findByIdAndDelete(id);
    return NextResponse.json({ message: "Movie deleted" }, { status: 200 });
}