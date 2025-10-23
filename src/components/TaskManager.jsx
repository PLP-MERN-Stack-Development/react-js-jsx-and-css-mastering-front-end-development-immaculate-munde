import React, { useState, useEffect } from 'react';
import Button from './Button';

/**
 * Custom hook for managing tasks with localStorage persistence
 */
const useLocalStorageTasks = () => {
  // Initialize state from localStorage or with empty array
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Update localStorage when tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = ({ text, startTime, endTime, date }) => {
    if (text.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text,
          startTime,
          endTime,
          date,
          completed: false,
          createdAt: new Date().toISOString(),
        },
      ]);
    }
  };

  // Toggle task completion status
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Add editTask function
  const editTask = (id, updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      )
    );
  };

  return { tasks, addTask, toggleTask, deleteTask, editTask };
};

/**
 * TaskManager component for managing tasks
 */
const TaskManager = () => {
  const { tasks, addTask, toggleTask, deleteTask, editTask } = useLocalStorageTasks();
  const [newTaskText, setNewTaskText] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [date, setDate] = useState('');
  const [filter, setFilter] = useState('all');
  const [editingTask, setEditingTask] = useState(null);

  // Filter tasks based on selected filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // 'all' filter
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTaskText.trim() && startTime && endTime && date) {
      if (editingTask) {
        editTask(editingTask.id, {
          text: newTaskText,
          startTime,
          endTime,
          date
        });
        setEditingTask(null);
      } else {
        addTask({
          text: newTaskText,
          startTime,
          endTime,
          date
        });
      }
      setNewTaskText('');
      setStartTime('');
      setEndTime('');
      setDate('');
    }
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setNewTaskText(task.text);
    setStartTime(task.startTime);
    setEndTime(task.endTime);
    setDate(task.date);
  };

  const handleCancel = () => {
    setEditingTask(null);
    setNewTaskText('');
    setStartTime('');
    setEndTime('');
    setDate('');
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 px-4 py-8">
      <div className="w-full bg-gray-800 rounded-lg shadow-xl">
        <div className="p-4 sm:p-6 lg:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            My Tasks
          </h2>

          {/* Updated Task input form */}
          <form onSubmit={handleSubmit} className="mb-6 space-y-4">
            <input
              type="text"
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
              placeholder="Add a new task..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white mb-2"
            />
            <div className="flex flex-col sm:flex-row gap-4 items-end">
              <div className="flex-1 grid grid-cols-3 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-300">Date:</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-300">From:</label>
                  <input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-300">To:</label>
                  <input
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Button type="submit" variant="primary" className="w-full sm:w-auto">
                  {editingTask ? 'Update Task' : 'Add Task'}
                </Button>
                {editingTask && (
                  <Button 
                    type="button" 
                    variant="secondary" 
                    className="w-full sm:w-auto"
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                )}
              </div>
            </div>
          </form>

          {/* Filter buttons */}
          <div className="flex flex-wrap gap-2 mb-4">
            <Button
              variant={filter === 'all' ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setFilter('all')}
              className="flex-1 sm:flex-none"
            >
              All
            </Button>
            <Button
              variant={filter === 'active' ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setFilter('active')}
              className="flex-1 sm:flex-none"
            >
              Active
            </Button>
            <Button
              variant={filter === 'completed' ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setFilter('completed')}
              className="flex-1 sm:flex-none"
            >
              Completed
            </Button>
          </div>

          {/* Updated Task list */}
          <ul className="space-y-2">
            {filteredTasks.length === 0 ? (
              <li className="text-gray-500 dark:text-gray-400 text-center py-8">
                No tasks found
              </li>
            ) : (
              filteredTasks.map((task) => (
                <li
                  key={task.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700 gap-2"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(task.id)}
                      className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <div className="flex flex-col">
                      <span className={`${task.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-900 dark:text-white'}`}>
                        {task.text}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {task.date} • {task.startTime} - {task.endTime}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => handleEdit(task)}
                      aria-label="Edit task"
                      className="w-full sm:w-auto mt-2 sm:mt-0"
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => deleteTask(task.id)}
                      aria-label="Delete task"
                      className="w-full sm:w-auto mt-2 sm:mt-0"
                    >
                      Delete
                    </Button>
                  </div>
                </li>
              ))
            )}
          </ul>

          {/* Task stats */}
          <div className="mt-6 text-sm text-gray-500 dark:text-gray-400 text-center sm:text-left">
            <p>
              {tasks.filter((task) => !task.completed).length} tasks remaining
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManager;