import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  todos: [],
};

const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, { id: Date.now(), text: action.text, completed: false }] };
    case REMOVE_TODO:
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.id) };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    default:
      return state;
  }
};

const TodoContext = createContext();

export const useTodo = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (text) => dispatch({ type: ADD_TODO, text });
  const removeTodo = (id) => dispatch({ type: REMOVE_TODO, id });
  const toggleTodo = (id) => dispatch({ type: TOGGLE_TODO, id });

  return (
    <TodoContext.Provider value={{ todos: state.todos, addTodo, removeTodo, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
