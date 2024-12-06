"use client";
import React, { useState, useEffect, useRef } from "react";
import Ratings from "./Ratings";

export default function ProductView({ product }) {
  const [currentImage, setCurrentImage] = useState(product.image[0]);
  const [imageIndex, setImageIndex] = useState(0);
  const intervalIdRef = useRef();

  const handleMouseEnter = () => {
    if (product.image.length > 1) {
      intervalIdRef.current = setInterval(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % product.image.length);
      }, 850);
    }
  };

  const handleMouseLeave = () => {
    clearInterval(intervalIdRef.current);
    setImageIndex(0);
  };

  useEffect(() => {
    setCurrentImage(product.image[imageIndex]);
  }, [imageIndex, product.image]);

  return (
    <div
      id={product.uuid}
      className="bg-gray-50 w-[400px] shadow-md overflow-hidden rounded-lg cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16px"
          className="fill-gray-800 inline-block"
          viewBox="0 0 64 64"
        >
          <path
            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
            data-original="#000000"
          />
        </svg>
      </div>
      <div className="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
        <img
          src={
            currentImage || "https://shoecareme.com/assets/uploads/No-Image.png"
          }
          alt={product.name}
          className="h-full w-full object-contain transition-all duration-300 ease-in-out"
        />
      </div>
      <div className="p-6 bg-white">
        <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
        <h4 className="text-lg text-gray-800 font-bold mt-2 flex gap-x-1">
          <span>₹</span>
          {product.price}
        </h4>
        <p className="text-gray-600 text-sm mt-2">{product.description}</p>
        <Ratings rating={product.rate} />
        <p className="text-gray-600 text-sm mt-2">
          {" "}
          Quantity Left: {product.count}
        </p>
      </div>
    </div>
  );
}
