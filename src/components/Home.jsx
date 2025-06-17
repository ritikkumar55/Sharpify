import React, { useState } from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'
import { enhancedImageAPI } from '../utils/enhanceImage'

const Home = () => {
    const [uploadImage, setUploadImage] = useState(null);
    const [enhancedImage, setEnhancedImage] = useState(null);
    const [loading, setloading] = useState(false);

    const UploadImageHandler = async (file) => {
        setUploadImage(URL.createObjectURL(file));
        setloading(true);

        // call the api to enhance the image

        try {

            const enhancedURL = await enhancedImageAPI(file);
            setEnhancedImage(enhancedURL.image);
            setloading(false);

        } catch (error) {

            console.log(error);
            alert("Error while enhancing the image. Please try again later.");


        }

        
    };
    
  return (
    <div className="w-full flex flex-col items-center justify-center py-6">
        <ImageUpload UploadImageHandler={UploadImageHandler}/>
        <ImagePreview loading={loading} uploaded={uploadImage} enhanced={enhancedImage}/>
    </div>
  )
}

export default Home