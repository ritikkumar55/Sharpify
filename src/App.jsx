import React from "react";
import Home from "./components/Home";
import "./App.css";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-2">
          AI Image Enhancer{" "}
        </h1>
        <p className="text-lg text-gray-500">
          Upload your Image and let AI enhance in seconds!
        </p>
      </div>
      <Home />
      <div className="text-mx text-gray-500 mt-5 text-shadow-2xs">Powered By @RitikAI</div>
    </div>
  );
};

export default App;
