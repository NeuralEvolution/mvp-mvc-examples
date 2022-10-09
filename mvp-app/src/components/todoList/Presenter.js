class ToDoListPresenter {
  constructor(model, setModel) {
    this.toDoListData = model;
    this.setModel = setModel;
    this.handleAddNewItem = this.AddNewItem.bind(this);
  }

  AddNewItem(newItem) {
    const oldModel = { ...this.toDoListData };
    oldModel.toDoList.push(newItem);
    this.setModel({ ...oldModel });
  }
}

export default ToDoListPresenter;
