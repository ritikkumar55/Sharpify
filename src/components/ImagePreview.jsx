import React from "react";
import Loading from "./Loading";

const ImagePreview = (props) => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      <div className="bg-gray-300 shadow-lg rounded-2xl overflow-hidden">
        <h2 className="text-xl fond-semibold text-center bg-gray-800 text-white py-2">
          Original Image
        </h2>
        

        {props.uploaded ? (
          <img
            src={props.uploaded}
            alt=""
            className="w-[400px] h-[300px] object-contain mx-auto"
          />
        ) : (
          <div className="flex items-center justify-center h-70 bg-gray-200">
            No Image Selected
          </div>
        )}
      </div>

      {/* Enhanced Image */}

      <div className="bg-gray-300 shadow-lg rounded-2xl overflow-hidden">
        <h2 className="text-xl fond-semibold text-center bg-blue-800 text-white py-2">
          Enhanced Image
        </h2>

        {props.loading ? (
  <Loading />
) : props.enhanced ? (
  <div className="flex flex-col items-center justify-center p-4">
    <img
      src={props.enhanced}
      alt="Enhanced"
      className="w-[400px] h-[300px] object-contain mx-auto"
    />
    <a
      href={props.enhanced}
      download="enhanced-image.jpg"
      className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
    >
      Download Enhanced Image
    </a>
  </div>
) : (
  <div className="flex items-center justify-center h-70 bg-gray-200">
    No Enhanced Image
  </div>
)}


        {/* {props.loading ? (
  <Loading />
) : props.enhanced ? (
  <img src={props.enhanced} alt="Enhanced" className="w-[400px] h-[300px] object-contain mx-auto" />
) : (
  <div className="flex items-center justify-center h-70 bg-gray-200">
    No Enhanced Image
  </div>
)} */}


        {/* {props.enhanced && !props.loading && (
          <img src={props.enhanced} alt="" className="w-[400px] h-[300px] object-contain mx-auto" />
        )}
        {props.loading ? (
          <Loading />
        ) : (
          <div className="flex items-center justify-center h-70 bg-gray-200">
            No Enhanced Image
          </div>
        )} */}
      </div>
    </div>
  );
};

export default ImagePreview;
