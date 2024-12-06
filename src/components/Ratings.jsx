"use client";
import React from "react";

export default function Ratings({ rating = 5 }) {
  const maxStars = 5; // Total number of stars
  const filledStars = Math.floor(rating); // Number of fully filled stars
  const hasHalfStar = rating % 1 !== 0; // Check if there's a half star
  const emptyStars = maxStars - filledStars - (hasHalfStar ? 1 : 0); // Remaining empty stars

  return (
    <div className="flex space-x-2 mt-4">
      {/* Render fully filled stars */}
      {[...Array(filledStars)].map((_, index) => (
        <svg
          key={`filled-${index}`}
          className="w-4 fill-[#facc15]"
          viewBox="0 0 14 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
        </svg>
      ))}

      {/* Render half-filled star if needed */}
      {hasHalfStar && (
        <svg
          className="w-4 fill-[#facc15]"
          viewBox="0 0 14 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="halfStar">
              <rect x="0" y="0" width="7" height="13" />
            </clipPath>
          </defs>
          <path
            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
            clipPath="url(#halfStar)"
          />
          <path
            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
            fill="#CED5D8"
          />
        </svg>
      )}

      {/* Render empty stars */}
      {[...Array(emptyStars)].map((_, index) => (
        <svg
          key={`empty-${index}`}
          className="w-4 fill-[#CED5D8]"
          viewBox="0 0 14 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
        </svg>
      ))}
    </div>
  );
}
