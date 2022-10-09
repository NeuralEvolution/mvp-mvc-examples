import { useState } from 'react';
import ToDoListModel from './Model';
import { ToDoListView } from './View';

const ToDoList = (props) => {
  const [model, setModel] = useState(new ToDoListModel());

  const addNewItem = (newItem) => {
    const oldModel = { ...model };
    oldModel.toDoList.push(newItem);
    setModel({ ...oldModel });
  };

  return <ToDoListView model={model} handleAddNewItem={addNewItem} />;
};

export { ToDoList };
