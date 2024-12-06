import React from "react";

export default function Loader({ children, isLoading = false }) {
  if (isLoading) {
    return (
      <div className="w-full min-h-screen bg-white grid place-items-center">
        <div>
          <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid w-16 h-16"></div>
          <p className="mt-4 text-gray-500 animate-pulse">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white grid place-items-center">
      {children}
    </div>
  );
}
