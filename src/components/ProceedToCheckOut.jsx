import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProceedToCheckOut = () => {
  const navigate =  useNavigate();
  const [showLoader, setShowLoader] = useState(true); // State to control SVG visibility
  const [showMessage, setShowMessage] = useState(false); // State to control message visibility

  useEffect(() => {
    // Set a timer to hide the loader and show the message after 2 seconds
    const timer = setTimeout(() => {
      setShowLoader(false); // Hide the loader
      setShowMessage(true); // Show the message
    }, 2000);

    // Clean up the timer if the component is unmounted or re-rendered
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container flex justify-center items-center ">
      {/* Display the loader if showLoader is true */}
      {showLoader && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150" width="300" height="150">
          <rect fill="#FFF" width="100%" height="100%" />
          <path
            fill="none"
            stroke="#00AA0A"
            strokeWidth="15"
            strokeLinecap="round"
            strokeDasharray="300 385"
            strokeDashoffset="0"
            d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"
          >
            <animate
              attributeName="stroke-dashoffset"
              calcMode="spline"
              dur="1.4s"
              values="685;-685"
              keySplines="0 0 1 1"
              repeatCount="indefinite"
            ></animate>
          </path>
        </svg>
      )}

      {/* Display the message if showMessage is true */}
      {showMessage && (
        <div className="message">
          <h2 className="font-bold text-3xl mb-2">Your Order has been <span className="text-green-500">Successfully</span> Placed!</h2>
          <p className="font-semibold text-xl mb-16">Thank you for Shopping!</p>
          <button onClick={()=>navigate("/")} className="py-2 px-5 border rounded border-blue-600 text-blue-500 hover:bg-blue-50">Continue Shopping...</button>
        </div>
      )}
    </div>
  );
};

export default ProceedToCheckOut ;
