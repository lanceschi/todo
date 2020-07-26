import * as actions from 'FSAActions/todo-new';
import Types from 'FSATypes/todo-new';

describe('To-Do New - Redux Actions', () => {
  it('should create an action for CREATE_ITEM', () => {
    const payload = {
      id: '4aeaf6f8-af50-4ef1-b8d8-7557570b496c',
      title: 'Phasellus risus nisl',
      description:
        'Duis nisi dui, vehicula in quam ac, bibendum varius risus. Curabitur consequat semper nunc sit amet fermentum. Nulla eu dictum libero, ac lobortis ante. Praesent molestie scelerisque suscipit. Morbi et sapien non tellus vulputate faucibus sed sit amet dui. Integer eu tristique nunc. Phasellus ut massa mattis, elementum libero nec, placerat nibh. Mauris dignissim libero augue, at consequat odio dignissim non.',
      created_at: '2020-07-25T16:52:01.014Z',
    };

    const expectedAction = {
      type: Types.CREATE_ITEM,
      payload,
    };

    expect(actions.createNewItem(payload)).toEqual(expectedAction);
  });

  it('should create an action for RESET_REDUCER', () => {
    const expectedAction = {
      type: Types.RESET_REDUCER,
    };

    expect(actions.resetReducer()).toEqual(expectedAction);
  });
});
