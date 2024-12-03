import connectMongoDB from "@/libs/mongodb";
import Time from "@/models/TimeModel";
import { NextRequest, NextResponse } from "next/server";

// Define types for the request body and query parameters
interface UpdateTimeRequestBody {
  newTitle: string;
  newImage: string;
  newDate: string;
  newBranch1: string;
  newTime1: string;
  newBranch2: string;
  newTime2: string;
  newBranch3: string;
  newTime3: string;
  newBranch4: string;
  newTime4: string;
  newBranch5: string;
  newTime5: string;
  newBranch6: string;
  newTime6: string;
}

interface Params {
  id: string;
}

export async function PUT(request: NextRequest, { params }: { params: Params }) {
  const { id } = params;
  const {
    newTitle: title,
    newImage: image,
    newDate: date,
    newBranch1: branch1,
    newTime1: time1,
    newBranch2: branch2,
    newTime2: time2,
    newBranch3: branch3,
    newTime3: time3,
    newBranch4: branch4,
    newTime4: time4,
    newBranch5: branch5,
    newTime5: time5,
    newBranch6: branch6,
    newTime6: time6,
  }: UpdateTimeRequestBody = await request.json();

  await connectMongoDB();
  await Time.findByIdAndUpdate(id, { title, image, date, branch1, time1, branch2, time2, branch3, time3, branch4, time4, branch5, time5, branch6, time6 });

  return NextResponse.json({ message: "Time updated" }, { status: 200 });
}

export async function GET(request: NextRequest, { params }: { params: Params }) {
  const { id } = params;

  await connectMongoDB();
  const time = await Time.findOne({ _id: id });

  return NextResponse.json({ time }, { status: 200 });
}
