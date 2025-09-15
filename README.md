# BYL Kanban Board

## Setup Instructions

First install all dependencies:
```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

or

visit https://byl-kanban-board.vercel.app/tasks

## Architecture Overview
Simplicity was the main goal for this project. Tech stack is Typescript/React/TailwindCSS/Next.js.
Next was primarily used for routing, core logic in typescript, styling with Tailwind, and React for re-usable componenets.

To keep things simple we used React Context for global state.
Without an actual backend, we're using localStorage API as our persistent data layer.

Routing:
```/tasks``` for showing all our tasks (kanban board)
```/tasks/:id``` for showing a specific task and all it's details
```/tasks/:id/edit``` editing a specific tasks
```/tasks/new``` to create a new task
all in the spirit for RESTful-like api.

Components:
Aimed to be as reusable as they could be in this project. Goal was to avoid having duplicate Tailwind styles, to respec tthe DRY principle, but also to have consistent styling.
Component compisition was the underlying philisophy. Small components that build to something greater.

Data flow:
Tasks were part of the global state. Tha main feature is the board of tasks, so any updates to tasks should re-render the board. Tasks can only be updated via user interation.
Backend as the source of truth, fetched task whenever possible using the id from the router. Local state managed with useState when necessary such as updating tasks properties without saving the changes.

## Accessibility & Performance Notes
As far as accessibility I really wanted to make sure I was using semantic html. Important things such as the title of a task is a header, anything that is clickable should be a button. Ensured everything had good contrast as well.

As far as performance, I really wanted to make sure to offload as much as I could to the "server". Fetching and filtering were all done in the api.ts file. Heavy lifting should be done on the backend in my opinion, and something like TanstackQuery could help cache and prevent sending unnecessary network request which is what I would have used if we were reaching out to an actual server. Avoided prop drilling as best as I could.

## Testing Approach
All my testing was done manually, but here are things that were top of mind while working through this project:

1. Task creation
2. Task deletion
3. Filtering tasks
4. Editing tasks
5. Full view of task
6. URL navigation
7. Moving tasks between columns
8. Friendly enough mobile view
9. Data persistence
10. Data easily accessible

## Time Spent
4hrs

## If I Had More Time
* Persist filters
* Better support for tags
  * Click tag to filter
  * Display tags more aesthetically
* Add some tests
* Ask a designer for their input
