import Types from 'FSATypes/recorder';

// Start component setup actions (redux-saga)
export const init = () => {
  return {
    type: Types.INIT,
  };
};

/**
 * Set isRecording prop in the reducer
 * @param  {Boolean} payload
 */
export const setIsRecording = (payload) => {
  return {
    type: Types.SET_IS_RECORDING,
    payload,
  };
};

/**
 * Set isPlaying prop in the reducer
 * @param  {Boolean} payload
 */
export const setIsPlaying = (payload) => {
  return {
    type: Types.SET_IS_PLAYING,
    payload,
  };
};

/**
 * Set isEmpty prop in the reducer
 * @param  {Boolean} payload
 */
export const setIsEmpty = (payload) => {
  return {
    type: Types.SET_IS_EMPTY,
    payload,
  };
};

/**
 * Trigger redux-saga to set and persist isRecording prop
 * @param  {Boolean} payload
 */
export const updateIsRecording = (payload) => {
  return {
    type: Types.UPDATE_IS_RECORDING,
    payload,
  };
};

/**
 * Trigger redux-saga to track action into recorded action queue
 * @param  {Object} payload
 */
export const trackAction = (payload) => {
  return {
    type: Types.TRACK_ACTION,
    payload,
  };
};

/**
 * Trigger redux-saga to play recorded action queue
 */
export const play = () => {
  return {
    type: Types.PLAY,
  };
};

/**
 * Trigger redux-saga to empty action action queue
 */
export const emptyActionQueue = () => {
  return {
    type: Types.EMPTY_ACTION_QUEUE,
  };
};

/**
 * Trigger redux-saga to reset the recorder object
 */
export const resetRecorder = () => {
  return {
    type: Types.RESET_RECORDER,
  };
};

export const setActions = (payload) => {
  return {
    type: Types.SET_ACTIONS,
    payload,
  };
};

// Trigger redux-saga for To-Do list fetching
export const fetchActions = () => {
  return {
    type: Types.FETCH_ACTION_LIST,
  };
};

// Trigger redux-saga for fetching isRecording value
export const fetchIsRecording = () => {
  return {
    type: Types.FETCH_IS_RECORDING,
  };
};

// Reset current reducer to its initial state
export const resetReducer = () => {
  return {
    type: Types.RESET_REDUCER,
  };
};
