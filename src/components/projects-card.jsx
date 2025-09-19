import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ image, title, description, link }) {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="flex flex-col md:flex-row items-center md:space-x-12">
      {/* Image */}
      <div className="md:w-1/2 w-full">
        <img src={image} alt={title} className="w-full rounded-lg shadow-lg" />
      </div>

      {/* Text */}
      <div className="md:w-1/2 w-full mt-8 md:mt-0 text-center md:text-left">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>

        
          <Link            
            onClick={() => openInNewTab(link)}
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-md transition-transform transform hover:scale-105"
          >
            Case Study
          </Link>
        
      </div>
    </div>
  );
}
