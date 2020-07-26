import is from 'is_js';
import Notie from 'Components/shared/ui-notifier/index';
import Types from 'FSATypes/todo-new';
import { routeTo } from 'FSAActions/app';
import { call, select, put, takeLatest, all } from 'redux-saga/effects';
import { getTodoList, setTodoList } from 'Api/todo-list';

import { handleError } from './helpers';
import { trackAction } from 'FSAActions/recorder';

// Redux selectors
const getIsRecordingState = (state) => state.recorder.isRecording;
const getIsPlayingState = (state) => state.recorder.isPlaying;

/**
 * Create a To-Do List item and persist it to browser localStorage
 * @param  {Object} props
 * @param  {Object} props.payload To-Do List item props
 */
function* createItem({ payload: item = null }) {
  try {
    const isRecording = yield select(getIsRecordingState);
    const isPlaying = yield select(getIsPlayingState);

    // Fetch To-Do List items from browser localStorage
    let todoList = yield call(getTodoList);

    if (
      is.object(item) &&
      is.propertyDefined(item, 'id') &&
      is.string(item.id) &&
      is.not.empty(item.id)
    ) {
      // Adding the new To-Do item to the list
      todoList.push(item);

      // Persist To-Do List items into browser localStorage
      yield call(setTodoList, todoList);

      // If in recording status, persist action in action queue
      if (isRecording) {
        const trackActionPayload = {
          type: Types.CREATE_ITEM,
          payload: item,
        };
        yield put(trackAction(trackActionPayload));
      }

      if (!isPlaying) {
        const nMessage = `New Todo created`;
        Notie.success(nMessage);
      }

      // Eventually route back to To-Do list viewport
      if (isPlaying === false) {
        yield put(routeTo({ model: 'todo', action: 'list' }));
      }
    }
  } catch (error) {
    yield call(handleError, { error });
  }
}

// Saga watchers
function* watch_createItem() {
  yield takeLatest(Types.CREATE_ITEM, createItem);
}

// RootSaga
export default function* rootSaga() {
  yield all([watch_createItem()]);
}
