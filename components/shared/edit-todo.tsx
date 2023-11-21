'use client';
import { useState } from 'react';
import { BiEdit } from 'react-icons/bi';

import Form from '../ui/form';
import Input from '../ui/input';
import Button from '../ui/button';
import { edit } from '@/app/actions/todo-actions';
import { TodoType } from '@/app/types/todoTypes';

const EditToDo = ({ todo }: { todo: TodoType }) => {
  const [editTodo, setEditTodo] = useState(false);

  const handleEdit = () => {
    if (todo.isCompleted) return;
    setEditTodo(!editTodo);
  };

  return (
    <div className="flex gap-5 items-center">
      <Button
        type="button"
        text={<BiEdit />}
        onClick={handleEdit}
        actionButton
      />
      {editTodo && (
        <Form
          action={edit}
          onSubmit={() => {
            setEditTodo(false);
          }}
        >
          <Input name="inputId" value={todo.id} type="hidden" />
          <div className="flex justify-center">
            <Input type="text" name="newTitle" placeholder="Edit Todo..." />
            <Button type="submit" text="Update" />
          </div>
        </Form>
      )}
    </div>
  );
};

export default EditToDo;
