const ProgressOverview = ({ tasks }) => {
    const completedTasks = tasks.filter(task => task.isCompleted).length;
    const totalTasks = tasks.length;
    const completionRate = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;
  
    return (
      <div className="p-4 bg-gray-50 border rounded-md mb-6">
        <h3 className="text-xl font-semibold mb-2">Progress Overview</h3>
        <p className="text-sm">Completed: {completedTasks} / {totalTasks} tasks</p>
        <p className="text-sm">Completion rate: {completionRate.toFixed(2)}%</p>
      </div>
    );
  };
  
  export default ProgressOverview;
  