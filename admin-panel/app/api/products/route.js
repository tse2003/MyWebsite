import connectMongoDB from "@/libs/mongodb";
import Product from "@/models/ProductModel";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { name, image, price, category } = await request.json();
    await connectMongoDB();
    await Product.create({name, image, price, category});
    return NextResponse.json({ message: "Product Created" }, { status: 201 })
}