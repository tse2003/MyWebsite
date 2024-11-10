import connectMongoDB from "@/libs/mongodb";
import Movie from "@/models/MovieModel";
import { NextResponse } from "next/server";

export async function PUT(request, {params}) {
    const { id } = params;
    const { newTitle: title, newImage: image, newAge: age, newType: type, newDuration: duration, newDescription: description } = await request.json();
    await connectMongoDB();
    await Movie.findByIdAndUpdate(id, { title, image, age, type, duration, description });
    return NextResponse.json({ message: "Movie updated" }, { status: 200 });
}

export async function GET(request, {params}) {
    const { id } = params;
    await connectMongoDB();
    const movie = await Movie.findOne({ _id: id });
    return NextResponse.json({ movie }, { status: 200 });
}