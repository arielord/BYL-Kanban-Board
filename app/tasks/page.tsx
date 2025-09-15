"use client";

import TaskCard from "@/app/components/task-card";
import { Task } from "@/app/lib/types";
import seedData from "@/app/lib/seed-data";
import { useState, createContext } from "react";
import CreateButton from "@/app/components/create-button";
import { fetchTasks } from "@/app/lib/api";
import Input from "@/app/components/input";

export const TasksContext = createContext<{
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}>({
  tasks: [],
  setTasks: () => {},
});

export default function Page() {
  seedData();
  const seededTasks: Task[] = fetchTasks();
  const [tasks, setTasks] = useState<Task[]>(seededTasks);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const filter = e.target.value;
    const filteredTasks = fetchTasks(filter);
    setTasks(filteredTasks);
  }

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      <Input handleChange={handleChange} placeholder="Search tasks..." type="text" />
      <div className="py-4 grid grid-cols-3 grid-flow-row-dense gap-4">
        <h2 className="text-center">Scheduled</h2>
        <h2 className="text-center">In Progress</h2>
        <h2 className="text-center">Done</h2>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
      <CreateButton />
    </TasksContext.Provider>
  )
}