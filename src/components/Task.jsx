import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";
import { useHistory } from "react-router-dom";


//estilização dos botões "detalhes" e "fechar" de cada task
const taskButton = 'bg-stone-700 border-none text-xl text-lime-500 cursor-pointer my-0 mx-1';


const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
    const history = useHistory();

    const handleTaskDetailsClick = () => {
        history.push(`/${task.title}`);
    };

    return (
        <div
            className="bg-stone-700 my-2 mx-0 py-4 px-5 flex justify-between items-center rounded-md text-gray-100"
            style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
        >
            <div
                className="cursor-pointer"
                onClick={() => handleTaskClick(task.id)}
            >
                {task.title}
            </div>
            <div className="flex justify-end w-1/3">
                <button
                    className={taskButton}
                    onClick={() => handleTaskDeletion(task.id)}
                >
                    <CgClose />
                </button>
                <button
                    className={taskButton}
                    onClick={handleTaskDetailsClick}
                >
                    <CgInfo />
                </button>
            </div>
        </div>
    );
};

export default Task;
