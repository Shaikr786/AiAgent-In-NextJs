"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faTrash, faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import React from 'react';

interface ImageObject {
  url: string;
}

interface ButtonAndResultsProps {
  randomImages: ImageObject[];
  images: ImageObject[];
  setRandomImages: React.Dispatch<React.SetStateAction<ImageObject[]>>;
  setImages: React.Dispatch<React.SetStateAction<ImageObject[]>>;
  fetchRandomImage: () => Promise<ImageObject>;
}

const ButtonAndResults: React.FC<ButtonAndResultsProps> = ({
  randomImages,
  images,
  setRandomImages,
  setImages,
  fetchRandomImage,
}) => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [popupImage, setPopupImage] = useState<ImageObject | null>(null);

  const handleAddImage = async () => {
    const newImage = await fetchRandomImage();
    setImages([...images, newImage]);
  };

  const handleDownload = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "downloaded-image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDelete = (index: number, type: "random" | "generated") => {
    if (type === "random") {
      setRandomImages(randomImages.filter((_, i) => i !== index));
    } else {
      setImages(images.filter((_, i) => i !== index));
    }
  };

  const renderImageCard = (image: ImageObject, index: number, type: "random" | "generated") => (
    <div
      key={index}
      className={`relative group flex justify-center items-center border-2 border-gray-800 rounded-lg shadow-lg transition-transform ${
        hoveredImage === index ? "scale-110 z-10" : "hover:scale-105"
      }`}
      onMouseEnter={() => setHoveredImage(index)}
      onMouseLeave={() => setHoveredImage(null)}
      onClick={() => setPopupImage(image)}
    >
      <img
        src={image.url}
        alt={`${type} image ${index}`}
        className="max-w-full h-auto rounded shadow group-hover:opacity-75"
      />
      <Button
        onClick={(e) => {
          e.stopPropagation();
          handleDownload(image.url);
        }}
        className="absolute bottom-2 right-2 p-2 bg-white text-black rounded opacity-0 group-hover:opacity-100"
      >
        <FontAwesomeIcon icon={faDownload} />
      </Button>
      <Button
        onClick={(e) => {
          e.stopPropagation();
          handleDelete(index, type);
        }}
        className="absolute bottom-2 left-2 p-2 bg-white text-black rounded opacity-0 group-hover:opacity-100"
      >
        <FontAwesomeIcon icon={faTrash} />
      </Button>
    </div>
  );

  return (
    <div className="p-4">
      <button onClick={handleAddImage}>Add Image</button>
      <ul>
        {images.map((image, index) => (
          <li key={index}>
            <img src={image.url} alt={`Random ${index}`} />
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {randomImages.map((image, index) => renderImageCard(image, index, "random"))}
        {images.map((image, index) => renderImageCard(image, index, "generated"))}
      </div>

      {popupImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={() => setPopupImage(null)}
        >
          <div className="relative p-4 bg-white rounded-lg shadow-lg">
            <img src={popupImage.url} alt="Popup" className="max-w-full max-h-[80vh] rounded-lg" />
            <div className="flex justify-center space-x-4 mt-4">
              <Button className="p-3 bg-red-500 text-white rounded shadow-lg">
                <FontAwesomeIcon icon={faHeart} />
              </Button>
              <Button className="p-3 bg-blue-500 text-white rounded shadow-lg">
                <FontAwesomeIcon icon={faComment} />
              </Button>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDownload(popupImage.url);
                }}
                className="p-3 bg-green-500 text-white rounded shadow-lg"
              >
                <FontAwesomeIcon icon={faDownload} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtonAndResults;
