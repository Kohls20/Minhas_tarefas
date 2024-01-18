import React, { useState } from "react";



import Button from "./Button";

const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData);
    setInputData("");
  };

  return (
    <div className="my-4 mx-0 flex w-full">
      <input
        onChange={handleInputChange}
        value={inputData}
        className="h-10 py-3 px-0 rounded-md border-none flex basis-2/3 bg-stone-700 text-stone-300 text-base"
        type="text"
      />
      <div className="flex ml-3">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;
