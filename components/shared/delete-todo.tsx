import { TodoType } from '@/app/types/todoTypes';
import Button from '../ui/button';
import Form from '../ui/form';
import { deleteTodo } from '@/app/actions/todo-actions';
import Input from '../ui/input';
import { BsTrashFill } from 'react-icons/bs';

const DeleteTodo = ({ todo }: { todo: TodoType }) => {
  return (
    <Form action={deleteTodo}>
      <Input name="inputId" type="hidden" value={todo.id} />
      <Button type="submit" actionButton text={<BsTrashFill />} />
    </Form>
  );
};

export default DeleteTodo;
