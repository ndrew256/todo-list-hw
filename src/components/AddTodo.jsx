import React from 'react';

const AddTodo = ({ text, handleInput, handleSubmit }) => {
  return (
    <div>
      <input
        value={text}
        onChange={(e) => handleInput(e.target.value)}
        placeholder="Add new..."
      />
      <button onClick={handleSubmit}>Add todo</button>
    </div>
  );
};

export default AddTodo;
