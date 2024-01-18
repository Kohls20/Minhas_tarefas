import React from "react";
import { useHistory, useParams } from "react-router-dom";

import Button from "./Button";


const taskDetailsStyle = "bg-stone-700 my-4 mx-0 py-4 px-5 flex flex-col text-gray-100 rounded-md";

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory;

    const handleBackButtonClick = () => {
        history.goBack();
    };

    return (
        <>
            <div className={taskDetailsStyle}>
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className={taskDetailsStyle}>
                <h2 className="mb-1 text-lime-500">{params.taskTitle}</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Pariatur minima eius magnam culpa sequi explicabo.
                </p>
            </div>
        </>
    );
};

export default TaskDetails;
