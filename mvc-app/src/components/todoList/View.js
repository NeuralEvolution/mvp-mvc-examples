import React, { useState } from 'react';

const ToDoListView = (props) => {
  const { model, handleAddNewItem } = props;
  const toDoList = model.toDoList;
  const [inputText, setInputText] = useState('');

  return (
    <div>
      <div>
        <label>Enter new item</label>
        <input type="text" onChange={(e) => setInputText(e.target.value)} value={inputText} />
        <button onClick={() => handleAddNewItem(inputText)}>Add</button>
      </div>
      {toDoList && (
        <ul>
          {toDoList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { ToDoListView };
