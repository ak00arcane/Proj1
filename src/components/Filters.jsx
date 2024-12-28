const Filters = ({ filters, setFilters }) => {
    return (
      <div className="space-y-4 p-4 border-b mb-6">
        <div>
          <label className="block text-sm">Category</label>
          <input
            type="text"
            value={filters.category}
            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm">Status</label>
          <select
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </div>
        <div>
          <label className="block text-sm">Due Date</label>
          <input
            type="date"
            value={filters.dueDate}
            onChange={(e) => setFilters({ ...filters, dueDate: e.target.value })}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    );
  };
  
  export default Filters;
  