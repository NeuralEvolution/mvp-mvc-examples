import React, { useState } from 'react';

const ToDoListView = (props) => {
  const data = props.toDoListData;
  const [inputText, setInputText] = useState('');

  return (
    <div>
      <div>
        <label>Enter new item</label>
        <input type="text" onChange={(e) => setInputText(e.target.value)} value={inputText} />
        <button onClick={() => props.handleAddNewItem(inputText)}>Add</button>
      </div>
      {data.toDoList && (
        <ul>
          {data.toDoList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { ToDoListView };
