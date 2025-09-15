"user client";
import { fetchTask, updateTask } from "@/app/lib/api"
import { validTaskStatuses } from "@/app/lib/types"
import { useContext } from "react"
import { TasksContext } from "@/app/tasks/page"

export default function ProgressStatusButton(props: {id: string}) {
  const {setTasks} = useContext(TasksContext);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    let task = fetchTask(props.id);
    if (task && validTaskStatuses.indexOf(task.status) < validTaskStatuses.length - 1) {
      const updatedTasks = updateTask(task.id, { status: validTaskStatuses[validTaskStatuses.indexOf(task.status) + 1] });
      setTasks(updatedTasks);
    }
  }

  return (
    <button onClick={handleClick} className="float-right bg-blue-500 text-white px-2 py-1 rounded mt-2 hover:bg-blue-600">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
      </svg>
    </button>
  )
}