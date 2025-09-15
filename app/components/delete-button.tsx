"user client";

import { useContext } from "react"
import { fetchTask, deleteTask } from "@/app/lib/api"
import { TasksContext } from "@/app/components/tasks-board"

export default function DeleteButton(props: { id: string }) {
  const { setTasks } = useContext(TasksContext);
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      e.preventDefault();
      const task = fetchTask(props.id);
      if (task) {
        const updatedTasks = deleteTask(task.id);
        setTasks(updatedTasks);
      }
    }

  return (
    <button onClick={handleClick} className="float-right bg-transparent text-white rounded mt-2 hover:bg-red-600">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </button>
  )
}
