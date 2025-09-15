"user client";

import { useContext } from "react"
import { fetchTask, updateTask } from "@/app/lib/api"
import { validTaskStatuses } from "@/app/lib/types"
import { TasksContext } from "@/app/components/tasks-board"

export default function RevertStatusButton(props: { id: string }) {
  const { setTasks } = useContext(TasksContext);
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      e.preventDefault();
      const task = fetchTask(props.id);
      if (task && validTaskStatuses.indexOf(task.status) > 0) {
        const updatedTasks = updateTask(task.id, { status: validTaskStatuses[validTaskStatuses.indexOf(task.status) - 1] });
        setTasks(updatedTasks);
      }
    }

  return (
    <button onClick={handleClick} className="bg-blue-500 text-white px-2 py-1 rounded mt-2 hover:bg-blue-600">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
      </svg>
    </button>
  )
}
