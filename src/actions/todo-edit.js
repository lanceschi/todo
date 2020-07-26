import Types from 'FSATypes/todo-edit';

// Start component setup actions (redux-saga)
export const init = (id) => {
  return {
    type: Types.INIT,
    id,
  };
};

// Trigger redux-saga for To-Do list fetching
export const fetchItem = (id) => {
  return {
    type: Types.FETCH_ITEM,
    id,
  };
};

// Set reducer prop
export const setItem = (payload) => {
  return {
    type: Types.SET_ITEM,
    payload,
  };
};

// Trigger redux-saga for To-Do item updating
export const updateItem = (payload) => {
  return {
    type: Types.UPDATE_ITEM,
    payload,
  };
};

// Set reducer isLoading property
export const setIsLoading = (payload) => {
  return {
    type: Types.SET_IS_LOADING,
    payload,
  };
};

// Set reducer hasFetchFailed property
export const setHasFetchFailed = (payload) => {
  return {
    type: Types.SET_HAS_FETCH_FAILED,
    payload,
  };
};

// Set reducer hasFetchedOnce property
export const setHasFetchedOnce = (payload) => {
  return {
    type: Types.SET_HAS_FETCHED_ONCE,
    payload,
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
