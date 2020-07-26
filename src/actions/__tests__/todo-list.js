import * as actions from 'FSAActions/todo-list';
import Types from 'FSATypes/todo-list';

describe('To-Do List - Redux Actions', () => {
  it('should create an action for INIT', () => {
    const expectedAction = {
      type: Types.INIT,
    };

    expect(actions.init()).toEqual(expectedAction);
  });

  it('should create an action for SET_LIST', () => {
    const payload = [];

    const expectedAction = {
      type: Types.SET_LIST,
      payload,
    };

    expect(actions.setList(payload)).toEqual(expectedAction);
  });

  it('should create an action for FETCH_LIST', () => {
    const expectedAction = {
      type: Types.FETCH_LIST,
    };

    expect(actions.fetchList()).toEqual(expectedAction);
  });

  it('should create an action for DELETE_ITEM', () => {
    const payload = '4aeaf6f8-af50-4ef1-b8d8-7557570b496c';

    const expectedAction = {
      type: Types.DELETE_ITEM,
      id: payload,
    };

    expect(actions.deleteItem(payload)).toEqual(expectedAction);
  });  

  it('should create an action for DELETE_LIST', () => {
    const expectedAction = {
      type: Types.DELETE_LIST,
    };

    expect(actions.deleteList()).toEqual(expectedAction);
  });

  it('should create an action for RESET_REDUCER', () => {
    const expectedAction = {
      type: Types.RESET_REDUCER,
    };

    expect(actions.resetReducer()).toEqual(expectedAction);
  });
});
