"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import {
  HeroCarousel,
  ProductView,
  NewsLetter,
  Testimonials,
  Footer,
} from "../components";
import { Button } from "@headlessui/react";

export default function Home() {
  const isAdmin = false;
  const router: any = useRouter();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log(router);
    if (isAdmin) {
      router.push("/admin");
    }

    (async () => {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data.filter((product: any) => product.count > 0).slice(0, 6));
    })();
  }, [isAdmin, router]);

  return (
    <div className="bg-white w-full min-h-screen font-[sans-serif] flex flex-col justify-evenly gap-5">
      {isAdmin && (
        <button
          className="bg-white px-4 py-2 text-blue-500 rounded-2xl"
          onClick={() => router.push("/admin")}
        >
          Go To Admin Dashboard
        </button>
      )}
      <HeroCarousel />
      <div className="place-items-center grid grid-cols-1 770px:grid-cols-2 1220px:grid-cols-3 gap-10">
        {products.map((product: any) => (
          <React.Fragment key={product.uuid}>
            <ProductView product={product} />
          </React.Fragment>
        ))}
      </div>
      <div className="flex justify-center w-full">
        <Button
          className="mt-8 text-black text-cente italic tracking-widest underline hover:text-indigo-600 transition-all font-semibold"
          onClick={() => router.push("/products")}
        >
          Explore More!!!
        </Button>
      </div>
      <NewsLetter />
      <Testimonials />
      <Footer />
    </div>
  );
}
