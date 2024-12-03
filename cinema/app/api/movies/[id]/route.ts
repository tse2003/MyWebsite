import connectMongoDB from "@/libs/mongodb";
import Movie from "@/models/MovieModel";
import { NextRequest, NextResponse } from "next/server";

// Define types for the request body and query parameters
interface UpdateMovieRequestBody {
  newTitle: string;
  newImage: string;
  newAge: number;
  newType: string;
  newDuration: number;
  newDescription: string;
}

interface Params {
  id: string;
}

export async function PUT(request: NextRequest, { params }: { params: Params }) {
  const { id } = params;
  const { newTitle: title, newImage: image, newAge: age, newType: type, newDuration: duration, newDescription: description }: UpdateMovieRequestBody = await request.json();
  
  await connectMongoDB();
  await Movie.findByIdAndUpdate(id, { title, image, age, type, duration, description });
  
  return NextResponse.json({ message: "Movie updated" }, { status: 200 });
}

export async function GET(request: NextRequest, { params }: { params: Params }) {
  const { id } = params;
  
  await connectMongoDB();
  const movie = await Movie.findOne({ _id: id });
  
  return NextResponse.json({ movie }, { status: 200 });
}
