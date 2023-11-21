import AddTodo from '@/components/shared/add-todo';
import Todo from '@/components/shared/todo';
import { getData } from '@/app/actions/todo-actions';

export default async function Home() {
  const toDoData = await getData();

  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <span className="text-3xl font-extrabold uppercase">To-do-app</span>
      <h1 className="text-3xl font-extrabold uppercase mb-5">
        Next.js 14<span className="text-orange-700 ml-2">Server Actions</span>
      </h1>

      <div className="flex justify-center flex-col items-center w-[1000px]">
        <AddTodo />
        <div className="flex flex-col gap-5 items-center justify-center mt-10 w-full">
          {toDoData.map((todo, i) => (
            <div key={i} className="w-full">
              <Todo todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
