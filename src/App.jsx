import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Filters from "./components/Filters";
import ProgressOverview from "./components/ProgressOverview";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filters, setFilters] = useState({ category: "", status: "all", dueDate: "" });

  const handleSaveTask = (newTask) => {
    if (newTask.id) {
      setTasks(tasks.map(task => task.id === newTask.id ? newTask : task));
    } else {
      setTasks([...tasks, { ...newTask, id: Date.now() }]);
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleEditTask = (id) => {
    const taskToEdit = tasks.find(task => task.id === id);
    // Optionally set the form values to be edited (this part can be enhanced)
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Task Management Dashboard</h1>
      <ProgressOverview tasks={tasks} />
      <Filters filters={filters} setFilters={setFilters} />
      <TaskList tasks={tasks} filters={filters} onDelete={handleDeleteTask} onEdit={handleEditTask} />
      <TaskForm onSave={handleSaveTask} />
    </div>
  );
};

export default App;
