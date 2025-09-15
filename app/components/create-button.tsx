import Link from "next/link";

export default function CreateButton() {
  return (
    <Link href="/tasks/new">
      <button className="bg-blue-500 text-white px-2 py-1 rounded mt-2 hover:bg-blue-600 fixed bottom-4 right-12">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
    </Link>
  )
}