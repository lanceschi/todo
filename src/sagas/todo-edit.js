import is from 'is_js';
import Notie from 'Components/shared/ui-notifier/index';
import Types from 'FSATypes/todo-edit';
import { call, select, put, takeLatest, all } from 'redux-saga/effects';
import * as Actions from 'FSAActions/todo-edit';
import { routeTo } from 'FSAActions/app';
import { getTodoList, setTodoList } from 'Api/todo-list';

import { handleError } from './helpers';
import { trackAction } from 'FSAActions/recorder';

// Redux selectors
const getTodoItem = (state) => state.todo_edit.item;
const getIsRecordingState = (state) => state.recorder.isRecording;
const getIsPlayingState = (state) => state.recorder.isPlaying;

/**
 * Init component and fetch To-Do item from browser localStorage
 * @param  {Object} props
 * @param  {String} props.id To-Do item id
 */
function* init({ id = null }) {
  try {
    // Trigger saga for item loading
    yield put(Actions.fetchItem(id));
  } catch (error) {
    yield call(handleError, { error });
  }
}

/**
 * Fetch To-Do item from reducer and browser localStorage
 * @param  {Object} props
 * @param  {String} props.id To-Do item id
 */
function* fetchItem({ id = null }) {
  try {
    // Fetch To-Do List items from browser localStorage
    const todoList = yield call(getTodoList);

    // Find the specified item in the haystack
    const item = todoList.find((x) => x.id === id);

    if (!item) {
      throw new Error('To-Do item not found');
    }

    // Set To-Do List items into reducer
    yield put(Actions.setItem(item));

    // Set reducer flag props
    yield put(Actions.setIsLoading(false));
    yield put(Actions.setHasFetchFailed(false));
    yield put(Actions.setHasFetchedOnce(true));
  } catch (error) {
    yield put(Actions.setIsLoading(false));
    yield put(Actions.setHasFetchFailed(true));
    yield put(Actions.setHasFetchedOnce(false));

    yield call(handleError, { error });
  }
}

/**
 * Update To-Do List item and persist it to browser localStorage
 * @param  {Object} props
 * @param  {Object} props.payload To-Do List item props
 */
function* updateItem({ payload: item = null }) {
  try {
    const isRecording = yield select(getIsRecordingState);
    const isPlaying = yield select(getIsPlayingState);
    const prevItem = yield select(getTodoItem);

    // Fetch To-Do List items from browser localStorage
    let todoList = yield call(getTodoList);

    if (is.not.propertyDefined(item, 'id')) {
      item.id = prevItem.id;
    }

    if (is.not.propertyDefined(item, 'created_at')) {
      item.created_at = prevItem.created_at;
    }

    if (
      is.object(item) &&
      is.propertyDefined(item, 'id') &&
      is.string(item.id) &&
      is.not.empty(item.id)
    ) {
      const matchedItemIdx = todoList.findIndex((x) => x.id === item.id);
      if (matchedItemIdx > -1) {
        todoList[matchedItemIdx] = item;

        // If in recording state, persist action in action queue
        if (isRecording) {
          const trackActionPayload = {
            type: Types.UPDATE_ITEM,
            payload: item,
          };
          yield put(trackAction(trackActionPayload));
        }

        // Persist To-Do List items into browser localStorage
        yield call(setTodoList, todoList);

        if (!isPlaying) {
          const nMessage = `Todo was updated`;
          Notie.success(nMessage);
        }

        // Eventually route back to To-Do list viewport
        if (isPlaying === false) {
          yield put(routeTo({ model: 'todo', action: 'list' }));
        }
      }
    }
  } catch (error) {
    yield call(handleError, { error });
  }
}

// Watcher functions
function* watch_init() {
  yield takeLatest(Types.INIT, init);
}

function* watch_fetchItem() {
  yield takeLatest(Types.FETCH_ITEM, fetchItem);
}

function* watch_updateItem() {
  yield takeLatest(Types.UPDATE_ITEM, updateItem);
}

// RootSaga
export default function* rootSaga() {
  yield all([watch_init(), watch_fetchItem(), watch_updateItem()]);
}
