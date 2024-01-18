import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetails";

import "./global.css"

const App = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const { data } = await axios.get(
                "https://jsonplaceholder.cypress.io/todos?_limit=10"
            );
            setTasks(data);
        };
        fetchTasks();
    }, []);

    const handleTaskClick = (taskId) => {
        const newTasks = tasks.map((task) => {
            if (task.id === taskId)
                return { ...task, completed: !task.completed };

            return task;
        });

        setTasks(newTasks);
    };

    const handleTaskAddition = (taskTitle) => {
        const newTasks = [
            ...tasks,
            {
                title: taskTitle,
                id: uuidv4(),
                completed: false,
            },
        ];

        setTasks(newTasks);
    };

    const handleTaskDeletion = (taskId) => {
        const newTasks = tasks.filter((task) => task.id !== taskId);

        setTasks(newTasks);
    };

    return (
        <Router>
            <div className="max-w-lg min-h-72 p-8 overflow-auto my-8 mx-auto border-2 border-solid border-lime-500 rounded-xl">
                <Header />
                <Route
                    path="/"
                    exact
                    render={() => (
                        <>
                            <AddTask handleTaskAddition={handleTaskAddition} />
                            <Tasks
                                tasks={tasks}
                                handleTaskClick={handleTaskClick}
                                handleTaskDeletion={handleTaskDeletion}
                            />
                        </>
                    )}
                />
                <Route path="/:taskTitle" exact component={TaskDetails} />
            </div>
        </Router>
    );
};

export default App;
