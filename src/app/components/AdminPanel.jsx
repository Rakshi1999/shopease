"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminPanel() {
  const router = useRouter();

  return (
    <div className="bg-white z-40 w-64 transition-transform -translate-x-full sm:translate-x-0">
      <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200">
        <ul className="space-y-2">
          <li onClick={() => router.push("/admin/products")}>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
              </svg>
              <span className="ml-3">Overview</span>
            </a>
          </li>
          <li>
            <button
              type="button"
              className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100"
              aria-controls="dropdown-pages"
              data-collapse-toggle="dropdown-pages"
              onClick={() => router.push("/admin/add-products")}
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="flex-1 ml-3 text-left whitespace-nowrap">
                Add products
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
