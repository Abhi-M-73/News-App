import React from "react";

const NewsCard = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 bg-gray-100 p-6">
      {data.map((article, index) => (
        <div
          key={index}
          className="max-w-sm rounded-lg shadow-lg bg-white overflow-hidden"
        >
          {/* Image */}
          <img
            src={article.urlToImage || "https://via.placeholder.com/400x200"}
            alt={article.title || "News Image"}
            className="w-full h-48 object-cover"
          />

          {/* Card Content */}
          <div className="p-4">
            {/* Title */}
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {article.title || "Exciting News Headline"}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm">
              {article.description
                ? article.description.substring(0, 100) + "..."
                : "No description available."}
            </p>

            {/* Read More Button */}
            <div className="mt-4">
              <a
                href={article.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;
