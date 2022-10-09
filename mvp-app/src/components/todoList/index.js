import { connect } from '../../hoc/Connector';
import ToDoListModel from './Model';
import ToDoListPresenter from './Presenter';
import { ToDoListView } from './View';

export default connect(ToDoListModel, ToDoListView, ToDoListPresenter);
