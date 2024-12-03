import { NextResponse } from "next/server";
import connectToDb from "./../../../../db";
import { Product } from "../../../../models/products";

export async function GET() {
  try {
    connectToDb();
    const products = await Product.find({});
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.log("Error connecting to database", error);
  }
}

export async function POST(req) {
  try {
    connectToDb();
    const body = await req.json();
    const validatedProducts = body.map((product) => {
      if (
        !product.title ||
        !product.description ||
        !product.price ||
        !product.image ||
        !product.category ||
        !product.rate ||
        !product.count
      ) {
        return NextResponse.json(
          { error: "Invalid request body" },
          { status: 400 }
        );
      }
      return product;
    });

    const products = await Product.create(validatedProducts);

    return NextResponse.json(products, { status: 201 });
  } catch (error) {
    console.log("Error connecting to database", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
