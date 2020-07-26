import Types from 'FSATypes/todo-edit';

export const getInitialState = () => ({
  item: {},
  isLoading: false,
  hasFetchFailed: false,
  hasFetchedOnce: false,
});

/**
 * @desc Todo list reducer function
 * @param  {Object} state
 * @param  {Object} action
 */
export default (state = getInitialState(), action) => {
  switch (action.type) {
    case Types.SET_ITEM:
      return {
        ...state,
        item: action.payload,
      };

    case Types.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case Types.SET_HAS_FETCH_FAILED:
      return {
        ...state,
        hasFetchFailed: action.payload,
      };

    case Types.SET_HAS_FETCHED_ONCE:
      return {
        ...state,
        hasFetchedOnce: action.payload,
      };

    case Types.RESET_REDUCER:
      return getInitialState();

    default:
      return state;
  }
};
