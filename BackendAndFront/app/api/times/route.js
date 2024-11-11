import connectMongoDB from "@/libs/mongodb";
import Time from "@/models/TimeModel";
import { NextResponse } from "next/server";

export async function GET() {
    await connectMongoDB();
    const times = await Time.find();
    return NextResponse.json({ times });
}

export async function POST(request) {
    const { title, image, date, branch1, time1, branch2, time2, branch3, time3, branch4, time4, branch5, time5, branch6, time6 } = await request.json();
    await connectMongoDB();
    await Time.create ({ title, image, date, branch1, time1, branch2, time2, branch3, time3, branch4, time4, branch5, time5, branch6, time6 });
    return NextResponse.json({ message: "Time created" }, { status: 201 });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Time.findByIdAndDelete(id);
    return NextResponse.json({ message: "Time deleted" }, { status: 200 });
}