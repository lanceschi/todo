import Notie from 'Components/shared/ui-notifier/index';
import Types from 'FSATypes/recorder';
import {
  fetchList as fetchTodoList,
  deleteList as deleteTodoList,
} from 'FSAActions/todo-list';
import * as Actions from 'FSAActions/recorder';
import { call, select, put, takeLatest, all } from 'redux-saga/effects';
import { handleError, sleep } from './helpers';
import { getActionList, setActionList } from 'Api/recorder-action-list';
import * as Api from 'Api/recorder-is-recording';

// Redux selectors
const getRecordedActions = (state) => state.recorder.actions;

/**
 * Init reducer and fetch props from browser localStorage
 */
function* init() {
  try {
    yield put(Actions.fetchActions());
    yield put(Actions.fetchIsRecording());
  } catch (error) {
    yield call(handleError, { error });
  }
}

/**
 * Fetch action list from browser localStorage and store into reducer
 */
function* fetchActionList() {
  try {
    // Fetch persisted action list queue from browser localStorage
    const list = yield call(getActionList);

    // Set action list queue into reducer
    yield put(Actions.setActions(list));

    // Set isEmpty flag in reducer
    const isEmpty = list.length > 0 ? false : true;
    yield put(Actions.setIsEmpty(isEmpty));
  } catch (error) {
    yield call(handleError, { error });
  }
}

/**
 * Clear and reset queued actions and flags
 */
function* resetRecorder() {
  try {
    // Stop recording activity
    yield put(Actions.updateIsRecording(false));

    // Reset recorded action list queue
    yield put(Actions.emptyActionQueue());
  } catch (error) {
    yield call(handleError, { error });
  }
}

/**
 * Remove all stored actions from reducer and localStorage
 */
function* deleteActionList() {
  try {
    const nextList = [];

    // Reset action list in reducer
    yield put(Actions.setActions(nextList));

    // Persist the empty action list into localStorage
    yield call(setActionList, nextList);

    // Set isEmpty flag to false in reducer
    yield put(Actions.setIsEmpty(true));

    const nMessage = `Recording deleted`;
    Notie.success(nMessage);
  } catch (error) {
    yield call(handleError, { error });
  }
}

/**
 * Fetch isRecording value from browser localStorage and store into reducer
 */
function* fetchIsRecordingStatus() {
  try {
    // Fetch persisted isRecording value from browser localStorage
    const isRecording = yield call(Api.getIsRecoding);

    // Set isRecording value into reducer
    yield put(Actions.setIsRecording(isRecording));
  } catch (error) {
    yield call(handleError, { error });
  }
}

/**
 * Persist isRecording new value into browser localStorage and reducer
 */
function* updateIsRecordingStatus({ payload: isRecording = false }) {
  try {
    if (isRecording === true) {
      // Delete all the To-Do items from reducer and localStorage
      yield put(deleteTodoList());

      // Reset recorded action list queue
      yield put(Actions.emptyActionQueue());
    }

    // Set isRecording value into reducer
    yield put(Actions.setIsRecording(isRecording));

    // Persist isRecording value into localStorage
    yield call(Api.setIsRecording, isRecording);

    const nMessage =
      isRecording === true ? 'Recording started' : 'Recording finished';
    Notie.success(nMessage);
  } catch (error) {
    yield call(handleError, { error });
  }
}

/**
 * Track and persist user action in recorder action queue bucket
 * @param  {Object} props
 * @param  {Object} props.payload Action details props
 */
function* trackAction({ payload = null }) {
  try {
    const prevList = yield select(getRecordedActions);
    let list = prevList.slice();

    list.push(payload);

    // Set action list in reducer
    yield put(Actions.setActions(list));

    // Persist the new list into localStorage
    yield call(setActionList, list);

    // Set isEmpty flag in reducer
    const isEmpty = list.length > 0 ? false : true;
    yield put(Actions.setIsEmpty(isEmpty));
  } catch (error) {
    yield call(handleError, { error });
  }
}

/**
 * Re-play recorded actions. Clear To-Do list beforehands
 */
function* play() {
  try {
    // Retrieve the recorded actions
    const list = yield select(getRecordedActions);

    const nMessage = `Playing started`;
    Notie.success(nMessage);

    // Set isPlaying flag to true
    yield put(Actions.setIsPlaying(true));

    // Delete all the To-Do items from reducer and localStorage
    yield put(deleteTodoList());
    yield call(sleep, 1000);

    // Iterate stored actions from queue
    for (const action of list) {
      // Dispatch stored action
      yield put(action);

      yield call(sleep, 100);
      yield put(fetchTodoList());
      yield call(sleep, 900);
    }

    // Set isPlaying flag to false
    yield put(Actions.setIsPlaying(false));
  } catch (error) {
    yield call(handleError, { error });
  }
}

// Watcher functions
function* watch_init() {
  yield takeLatest(Types.INIT, init);
}

function* watch_fetchIsRecordingStatus() {
  yield takeLatest(Types.FETCH_IS_RECORDING, fetchIsRecordingStatus);
}

function* watch_updateIsRecordingStatus() {
  yield takeLatest(Types.UPDATE_IS_RECORDING, updateIsRecordingStatus);
}

function* watch_fetchActionList() {
  yield takeLatest(Types.FETCH_ACTION_LIST, fetchActionList);
}

function* watch_resetRecorder() {
  yield takeLatest(Types.RESET_RECORDER, resetRecorder);
}

function* watch_deleteActionList() {
  yield takeLatest(Types.EMPTY_ACTION_QUEUE, deleteActionList);
}

function* watch_trackAction() {
  yield takeLatest(Types.TRACK_ACTION, trackAction);
}

function* watch_play() {
  yield takeLatest(Types.PLAY, play);
}

// RootSaga
export default function* rootSaga() {
  yield all([
    watch_init(),
    watch_fetchActionList(),
    watch_fetchIsRecordingStatus(),
    watch_updateIsRecordingStatus(),
    watch_resetRecorder(),
    watch_deleteActionList(),
    watch_trackAction(),
    watch_play(),
  ]);
}
