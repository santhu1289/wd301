// src/pages/NotFound.jsx
//import React from "react";
import { useNavigate } from "react-router-dom";

const Notfound = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/home"); // Redirect to the homepage
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-700 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-500 mb-8">
        The page you're looking for doesn't exist.
      </p>
      <button
        id="backToHomeButton"
        onClick={handleBackToHome}
        className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded"
      >
        Go Back to Homepage
      </button>
    </div>
  );
};

export default Notfound;
