import connectMongoDB from "@/libs/mongodb";
import Coming from "@/models/ComingModel";
import { NextResponse } from "next/server";

// Define the type for the request body
interface UpdateRequestBody {
  newTitle: string;
  newImage: string;
  newAge: number;
  newType: string;
  newDuration: number;
  newStartDate: string;
  newDescription: string;
}

// Define the type for the params object
interface Params {
  id: string;
}

export async function PUT(request: Request, { params }: { params: Params }) {
  const { id } = params;
  const { newTitle: title, newImage: image, newAge: age, newType: type, newDuration: duration, newStartDate: startDate, newDescription: description }: UpdateRequestBody = await request.json();
  
  await connectMongoDB();
  await Coming.findByIdAndUpdate(id, { title, image, age, type, duration, startDate, description });
  
  return NextResponse.json({ message: "Coming updated" }, { status: 200 });
}

export async function GET(request: Request, { params }: { params: Params }) {
  const { id } = params;
  
  await connectMongoDB();
  const coming = await Coming.findOne({ _id: id });
  
  return NextResponse.json({ coming }, { status: 200 });
}
