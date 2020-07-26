import Types from 'FSATypes/todo-list';

export const getInitialState = () => ({
  list: [],
});

/**
 * @desc Todo list reducer function
 * @param  {Object} state
 * @param  {Object} action
 */
export default (state = getInitialState(), action) => {
  switch (action.type) {
    case Types.SET_LIST:
      return { ...state, list: action.payload };

    case Types.RESET_REDUCER:
      return getInitialState();

    default:
      return state;
  }
};
