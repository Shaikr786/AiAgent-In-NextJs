"use client";

import { useCopilotAction } from "@copilotkit/react-core";
import { useState } from "react";
import ButtonAndResults from "./ButtonAndResults";

interface ImageObject {
  url: string;
}

export default function MyComponent() {
  const [images, setImages] = useState<ImageObject[]>([]);
  const [randomImages, setRandomImages] = useState<ImageObject[]>([]);

  // Function to fetch random image
  const fetchRandomImage = async (): Promise<ImageObject> => {
    const response = await fetch("https://random.imagecdn.app/500/500");
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    return { url };
  };
  

  // Define Copilot action
  useCopilotAction({
    name: "addImages",
    description: "Generate a specified number of random images",
    parameters: [
      {
        name: "count",
        type: "number",
        description: "The number of random images to generate",
        required: true,
      },
    ],
    handler: async ({ count }) => {
      const newImages: ImageObject[] = [];
      for (let i = 0; i < count; i++) {
        const newImage = await fetchRandomImage();
        newImages.push(newImage);
      }
      setImages([...images, ...newImages]);
    },
  });

  return (
    <div>
      <h2>Random Image Generator</h2>
      <ButtonAndResults
        randomImages={randomImages}
        images={images}
        setRandomImages={setRandomImages}
        setImages={setImages}
        fetchRandomImage={fetchRandomImage}
      />
    </div>
  );
}
