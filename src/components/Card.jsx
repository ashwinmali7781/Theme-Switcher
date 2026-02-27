import React from "react";

export default function Card() {
  return (
    <div className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 dark:bg-gray-800 dark:border-gray-700">
      <a href="/">
        <img
          className="p-6 rounded-t-2xl h-60 w-full object-cover transition-transform duration-300 hover:scale-105"
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
          alt="product_image1"
        />
      </a>

      <div className="px-6 pb-6">
        <a href="/">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white hover:text-blue-600 transition-colors duration-300">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
        </a>

        <div className="flex items-center mt-3 mb-5">
          {/* 4 Filled Stars */}
          {[1, 2, 3, 4].map((star) => (
            <svg
              key={star}
              className="w-4 h-4 text-yellow-400 mr-1"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ))}

          {/* 1 Empty Star */}
          <svg
            className="w-4 h-4 text-gray-300 dark:text-gray-600"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>

          <span className="bg-blue-100 text-blue-800 text-xs font-semibold ml-3 px-3 py-1 rounded-full dark:bg-blue-200 dark:text-blue-800">
            4.0
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            $599
          </span>

          <a
            href="/"
            className="text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-6 py-2.5 text-center transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}
