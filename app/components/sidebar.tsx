"use client";
import { useState } from "react";

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div
      className={` 
        bg-[#F9F7F2] h-[80vh] border-3 rounded-sm p-4 
        transition-all duration-500 ease-in-out shadow-[8px_8px_0px_0px_#282828] overflow-hidden 
        ${isExpanded ? "w-64" : "w-20"} `}
    >
      <h1> Sidebar </h1>

      {/* Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="rounded-full bg-black px-8 py-3 text-sm font-semibold text-white hover:bg-zinc-800 transition-colors"
      >
        {isExpanded ? "Collapse" : "Expand"}
      </button>
    </div>
  );
}
