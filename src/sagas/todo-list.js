import Notie from 'Components/shared/ui-notifier/index';
import { call, select, put, takeLatest, all } from 'redux-saga/effects';
import Types from 'FSATypes/todo-list';
import * as Actions from 'FSAActions/todo-list';
import { getTodoList, setTodoList } from 'Api/todo-list';
import { handleError } from './helpers';
import { trackAction } from 'FSAActions/recorder';

// Redux selectors
const getIsRecordingState = (state) => state.recorder.isRecording;
const getIsPlayingState = (state) => state.recorder.isPlaying;

/**
 * Init component and fetch To-Do list items from browser localStorage
 */
function* init() {
  try {
    yield put(Actions.fetchList());
  } catch (error) {
    yield call(handleError, { error, Notie });
  }
}

/**
 * Fetch To-Do items from browser localStorage and store into reducer
 */
function* fetchList() {
  try {
    // Fetch To-Do List items from browser localStorage
    const todoList = yield call(getTodoList);

    // Set To-Do List items into reducer
    yield put(Actions.setList(todoList));

  } catch (error) {
    yield call(handleError, { error, Notie });
  }
}

/**
 * Delete To-Do item from reducer and browser localStorage
 * @param  {Object} props
 * @param  {String} props.id To-Do item id
 */
function* deleteItem({ id = null }) {
  try {
    const isRecording = yield select(getIsRecordingState);
    const isPlaying = yield select(getIsPlayingState);

    // Fetch To-Do List items from browser localStorage
    const prevList = yield call(getTodoList);

    // Filter out the item id that has to be deleted
    const list = prevList.filter((x) => x.id !== id);

    // Persist the new list into localStorage
    yield call(setTodoList, list);

    // If in recording status, persist action in action queue
    if (isRecording) {
      const trackActionPayload = {
        type: Types.DELETE_ITEM,
        id,
      };
      yield put(trackAction(trackActionPayload));
    }

    if (!isPlaying) {
      const nMessage = `Todo deleted`;
      Notie.success(nMessage);
    }

    // Fetch and set the To-Do list again
    yield put(Actions.fetchList());
  } catch (error) {
    yield call(handleError, { error, Notie });
  }
}

/**
 * Delete all To-Do item from reducer and browser localStorage
 */
function* deleteList() {
  try {
    const isRecording = yield select(getIsRecordingState);
    const isPlaying = yield select(getIsPlayingState);

    // Persist the new list into localStorage
    yield call(setTodoList, []);

    // If in recording status, persist action in action queue
    if (isRecording) {
      const trackActionPayload = {
        type: Types.DELETE_LIST,
      };
      yield put(trackAction(trackActionPayload));
    }

    if (!isPlaying) {
      const nMessage = `All todos were deleted`;
      Notie.success(nMessage);
    }

    // Fetch and set the To-Do list again
    yield put(Actions.fetchList());
  } catch (error) {
    yield call(handleError, { error, Notie });
  }
}

// Watcher functions
function* watch_init() {
  yield takeLatest(Types.INIT, init);
}

function* watch_fetchList() {
  yield takeLatest(Types.FETCH_LIST, fetchList);
}

function* watch_deleteItem() {
  yield takeLatest(Types.DELETE_ITEM, deleteItem);
}

function* watch_deleteList() {
  yield takeLatest(Types.DELETE_LIST, deleteList);
}

// RootSaga
export default function* rootSaga() {
  yield all([
    watch_init(),
    watch_fetchList(),
    watch_deleteItem(),
    watch_deleteList(),
  ]);
}
