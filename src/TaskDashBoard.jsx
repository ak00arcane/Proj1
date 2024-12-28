import React, { useState, useEffect } from 'react';

function TaskDashboard() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filters, setFilters] = useState({
    dueDate: '',
    category: '',
    status: '',
  });

  useEffect(() => {
    // Fetch tasks from local storage or API
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    // Save tasks to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const newTaskObj = {
        id: Date.now(),
        title: newTask,
        category: selectedCategory,
        dueDate: '', // Initialize with empty due date
        completed: false,
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
      setSelectedCategory('');
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredTasks = tasks.filter((task) => {
    return (
      (!filters.dueDate || task.dueDate === filters.dueDate) &&
      (!filters.category || task.category === filters.category) &&
      (filters.status === '' ||
        (filters.status === 'completed' && task.completed) ||
        (filters.status === 'pending' && !task.completed))
    );
  });

  return (
    <div className="container mx-auto p-4 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-4 text-center">Task Management Dashboard</h1>

      {/* Progress Overview */}
      <div className="bg-gray-800 p-4 rounded mb-4">
        <h2 className="text-lg font-semibold">Progress Overview</h2>
        <p>Completed: {completedTasks.length}/{tasks.length} tasks</p>
        <p>Completion rate: {completionRate}%</p>
      </div>

      {/* Add Task Section */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="New Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border border-gray-600 p-2 rounded"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-600 p-2 rounded ml-2"
        >
          <option value="">Select Category</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Other">Other</option>
        </select>
        <button
          onClick={handleAddTask}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
        >
          Add
        </button>
      </div>

      {/* Filters Section */}
      <div className="mb-4">
        <label htmlFor="dueDate" className="mr-2">Due Date:</label>
        <input
          type="date"
          id="dueDate"
          name="dueDate"
          value={filters.dueDate}
          onChange={handleFilterChange}
          className="border border-gray-600 p-2 rounded ml-2"
        />

        <label htmlFor="category" className="mr-2">Category:</label>
        <select
          id="category"
          name="category"
          value={filters.category}
          onChange={handleFilterChange}
          className="border border-gray-600 p-2 rounded ml-2"
        >
          <option value="">All</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="status" className="mr-2">Status:</label>
        <select
          id="status"
          name="status"
          value={filters.status}
          onChange={handleFilterChange}
          className="border border-gray-600 p-2 rounded ml-2"
        >
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {/* Task List */}
      <ul className="list-none">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className={`flex items-center justify-between mb-2 ${
              task.completed ? 'line-through text-gray-500' : 'text-white'
            }`}
          >
            <span>{task.title}</span>
            <span className="text-gray-400">
              {task.category ? `(${task.category})` : ''}
            </span>
            <div>
              <button
                onClick={() => handleToggleComplete(task.id)}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2"
              >
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskDashboard;