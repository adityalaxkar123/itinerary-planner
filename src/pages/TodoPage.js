import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const TodoPage = () => {
  const [tasks, setTasks] = useState([
    { id: '1', content: 'Book flights to India', done: false },
    { id: '2', content: 'Reserve hotel in Delhi', done: false },
    { id: '3', content: 'Pack bags for the trip', done: false },
    { id: '4', content: 'Finalize trip itinerary', done: false },
  ]);

  const [newTask, setNewTask] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editTaskId, setEditTaskId] = useState('');
  const [editTaskContent, setEditTaskContent] = useState('');

  // Handle task completion (checkbox toggle)
  const handleTaskCompletion = (taskId) => {
    setTasks(tasks.map((task) =>
      task.id === taskId ? { ...task, done: !task.done } : task
    ));
  };

  // Handle drag-and-drop task reordering
  const onDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;

    // Reordering the tasks array
    const reorderedTasks = Array.from(tasks);
    const [movedTask] = reorderedTasks.splice(source.index, 1);
    reorderedTasks.splice(destination.index, 0, movedTask);

    // Update state with new task order
    setTasks(reorderedTasks);
  };

  // Handle adding a new task
  const handleAddTask = () => {
    if (newTask.trim()) {
      const newTaskObject = {
        id: (tasks.length + 1).toString(),
        content: newTask,
        done: false
      };
      setTasks([...tasks, newTaskObject]);
      setNewTask('');
    }
  };

  // Handle editing a task
  const handleEditTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    setEditTaskId(taskId);
    setEditTaskContent(taskToEdit.content);
    setIsEditing(true);
  };

  // Handle saving the edited task
  const handleSaveEdit = () => {
    if (editTaskContent.trim()) {
      setTasks(tasks.map((task) =>
        task.id === editTaskId ? { ...task, content: editTaskContent } : task
      ));
      setIsEditing(false);
      setEditTaskContent('');
      setEditTaskId('');
    }
  };

  // Handle deleting a task
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 via-teal-400 to-lime-300 py-12">
      <div className="max-w-4xl mx-auto px-8">
        <h1 className="text-4xl font-extrabold text-center text-white mb-8">
          Your Travel To-Do List
        </h1>

        {/* Input to add new tasks */}
        <div className="mb-6 flex space-x-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add new task"
            className="p-2 w-full rounded-md shadow-md"
          />
          <button
            onClick={handleAddTask}
            className="py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Add Task
          </button>
        </div>

        {/* Editing Task */}
        {isEditing && (
          <div className="mb-6 flex space-x-4">
            <input
              type="text"
              value={editTaskContent}
              onChange={(e) => setEditTaskContent(e.target.value)}
              className="p-2 w-full rounded-md shadow-md"
            />
            <button
              onClick={handleSaveEdit}
              className="py-2 px-4 bg-teal-600 text-white rounded-md hover:bg-teal-700"
            >
              Save Edit
            </button>
          </div>
        )}

        {/* Task List with Drag and Drop */}
        <DragDropContext onDragEnd={onDragEnd}>
          {/* Ensure Droppable uses a function-as-child pattern */}
          <Droppable droppableId="task-list">
            {(provided) => (
              <ul
                className="space-y-4"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {tasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="bg-white rounded-xl shadow-lg p-6 space-y-4 flex items-center justify-between transition-transform transform hover:scale-105 hover:shadow-2xl"
                      >
                        {/* Checkbox for completion */}
                        <input
                          type="checkbox"
                          checked={task.done}
                          onChange={() => handleTaskCompletion(task.id)}
                          className="form-checkbox h-5 w-5 text-teal-600"
                        />
                        <span className={task.done ? 'line-through text-gray-500' : 'text-gray-700'}>
                          {task.content}
                        </span>

                        {/* Edit and Delete buttons */}
                        <div className="flex space-x-4">
                          <button
                            onClick={() => handleEditTask(task.id)}
                            className="text-teal-600 hover:text-teal-800"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteTask(task.id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            Delete
                          </button>
                        </div>
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder} {/* Ensure placeholder is rendered */}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default TodoPage;
