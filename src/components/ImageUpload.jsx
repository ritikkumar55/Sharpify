import React from 'react'

const ImageUpload = (props) => {

    const ShowImageHandler = (e) => {
        const file = e.target.files[0];
        if(file){
            props.UploadImageHandler(file);
        }
    }
  return (
    <div className="bg-blue-300 shadow-lg rounded-2xl p-6 w-full max-w-2xl justify-center">
        <label htmlFor='fileInput' 
        className="block w-full cursor-pointer bg-yellow-100 border-2 border-dashed border-black-300 rounded-lg p-6 text-center hover:border black-300 transition-all">
            <input type="file" id="fileInput" className="hidden" onChange={ShowImageHandler}/>
            <span className="text-lg font-medium">Click and drag to upload your image</span>
        </label>
        
    </div>
  )
}

export default ImageUpload