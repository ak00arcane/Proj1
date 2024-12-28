import { useState } from "react";

const TaskForm = ({ task = {}, onSave }) => {
  const [title, setTitle] = useState(task.title || "");
  const [description, setDescription] = useState(task.description || "");
  const [dueDate, setDueDate] = useState(task.dueDate || "");
  const [category, setCategory] = useState(task.category || "");
  const [isCompleted, setIsCompleted] = useState(task.isCompleted || false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { ...task, title, description, dueDate, category, isCompleted };
    onSave(newTask);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg space-y-4">
      <div className="flex flex-col space-y-2 items-center">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task Description"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label className="flex items-center space-x-2">
          <span className="text-sm">Completed:</span>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={() => setIsCompleted(!isCompleted)}
            className="h-5 w-5 border rounded"
          />
        </label>
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none mx-auto">
        Save Task
      </button>
    </form>
  );
};

export default TaskForm;