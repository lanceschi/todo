import Types from 'FSATypes/todo-new';

/**
 * Trigger redux-saga for creating a new To-Do list item
 */
export const createNewItem = (payload) => {
  return {
    type: Types.CREATE_ITEM,
    payload
  };
};

/**
 * Reset the Redux reducer
 */
export const resetReducer = () => {
  return {
    type: Types.RESET_REDUCER,
  };
};
