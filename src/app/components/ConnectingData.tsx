// "use client";
// import { useState } from "react";
// import { useCopilotReadable } from "@copilotkit/react-core";



// export function YourComponent() {
//     const [colleagues, setColleagues] = useState<{ id: number; name: string; role: string }[]>([]);

//   const [showInputFields, setShowInputFields] = useState(false);
//   const [newName, setNewName] = useState("");
//   const [newRole, setNewRole] = useState("");


//   useCopilotReadable({
//     description: "The current user's colleagues",
//     value: colleagues,
    
//   });

//   const addColleague = () => {
//     if (!newName.trim() || !newRole.trim()) {
//       alert("Please enter a valid name and role!");
//       return;
//     }

//     setColleagues((prev) => [
//       ...prev,
//       { id: prev.length + 1, name: newName, role: newRole },
//     ]);

//     console.log("Added a colleague:", { name: newName, role: newRole });

//     // Clear input fields and hide them
//     setNewName("");
//     setNewRole("");
//     setShowInputFields(false);
//   };

//   return (
//     <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
//       <h2 className="text-xl font-semibold text-gray-900">Names</h2>

//       {/* Display Colleagues List */}
//       <ul className="space-y-2">
//         {colleagues.map((colleague) => (
//           <li
//             key={colleague.id}
//             className="p-4 bg-gray-100 rounded-lg shadow-sm flex justify-between items-center"
//           >
//             <div>
//               <p className="text-lg font-medium">{colleague.name}</p>
//               <p className="text-sm text-gray-600">{colleague.role}</p>
//             </div>
//           </li>
//         ))}
//       </ul>

//       {/* "Add Colleague" Button */}
//       {!showInputFields && (
//         <button
//           onClick={() => setShowInputFields(true)}
//           className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Add Colleague
//         </button>
//       )}

//       {/* Input Fields and Save Button (shown only when showInputFields is true) */}
//       {showInputFields && (
//         <div className="flex flex-col gap-2 mt-4">
//           <input
//             type="text"
//             placeholder="Enter Name"
//             className="border px-3 py-2 rounded"
//             value={newName}
//             onChange={(e) => setNewName(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Enter Role"
//             className="border px-3 py-2 rounded"
//             value={newRole}
//             onChange={(e) => setNewRole(e.target.value)}
//           />
//           <div className="flex gap-2">
//             <button
//               onClick={addColleague}
//               className="bg-green-500 text-white px-4 py-2 rounded"
//             >
//               Save
//             </button>
//             <button
//               onClick={() => setShowInputFields(false)}
//               className="bg-red-500 text-white px-4 py-2 rounded"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default YourComponent;



//adding images similarly

// "use client";

// import { useCopilotReadable, useCopilotAction } from "@copilotkit/react-core";
// import { useState } from "react";

// // Define Image Object Type
// type ImageObject = {
//   id: string;
//   url: string;
//   prompt: string;
// };

// export default function MyComponent() {
//   const [images, setImages] = useState<ImageObject[]>([]);
//   const [imagePrompt, setImagePrompt] = useState<string>("");

//   // ✅ Sync user's prompt with Copilot
//   useCopilotReadable({
//     description: "The type of image the user wants to generate",
//     value: imagePrompt,
//   });

//   // ✅ Fetch image from Unsplash API
//   const fetchImageByPrompt = async (prompt: string): Promise<ImageObject | null> => {
//     try {
//       const response = await fetch(
//         `https://api.unsplash.com/photos/random?query=${encodeURIComponent(prompt)}&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
//       );

//       if (!response.ok) {
//         console.error("Failed to fetch image:", response.statusText);
//         return null;
//       }

//       const data = await response.json();
//       return {
//         id: crypto.randomUUID(),
//         url: data.urls.regular,
//         prompt,
//       };
//     } catch (error) {
//       console.error("Error fetching image:", error);
//       return null;
//     }
//   };

//   // ✅ Copilot Action: Generate an image based on prompt
//   useCopilotAction({
//     name: "generateImage",
//     description: "Generate an image based on a user's description",
//     parameters: [],
//     handler: async () => {
//       if (!imagePrompt) {
//         console.log("⚠️ No prompt entered. Returning error message.");
//         return "Please enter a prompt first!";
//       }

//       const newImage = await fetchImageByPrompt(imagePrompt);
//       console.log("Fetched the new image prompt", imagePrompt)
//       if (!newImage) {
//         return "Failed to generate an image. Try again!";
//       }

