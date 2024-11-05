import connectMongoDB from "@/libs/mongodb";
import Coming from "@/models/ComingModel";
import { NextResponse } from "next/server";

export async function PUT(request, {params}) {
    const { id } = params;
    const { newTitle: title, newImage: image, newAge: age, newType: type, newDuration: duration, newStartDate: startDate, newDescription: description } = await request.json();
    await connectMongoDB();
    await Coming.findByIdAndUpdate(id, { title, image, age, type, duration, startDate, description });
    return NextResponse.json({ message: "Coming updated" }, { status: 200 });
}

export async function GET(request, {params}) {
    const { id } = params;
    await connectMongoDB();
    const coming = await Coming.findOne({ _id: id });
    return NextResponse.json({ coming }, { status: 200 });
}