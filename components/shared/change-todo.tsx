import { TodoType } from '@/app/types/todoTypes';
import Button from '../ui/button';
import Form from '../ui/form';
import Input from '../ui/input';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { changeStatus } from '@/app/actions/todo-actions';

const ChangeTodo = ({ todo }: { todo: TodoType }) => {
  return (
    <Form action={changeStatus}>
      <Input name="inputId" value={todo.id} type="hidden" />
      <Button
        actionButton
        type="submit"
        text={<AiOutlineCheckCircle />}
      ></Button>
    </Form>
  );
};

export default ChangeTodo;
