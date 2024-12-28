import TaskItem from "./TaskItem";

const TaskList = ({ tasks, filters, onDelete, onEdit }) => {
  const filteredTasks = tasks.filter(task => {
    if (filters.category && task.category !== filters.category) return false;
    if (filters.status !== 'all' && task.isCompleted !== (filters.status === 'completed')) return false;
    if (filters.dueDate && task.dueDate !== filters.dueDate) return false;
    return true;
  });

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Your Tasks</h2>
      <ul className="space-y-4">
        {filteredTasks.map(task => (
          <TaskItem key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
