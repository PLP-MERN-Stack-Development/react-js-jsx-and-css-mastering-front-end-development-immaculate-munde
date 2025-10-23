import React from 'react';
import TaskManager from '../components/TaskManager';

const Tasks = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 px-4 py-8 transition-colors duration-200">
      <TaskManager />
    </div>
  );
};

export default Tasks;
