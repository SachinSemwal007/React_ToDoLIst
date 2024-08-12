import { useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState(["Eat a Breakfast", "Running", "Study Articles"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks((t) => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((element, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className="container mx-auto mt-20 text-center px-3 sm:px-10">
            <h1 className="text-[22px] sm:text-[40px] font-bold text-black text-center mx-auto mb-8">To-Do List Application</h1>

            <div className="mb-8">
                <input
                    type="text"
                    placeholder="Enter A Task..."
                    value={newTask}
                    onChange={handleInputChange}
                    className="text-[14px] sm:text-[20px] p-2 border-2 border-gray-300 rounded-md mr-4"
                />
                <button
                    className="bg-green-600 text-white text-[14px] sm:text-[20px] font-bold py-2 px-4 rounded hover:bg-green-500"
                    onClick={addTask}
                >
                    Add
                </button>
            </div>

            <ol className="list-decimal">
                {tasks.map((task, index) => (
                    <li
                        key={index}
                        className="bg-gray-100 text-xl font-bold p-4 mb-4 border border-gray-300 rounded-md flex items-center"
                    >
                        <span className="flex-1">{task}</span>
                        <button
                            className="bg-red-500 text-white text-[14px] sm:text-[20px] py-1 px-3 rounded ml-4 hover:bg-red-400"
                            onClick={() => deleteTask(index)}
                        >
                            Delete
                        </button>
                        <button
                            className="bg-blue-500 text-white text-[14px] sm:text-[20px] py-1 px-3 rounded ml-2 hover:bg-blue-400"
                            onClick={() => moveTaskUp(index)}
                        >
                            Up
                        </button>
                        <button
                            className="bg-blue-500 text-white text-[14px] sm:text-[20px] py-1 px-3 rounded ml-2 hover:bg-blue-400"
                            onClick={() => moveTaskDown(index)}
                        >
                            Down
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ToDoList;
