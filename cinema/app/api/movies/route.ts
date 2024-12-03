import connectMongoDB from "@/libs/mongodb";
import Movie from "@/models/MovieModel";
import { NextRequest, NextResponse } from "next/server";

// Define types for the request body
interface CreateMovieRequestBody {
  title: string;
  image: string;
  age: number;
  type: string;
  duration: number;
  description: string;
}

export async function GET() {
  await connectMongoDB();
  const movies = await Movie.find();
  return NextResponse.json({ movies });
}

export async function POST(request: NextRequest) {
  const { title, image, age, type, duration, description }: CreateMovieRequestBody = await request.json();
  
  await connectMongoDB();
  await Movie.create({ title, image, age, type, duration, description });
  
  return NextResponse.json({ message: "Movie Created" }, { status: 201 });
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  
  if (!id) {
    return NextResponse.json({ message: "ID is required" }, { status: 400 });
  }

  await connectMongoDB();
  await Movie.findByIdAndDelete(id);
  
  return NextResponse.json({ message: "Movie deleted" }, { status: 200 });
}
