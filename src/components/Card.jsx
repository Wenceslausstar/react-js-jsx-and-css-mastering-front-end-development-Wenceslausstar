import React from "react";

export default function Card({ className = "", children }) {
  return (
    <div
      className={`bg-white dark:bg-gray-800 shadow rounded-md p-4 ${className}`}
    >
      {children}
    </div>
  );
}
