import React from 'react';
import TodoItems from './TodoItems';

const TodoList = ({ todos, removeTodo, toggleTodoComplete }) => {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <TodoItems
            removeTodo={removeTodo}
            toggleTodoComplete={toggleTodoComplete}
            key={todo.id}
            {...todo}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
