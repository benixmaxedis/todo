import { TodoType } from '@/app/types/todoTypes';
import ChangeTodo from './change-todo';
import clsx from 'clsx';
import EditToDo from './edit-todo';
import DeleteTodo from './delete-todo';

const Todo = ({ todo }: { todo: TodoType }) => {
  return (
    <div
      className={clsx(
        'w-full flex items-center justify-between bg-white py-3 px-20 rounded-2xl',
        todo.isCompleted && 'line-through opacity-50'
      )}
    >
      <ChangeTodo todo={todo} />
      <span className="text-center font-bold uppercase">{todo.title}</span>
      <div className="flex items-center gap-5">
        <EditToDo todo={todo} />
        <DeleteTodo todo={todo} />
      </div>
    </div>
  );
};

export default Todo;
