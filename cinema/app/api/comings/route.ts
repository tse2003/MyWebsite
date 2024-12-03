import connectMongoDB from "@/libs/mongodb";
import Coming from "@/models/ComingModel";
import { NextRequest, NextResponse } from "next/server";

// Define types for the request body and query parameters
interface CreateComingRequestBody {
  title: string;
  image: string;
  age: number;
  type: string;
  duration: number;
  startDate: string;
  description: string;
}

export async function GET() {
  await connectMongoDB();
  const comings = await Coming.find();
  return NextResponse.json({ comings });
}

export async function POST(request: NextRequest) {
  const { title, image, age, type, duration, startDate, description }: CreateComingRequestBody = await request.json();
  
  await connectMongoDB();
  await Coming.create({ title, image, age, type, duration, startDate, description });
  
  return NextResponse.json({ message: "Coming created" }, { status: 201 });
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  
  if (!id) {
    return NextResponse.json({ message: "ID is required" }, { status: 400 });
  }

  await connectMongoDB();
  await Coming.findByIdAndDelete(id);
  
  return NextResponse.json({ message: "Coming deleted" }, { status: 200 });
}
