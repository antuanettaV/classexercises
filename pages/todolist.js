import React from 'react';
import { TodoProvider } from '../context/TodoContext';
import TodoList from '../components/TodoList';

const TodoPage = () => {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  );
};

export default TodoPage;
