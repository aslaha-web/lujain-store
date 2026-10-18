import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(offers);
}

const offers = [
  {
    id: 1,
    title: "Summer Sale",
    description: "Get 20% off on selected products",
    discount: "20%",
    image: "/offers/offers1.png"
  },
  {
    id: 2,
    title: "Special Offer",
    description: "Get 10% off on selected products",
    discount: "10%",
    image: "/offers/offers2.png"
  },
  {
    id: 3,
    title: "Fashion Sale",
    description: "Get 15% off on selected products",
    discount: "15%",
    image: "/offers/offers3.png"
  }
];