//       setImages((prevImages) => [...prevImages, newImage]);
//       console.log("generated image for particular new prompt",  newImage);
//       return `Generated an image for: "${imagePrompt}"`;
//     },
//   });

//   return (
//     <div>
//       <h2>AI Image Generator</h2>

//       {/* ✅ Input field for users to specify what type of image they want */}
      

//       {/* ✅ Display generated images */}
//       <div>
//         {images.map((img) => (
//           <div key={img.id}>
//             <p><strong>Prompt:</strong> {img.prompt}</p>
//             <img src={img.url} alt="Generated" width={200} />
//           </div>
//         ))}
//       </div>

//       <input
//         type="text"
//         placeholder="Describe an image..."
//         value={imagePrompt}
//         onChange={(e) => setImagePrompt(e.target.value)}
//       />
//       <button onClick={() => console.log("Stored prompt for Copilot:", imagePrompt)}>
//         Save Prompt
//       </button>
//     </div>
//   );
// }


//image generation based on prompt by storing prompts


// "use client";

// import { useCopilotReadable, useCopilotAction } from "@copilotkit/react-core";
// import { useState } from "react";

// // Define Image Object Type
// type ImageObject = {
//   id: string;
//   url: string;
//   prompt: string;
// };

// export default function MyComponent() {
//   const [images, setImages] = useState<ImageObject[]>([]);
//   const [imagePrompt, setImagePrompt] = useState<string>("");
//   const [savedPrompts, setSavedPrompts] = useState<string[]>([]); // ✅ Store saved prompts

//   useCopilotReadable({
//     description: "The type of image the user wants to generate",
//     value: imagePrompt,
//   });

//   // ✅ Fetch Image from Unsplash
//   const fetchImageByPrompt = async (prompt: string): Promise<ImageObject> => {
//     const response = await fetch(`https://source.unsplash.com/featured/?${encodeURIComponent(prompt)}`);
//     return { id: crypto.randomUUID(), url: response.url, prompt };
//   };

//   // ✅ Copilot Action: Handle Image Generation and Prompt Storage
//   useCopilotAction({
//     name: "generateImage",
//     description: "Generate an image based on a user's description",
//     parameters: [{ name: "newPrompt", type: "string", description: "The prompt to generate an image" }],
//     handler: async ({ newPrompt }) => {
//       if (!newPrompt) {
//         return { message: "❌ Please enter a valid description to generate an image." };
//       }

//       // ✅ Store the prompt in the state array (if not already saved)
//       setSavedPrompts((prev) => (prev.includes(newPrompt) ? prev : [...prev, newPrompt]));

//       // ✅ Fetch a new image based on the newPrompt
//       const newImage = await fetchImageByPrompt(newPrompt);
//       setImages((prevImages) => [...prevImages, newImage]);

//       return { message: `✅ Generated an image for: "${newPrompt}"` };
//     },
//   });

//   return (
//     <div>
//       <h2>AI Image Generator</h2>

//       {/* ✅ Input field to enter prompt */}
//       <input
//         type="text"
//         placeholder="Describe an image..."
//         value={imagePrompt}
//         onChange={(e) => setImagePrompt(e.target.value)}
//       />
//       <button onClick={() => console.log("Stored prompt for Copilot:", imagePrompt)}>
//         Save Prompt
//       </button>

//       {/* ✅ Display generated images */}
//       <div style={{ marginTop: "20px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
//         {images.map((img) => (
//           <div key={img.id}>
//             <p><strong>Prompt:</strong> {img.prompt}</p>
//             <img src={img.url} alt="Generated" width={200} />
//           </div>
//         ))}
//       </div>

//       {/* ✅ Display saved prompts */}
//       <h3>Saved Prompts</h3>
//       <ul>
//         {savedPrompts.map((prompt, index) => (
//           <li key={index}>{prompt}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }


//div display


// "use client";

// import { useCopilotReadable, useCopilotAction } from "@copilotkit/react-core";
// import { useState } from "react";

// type ImageObject = {
//   id: string;
//   url: string;
//   prompt: string;
// };

// export default function MyComponent() {
//   const [images, setImages] = useState<ImageObject[]>([]);
//   const [imagePrompt, setImagePrompt] = useState<string>("");
//   const [needsUserInput, setNeedsUserInput] = useState(false);

//   // ✅ Log state changes when CopilotKit requires input
//   useCopilotReadable({
//     description: "User-provided prompt when Copilot cannot generate an image",
//     value: imagePrompt,
//   });

