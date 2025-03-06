import React, { useState } from "react";

interface TrainDataFormProps {
  onTrainData: (data: File) => void;
}

const TrainDataForm: React.FC<TrainDataFormProps> = ({ onTrainData }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
      console.log("Selected file:", selectedFile);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    console.log("Submit button clicked");
    event.preventDefault();
    if (selectedFile) {
        console.log("Selected fileis being trained:", selectedFile);
      onTrainData(selectedFile);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Upload Image:
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </label>
      <button type="submit">Train Data</button>
    </form>
  );
};

export default TrainDataForm;


