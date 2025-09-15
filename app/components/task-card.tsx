"user client";
import Link from "next/link"
import clsx from "clsx"
import { Task } from "@/app/lib/types"
import { validTaskStatuses } from "@/app/lib/types"
import ProgressStatusButton from "@/app/components/progress-status-button"
import RevertStatusButton from "@/app/components/revert-status-button"
import DeleteButton from "@/app/components/delete-button";

function canRevertStatus(task: Task) {
  return task.status && validTaskStatuses.indexOf(task.status) > 0
}

function canAdvanceStatus(task: Task) {
  return task.status && validTaskStatuses.indexOf(task.status) < validTaskStatuses.length - 1
}


export default function TaskCard({ task }: { task: Task }) {
    const colStartMap = {
      "scheduled": "col-start-1",
      "in-progress": "col-start-2",
      "done": "col-start-3",
    };

    return (
      <Link href={`/tasks/${task.id}`} className="contents">
        {/* <div className={`${colStartMap[task.status]} hover:bg-sky-200 h-full bg-gray-300 p-4 rounded-md shadow-md text-black`}> */}
        <div className={clsx(colStartMap[task.status], "hover:bg-sky-200 h-full bg-gray-300 p-4 rounded-md shadow-md text-black")}>
          <DeleteButton id={task.id} />
          <h3 className="font-bold text-center">{task.title}</h3>
          <h4 className="font-bold">Status: {task.status}</h4>
          <p>Assignee: {task.assignee}</p>
          <p>Tags: {task.tags.join(", ")}</p>

          {canRevertStatus(task) && <RevertStatusButton id={task.id} />}
          {canAdvanceStatus(task) && <ProgressStatusButton id={task.id} />}

        </div>
      </Link>
  )
}
