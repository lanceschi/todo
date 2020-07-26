import { combineReducers } from 'redux';

import todo_list from './todo-list';
import todo_new from './todo-new';
import todo_edit from './todo-edit';
import recorder from './recorder';

export default combineReducers({
  todo_list,
  todo_new,
  todo_edit,
  recorder,
});
