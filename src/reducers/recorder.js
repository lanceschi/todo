import Types from 'FSATypes/recorder';

export const getInitialState = () => ({
  actions: [],
  isRecording: false,
  isPlaying: false,
  isEmpty: true,
});

/**
 * @desc Todo list reducer function
 * @param  {Object} state
 * @param  {Object} action
 */
export default (state = getInitialState(), action) => {
  switch (action.type) {
    case Types.SET_IS_RECORDING:
      return {
        ...state,
        isRecording: action.payload,
      };

    case Types.SET_IS_PLAYING:
      return {
        ...state,
        isPlaying: action.payload,
      };

    case Types.SET_IS_EMPTY:
      return {
        ...state,
        isEmpty: action.payload,
      };

    case Types.SET_ACTIONS:
      return {
        ...state,
        actions: action.payload,
      };

    case Types.RESET_REDUCER:
      return getInitialState();

    default:
      return state;
  }
};
