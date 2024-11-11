import connectMongoDB from "@/libs/mongodb";
import Coming from "@/models/ComingModel";
import { NextResponse } from "next/server";

export async function GET() {
    await connectMongoDB();
    const comings = await Coming.find();
    return NextResponse.json({ comings });
}

export async function POST(request) {
    const { title, image, age, type, duration, startDate, description } = await request.json();
    await connectMongoDB();
    await Coming.create({title, image, age, type, duration, startDate, description});
    return NextResponse.json({ message: "Coming created" }, { status: 201 });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Coming.findByIdAndDelete(id);
    return NextResponse.json({ message: "Coming deleted" }, { status: 200 });
}