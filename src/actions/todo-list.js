import Types from 'FSATypes/todo-list';

// Start component setup actions (redux-saga)
export const init = () => {
  return {
    type: Types.INIT,
  };
};

// Set reducer prop
export const setList = (payload) => {
  return {
    type: Types.SET_LIST,
    payload,
  };
};

// Trigger redux-saga for To-Do list fetching
export const fetchList = () => {
  return {
    type: Types.FETCH_LIST,
  };
};

/**
 * Trigger redux-saga for deleting a To-Do item
 * @param  {String} id
 */
export const deleteItem = (id) => {
  return {
    type: Types.DELETE_ITEM,
    id,
  };
};

// Trigger redux-saga for deleting all the To-Do items
export const deleteList = () => {
  return {
    type: Types.DELETE_LIST,
  };
};

// Reset current reducer to its initial state
export const resetReducer = () => {
  return {
    type: Types.RESET_REDUCER,
  };
};
