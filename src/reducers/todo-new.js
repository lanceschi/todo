import { v4 as uuidv4 } from 'uuid';
import Types from 'FSATypes/todo-new';

export const getInitialState = () => ({
  item: {
    id: uuidv4(),
    title: '',
    description: '',
    created_at: null,
  },
});

/**
 * @desc Todo list reducer function
 * @param  {Object} state
 * @param  {Object} action
 */
export default (state = getInitialState(), action) => {
  switch (action.type) {
    case Types.RESET_REDUCER:
      return getInitialState();

    default:
      return state;
  }
};
