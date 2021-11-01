import React from 'react';

const TodoItems = ({ id, completed, text, removeTodo, toggleTodoComplete }) => {
  return (
    <li key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodoComplete(id)}
      />
      <span>{text}</span>
      <span onClick={() => removeTodo(id)}>&times;</span>
    </li>
  );
};

export default TodoItems;
