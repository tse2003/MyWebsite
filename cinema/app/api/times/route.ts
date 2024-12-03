import connectMongoDB from "@/libs/mongodb";
import Time from "@/models/TimeModel";
import { NextRequest, NextResponse } from "next/server";

// Define the structure of the request body for the POST method
interface CreateTimeRequestBody {
  title: string;
  image: string;
  date: string;
  branch1: string;
  time1: string;
  branch2: string;
  time2: string;
  branch3: string;
  time3: string;
  branch4: string;
  time4: string;
  branch5: string;
  time5: string;
  branch6: string;
  time6: string;
}

export async function GET() {
  await connectMongoDB();
  const times = await Time.find();
  return NextResponse.json({ times });
}

export async function POST(request: NextRequest) {
  const {
    title,
    image,
    date,
    branch1,
    time1,
    branch2,
    time2,
    branch3,
    time3,
    branch4,
    time4,
    branch5,
    time5,
    branch6,
    time6,
  }: CreateTimeRequestBody = await request.json();
  
  await connectMongoDB();
  await Time.create({ title, image, date, branch1, time1, branch2, time2, branch3, time3, branch4, time4, branch5, time5, branch6, time6 });
  
  return NextResponse.json({ message: "Time created" }, { status: 201 });
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  
  if (!id) {
    return NextResponse.json({ message: "ID is required" }, { status: 400 });
  }

  await connectMongoDB();
  await Time.findByIdAndDelete(id);
  
  return NextResponse.json({ message: "Time deleted" }, { status: 200 });
}
