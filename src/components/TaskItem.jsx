const TaskItem = ({ task, onDelete, onEdit }) => {
    const { id, title, description, dueDate, category, isCompleted } = task;
  
    return (
      <li className={`p-4 border rounded-lg ${isCompleted ? 'bg-green-100' : 'bg-red-100'} shadow-md`}>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-xs text-gray-500">Due Date: {dueDate}</p>
        <p className="text-xs text-gray-500">Category: {category}</p>
        <p className="text-xs font-semibold text-gray-700">Status: {isCompleted ? 'Completed' : 'Incomplete'}</p>
        <div className="mt-2 flex space-x-2">
          <button onClick={() => onEdit(id)} className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">Edit</button>
          <button onClick={() => onDelete(id)} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">Delete</button>
        </div>
      </li>
    );
  };
  
  export default TaskItem;
  