//   const fetchImageByPrompt = async (prompt: string): Promise<ImageObject | null> => {
//         try {
//           const response = await fetch(
//             `https://api.unsplash.com/photos/random?query=${encodeURIComponent(prompt)}&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
//           );
    
//           if (!response.ok) {
//             console.error("Failed to fetch image:", response.statusText);
//             return null;
//           }
    
//           const data = await response.json();
//           return {
//             id: crypto.randomUUID(),
//             url: data.urls.regular,
//             prompt,
//           };
//         } catch (error) {
//           console.error("Error fetching image:", error);
//           return null;
//         }
//       };



//   // ✅ Copilot Action: Generates image, keeps input field intact
//   useCopilotAction({
//     name: "generateImage",
//     description: "Generate an image based on a user's description",
//     parameters: [],
//     handler: async () => {
//       if (!imagePrompt.trim()) {
//         setNeedsUserInput(true);
//         console.log("CopilotKit: Needs user input for prompt.");
//         return "I need a description to generate an image. Please enter one.";
//       }

//       const newImage = await fetchImageByPrompt(imagePrompt);

//       if (!newImage) {
//         setNeedsUserInput(true);
//         console.log("CopilotKit: Image generation failed, requesting new input.");
//         return "I couldn't generate an image. Please provide a new prompt.";
//       }

//       setNeedsUserInput(false);
//       setImagePrompt(""); // Reset the prompt after successful generation
//       setImages((prevImages) => [...prevImages, newImage]);
//       console.log("CopilotKit: Image generated successfully.");
//       return `Generated an image for: "${imagePrompt}"`;
//     },
//   });

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-semibold">AI Image Generator</h2>

//       {/* ✅ Input box is ALWAYS visible, but highlights when needed */}
//       <div
//         className={`flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-96 border 
//         ${needsUserInput ? "border-red-500 shadow-red-300" : "border-gray-300"}
//         transition-all duration-300`}
//       >
//         <input
//           type="text"
//           placeholder="Describe an image..."
//           value={imagePrompt}
//           onChange={(e) => setImagePrompt(e.target.value)}
//           className={`w-full p-3 border rounded-md focus:outline-none text-gray-700 shadow-sm
//           ${needsUserInput ? "border-red-500 focus:ring-2 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"}
//           transition-all duration-300`}
//         />

//         <button
//           onClick={() => setNeedsUserInput(false)}
//           className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition-all duration-200"
//         >
//           Save Prompt
//         </button>
//       </div>

//       {/* ✅ Display generated images */}
//       <div className="mt-5 flex flex-wrap gap-4">
//         {images.map((img) => (
//           <div key={img.id} className="border p-3 rounded-lg shadow-md">
//             <p className="font-semibold">Prompt: {img.prompt}</p>
//             <img src={img.url} alt="Generated" className="w-48 rounded-md" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// //further in chat popup
// "use client"

// import { useEffect, useState } from "react";
// import { useCopilotReadable, useCopilotAction } from "@copilotkit/react-core";

// type ImageObject = {
//   id: string;
//   url: string;
//   prompt: string;
// };

// export default function MyComponent() {
//   const [images, setImages] = useState<ImageObject[]>([]);
//   const [imagePrompt, setImagePrompt] = useState<string>("");
//   const [needsUserInput, setNeedsUserInput] = useState(false);
//   const [isClient, setIsClient] = useState(false);

//   // ✅ Ensure hydration is completed before rendering UI
//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   useCopilotReadable({
//     description: "User-provided prompt when Copilot cannot generate an image",
//     value: needsUserInput ? imagePrompt : "",
//   });

//   const fetchImageByPrompt = async (prompt: string): Promise<ImageObject | null> => {
//     console.log(`Fetching image for prompt: "${prompt}"`);
//     try {
//       const response = await fetch(`https://source.unsplash.com/featured/?${encodeURIComponent(prompt)}`);
//       return { id: crypto.randomUUID(), url: response.url, prompt };
//     } catch (error) {
//       console.error("Error fetching image:", error);
//       return null;
//     }
//   };

//   useCopilotAction({
//     name: "generateImage",
//     description: "Generate an image based on a user's description",
//     parameters: [],
//     handler: async () => {
//       if (!imagePrompt) {
//         console.log("No prompt provided. Requesting user input.");
//         setNeedsUserInput(true);
//         return "Please enter a description to generate an image.";
//       }

//       console.log(`Using prompt: "${imagePrompt}"`);
//       const newImage = await fetchImageByPrompt(imagePrompt);

//       if (!newImage) {
//         console.log("Image generation failed. Requesting new input.");
//         setNeedsUserInput(true);
//         return "Couldn't generate an image. Please try a different description.";
//       }

//       console.log("Image generated successfully.");
      
//       // ✅ Reset state after image generation
//       setNeedsUserInput(false);
//       setImagePrompt(""); // Reset the prompt for the next request
      
//       setImages((prevImages) => [...prevImages, newImage]);

//       return `Generated an image for: "${imagePrompt}"`;
//     },
//   });

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-semibold">AI Image Generator</h2>

//       {/* ✅ Only show input UI after hydration & when needed */}
//       {isClient && needsUserInput && (
//         <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-96 border border-gray-300 mt-4">
//           <input
//             type="text"
//             placeholder="Describe an image..."
//             value={imagePrompt}
//             onChange={(e) => setImagePrompt(e.target.value)}
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 shadow-sm"
//           />
//           <button
//             onClick={() => {
//               console.log("User entered prompt:", imagePrompt);
//               setNeedsUserInput(false);
//             }}
//             className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition-all duration-200"
//           >
//             Save Prompt
//           </button>
//         </div>
//       )}

//       {/* ✅ Display generated images */}
//       <div className="mt-5 flex flex-wrap gap-4">
//         {images.map((img) => (
//           <div key={img.id} className="border p-3 rounded-lg shadow-md">
//             <p className="font-semibold">Prompt: {img.prompt}</p>
//             <img src={img.url} alt="Generated" className="w-48 rounded-md" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



//better ui

"use client";

import { useCopilotReadable, useCopilotAction } from "@copilotkit/react-core";
import { useState } from "react";

type ImageObject = {
  id: string;
  url: string;
  prompt: string;
};

export default function MyComponent() {
  const [images, setImages] = useState<ImageObject[]>([]);
  const [imagePrompt, setImagePrompt] = useState<string>("");
  const [needsUserInput, setNeedsUserInput] = useState(false);

  useCopilotReadable({
    description: "User-provided prompt when Copilot cannot generate an image",
    value: imagePrompt,
  });

  const fetchImageByPrompt = async (prompt: string): Promise<ImageObject | null> => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/random?query=${encodeURIComponent(prompt)}&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
      );

      if (!response.ok) {
        console.error("Failed to fetch image:", response.statusText);
        return null;
      }

      const data = await response.json();
      return {
        id: crypto.randomUUID(),
        url: data.urls.regular,
        prompt,
      };
    } catch (error) {
      console.error("Error fetching image:", error);
      return null;
    }
  };

  useCopilotAction({
    name: "generateImage",
    description: "Generate an image based on a user's description",
    parameters: [],
    handler: async () => {
      if (!imagePrompt.trim()) {
        setNeedsUserInput(true);
        return "I need a description to generate an image. Please enter one.";
      }

      const newImage = await fetchImageByPrompt(imagePrompt);

      if (!newImage) {
        setNeedsUserInput(true);
        return "I couldn't generate an image. Please provide a new prompt.";
      }

      setNeedsUserInput(false);
      setImages((prevImages) => [...prevImages, newImage]);
      return `Generated an image for: "${imagePrompt}"`;
    },
  });

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
        const newImage = await fetchImageByPrompt(imagePrompt);
        if (newImage) newImages.push(newImage);
      }
      setImages((prevImages) => [...prevImages, ...newImages]);
    },
  });

  return (
    <div className="flex flex-col items-center min-h-screen p-6 overflow-y-auto">
      <div className="fixed top-0 w-full flex justify-center p-4 shadow-md z-10">
        <div className="flex flex-col items-center w-96">
          <input
            type="text"
            placeholder="Describe an image..."
            value={imagePrompt}
            onChange={(e) => setImagePrompt(e.target.value)}
            className={`w-full p-3 border rounded-md focus:outline-none text-gray-700 shadow-sm
              ${needsUserInput ? "border-red-500 focus:ring-2 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"}
              transition-all duration-300`}
          />
          <button
            onClick={async () => {
              setNeedsUserInput(false);
              if (!imagePrompt.trim()) return;
              const newImage = await fetchImageByPrompt(imagePrompt);
              if (newImage) setImages((prevImages) => [...prevImages, newImage]);
            }}
            className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition-all duration-200"
          >
            Save & Generate
          </button>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl px-4 overflow-y-auto">
        {images.map((img) => (
          <div key={img.id} className="border p-3 rounded-lg shadow-md">
            <p className="font-semibold text-center">{img.prompt}</p>
            <img src={img.url} alt="Generated" className="w-full h-48 object-cover rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
}
