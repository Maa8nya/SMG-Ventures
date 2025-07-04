import React from "react";

const ResponseCard = () => {
  const data = [
    { title: "Title 1", description: "This is the first Award description." },
    { title: "Title 2", description: "Another set of details here." },
    { title: "Title 3", description: "Final example text here." },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 to-yellow-500 p-4">
      <div className="flex flex-col gap-4 w-full max-w-md">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md transition-opacity duration-300 active:opacity-70 hover:opacity-70"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              {item.title}
            </h2>
            <p className="text-sm md:text-base text-gray-600 mt-2">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponseCard