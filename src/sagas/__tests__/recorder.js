import Notie from 'notie';
import { expectSaga, next } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';

import * as Actions from 'FSAActions/recorder';
import { getActionList, setActionList } from 'Api/recorder-action-list';
import * as ApiIsRecording from 'Api/recorder-is-recording';
import {
  deleteList as deleteTodoList,
  fetchList as fetchTodoList,
} from 'FSAActions/todo-list';

import rootSaga from 'Sagas/recorder';
import reducer from 'Reducers';

import mockStates from './mock-data/states';
import mockPayloads from './mock-data/payloads';

import { sleep, handleError } from '../helpers';

describe('Recorder - Redux-Saga Test', () => {
  it('Expect to init and fetch actions and isRecording props', () => {
    const customState = JSON.parse(JSON.stringify(mockStates.DEFAULT));

    return expectSaga(rootSaga)
      .withReducer(reducer, customState)
      .dispatch(Actions.init())
      .put(Actions.fetchActions())
      .put(Actions.fetchIsRecording())
      .silentRun();
  });

  it('Expect to fetch actions from localStorage', () => {
    const customState = JSON.parse(JSON.stringify(mockStates.DEFAULT));
    const payload = JSON.parse(JSON.stringify(mockPayloads.FETCHED_TODOS));
    const testDataPayload = JSON.parse(
      JSON.stringify(mockPayloads.FETCHED_TODOS)
    );
    const isEmpty = payload.length > 0 ? false : true;

    return expectSaga(rootSaga)
      .withReducer(reducer, customState)
      .provide([[matchers.call.fn(getActionList), payload]])
      .dispatch(Actions.fetchActions())
      .put(Actions.setActions(testDataPayload))
      .put(Actions.setIsEmpty(isEmpty))
      .silentRun();
  });

  it('Expect to FAIL fetching actions from localStorage', () => {
    const customState = JSON.parse(JSON.stringify(mockStates.DEFAULT));
    const errMessage = 'Action list fetch failed';
    const error = new Error(errMessage);
    const handleErrorProps = {
      error: new Error(errMessage),
    };


    return expectSaga(rootSaga)
      .withReducer(reducer, customState)
      .provide([[matchers.call.fn(getActionList), throwError(error)]])
      .dispatch(Actions.fetchActions())
      .call(handleError, handleErrorProps)
      .silentRun();
  });  

  it('Expect to reset queued actions and flags', () => {
    const customState = JSON.parse(JSON.stringify(mockStates.DEFAULT));

    return expectSaga(rootSaga)
      .withReducer(reducer, customState)
      .dispatch(Actions.resetRecorder())
      .put(Actions.updateIsRecording(false))
      .put(Actions.emptyActionQueue())
      .silentRun();
  });

  it('Expect to delete queued actions', () => {
    const customState = JSON.parse(JSON.stringify(mockStates.DEFAULT));

    return expectSaga(rootSaga)
      .withReducer(reducer, customState)
      .dispatch(Actions.emptyActionQueue())
      .put(Actions.setActions([]))
      .call(setActionList, [])
      .put(Actions.setIsEmpty(true))
      .silentRun();
  });

  it('Expect to fetch isRecording value from localStorage', () => {
    const customState = JSON.parse(JSON.stringify(mockStates.DEFAULT));
    const payload = true;
    const testDataPayload = true;

    return expectSaga(rootSaga)
      .withReducer(reducer, customState)
      .provide([[matchers.call.fn(ApiIsRecording.getIsRecoding), payload]])
      .dispatch(Actions.fetchIsRecording())
      .put(Actions.setIsRecording(testDataPayload))
      .silentRun();
  });

  it('Expect to update isRecording', () => {
    const customState = JSON.parse(JSON.stringify(mockStates.DEFAULT));
    const payload = true;
    const testDataPayload = true;

    return expectSaga(rootSaga)
      .withReducer(reducer, customState)
      .provide([[matchers.call.fn(ApiIsRecording.setIsRecoding), payload]])
      .dispatch(Actions.updateIsRecording(payload))
      .put(Actions.setIsRecording(testDataPayload))
      .silentRun();
  });

  it('Expect to persist recorded action and update isEmpty flag', () => {
    const customState = JSON.parse(JSON.stringify(mockStates.DEFAULT));
    const payload = JSON.parse(JSON.stringify(mockPayloads.TRACKED_TODO));
    const testDataPayload = [payload];
    const isEmpty = testDataPayload.length > 0 ? false : true;

    return expectSaga(rootSaga)
      .withReducer(reducer, customState)
      .provide([[matchers.call.fn(setActionList), testDataPayload]])
      .dispatch(Actions.trackAction(payload))
      .put(Actions.setActions(testDataPayload))
      .call(setActionList, testDataPayload)
      .put(Actions.setIsEmpty(isEmpty))
      .silentRun();
  });

  it('Expect to play back recorded actions', () => {
    const customState = JSON.parse(JSON.stringify(mockStates.SINGLE_ACTION));
    const action = JSON.parse(JSON.stringify(mockPayloads.SINGLE_ACTION));

    return expectSaga(rootSaga)
      .withReducer(reducer, customState)
      .provide([[matchers.call.fn(sleep), null]])
      .dispatch(Actions.play())
      .put(Actions.setIsPlaying(true))
      .put(deleteTodoList())
      .call(sleep, 1000)
      .put(action)
      .call(sleep, 100)
      .put(fetchTodoList())
      .call(sleep, 900)
      .put(Actions.setIsPlaying(false))
      .silentRun();
  });
});
