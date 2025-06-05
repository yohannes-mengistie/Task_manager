// app/tasks/page.tsx

import { useState } from "react";
import type { FilterType, Task } from "./components/ui/types";
import { Card } from "./components/card";
import { TaskForm } from "./components/taskform";
import { TaskFilter } from "./components/taskfilter";
import { TaskList } from "./components/ui/tasklist";

export default function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Buy groceries', completed: false },
    { id: 2, title: 'Read a book', completed: true },
    { id: 3, title: 'Exercise', completed: false },
  ]);

  const [filter, setFilter] = useState<FilterType>('all');

  const addTask = (title: string) => {
    const task = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([task, ...tasks]);
  };

  const toggleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          Task Manager
        </h1>
        <Card className="p-4 mb-4">
          <TaskForm onAddTask={addTask} />
        </Card>
        <Card className="p-4 mb-4">
          <TaskFilter filter={filter} setFilter={setFilter} />
        </Card>
        <Card className="p-4">
          <TaskList
            tasks={filteredTasks}
            onToggleComplete={toggleComplete}
            onDelete={deleteTask}
          />
        </Card>
      </div>
    </div>
  );
}