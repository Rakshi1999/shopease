import { useState } from "react";
import Image from "next/image";
import { twMerge } from "tw-merge";
import { Button } from "@headlessui/react";
import { useRouter } from "next/navigation";
import {
  kidsFashionThumbnail,
  electronicsThumbnail,
  blackFridaySaleThumbnail,
} from "../../public";

const HeroCarousel = () => {
  const slides = [
    {
      id: 1,
      image: kidsFashionThumbnail,
      title: "Checkout Latest Kids Fashion",
      subtitle: "Amazing Deals Awaits!!!",
      ctaText: "Explore Now",
      navigateTo: "/products?category=kids-fashion",
      wrapperClass: "left-10",
    },
    {
      id: 2,
      image: electronicsThumbnail,
      title: "Trending Electronic Accessories",
      subtitle: "30% off on selected items",
      ctaText: "Shop Now",
      navigateTo: "/products?category=electronics",
      wrapperClass: "",
    },
    {
      id: 3,
      image: blackFridaySaleThumbnail,
      title: "Black Friday Sale is live",
      subtitle: "Up to 50% flat off on selected items",
      ctaText: "Checkout Now",
      navigateTo: "/products?category=black-friday-sale",
      wrapperClass: "",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  return (
    <div className="relative w-full h-[500px] overflow-hidden bg-gray-200">
      {/* Carousel Content */}
      <div
        className="flex transition-transform duration-650 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0 h-[500px] relative"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              layout="fill"
              objectFit="cover"
              priority={slide.id === 1}
              className="bg-white opacity-80"
            />
            <div
              className={twMerge(
                "absolute inset-0 flex items-center justify-center text-white px-4",
                slide.wrapperClass
              )}
            >
              <div className="text-center">
                {/* Gradient Title */}
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-red-500 to-yellow-500 text-4xl md:text-7xl font-bold mb-4">
                  {slide.title}
                </h1>
                {/* Gradient Subtitle */}
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 text-lg md:text-4xl">
                  {slide.subtitle}
                </p>
                <Button
                  className="bg-gradient-to-r from-red-500 to-yellow-600 text-white mt-4 py-3 px-10 rounded-full hover:opacity-90 transition-opacity md:text-xl"
                  onClick={() => {
                    router.push(slide.navigateTo);
                  }}
                >
                  {slide.ctaText}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
        }
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        ❯
      </button>
    </div>
  );
};

export default HeroCarousel;
