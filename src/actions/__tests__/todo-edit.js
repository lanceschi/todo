import * as actions from 'FSAActions/todo-edit';
import Types from 'FSATypes/todo-edit';

describe('To-Do Edit - Redux Actions', () => {
  it('should create an action for INIT', () => {
    const payload = '4aeaf6f8-af50-4ef1-b8d8-7557570b496c';

    const expectedAction = {
      type: Types.INIT,
      id: payload,
    };

    expect(actions.init(payload)).toEqual(expectedAction);
  });

  it('should create an action for FETCH_ITEM', () => {
    const payload = '4aeaf6f8-af50-4ef1-b8d8-7557570b496c';

    const expectedAction = {
      type: Types.FETCH_ITEM,
      id: payload,
    };

    expect(actions.fetchItem(payload)).toEqual(expectedAction);
  });

  it('should create an action for SET_ITEM', () => {
    const payload = {
      id: '4aeaf6f8-af50-4ef1-b8d8-7557570b496c',
      title: 'Donec et mi tortor',
      description:
        'Etiam fermentum lacinia mi, eu faucibus justo elementum sit amet. Donec congue eros leo, in rhoncus eros congue ac. Duis gravida ipsum et ex viverra, eu vestibulum lectus dapibus. Maecenas ullamcorper vestibulum mattis. Morbi quis cursus lorem. Cras sodales hendrerit elit, euismod cursus nunc vulputate vitae. Sed non dapibus urna, ultrices commodo sapien. Phasellus tincidunt elementum massa vel sodales. Curabitur in urna a metus commodo dictum. Nam faucibus sapien nec nibh ultricies, quis condimentum felis cursus. Pellentesque non velit tortor. Maecenas sed blandit nibh.',
      created_at: '2020-07-25T12:52:01.014Z',
    };

    const expectedAction = {
      type: Types.SET_ITEM,
      payload,
    };

    expect(actions.setItem(payload)).toEqual(expectedAction);
  });

  it('should create an action for UPDATE_ITEM', () => {
    const payload = {
      id: '4aeaf6f8-af50-4ef1-b8d8-7557570b496c',
      title: 'Donec et mi tortor',
      description:
        'Etiam fermentum lacinia mi, eu faucibus justo elementum sit amet. Donec congue eros leo, in rhoncus eros congue ac. Duis gravida ipsum et ex viverra, eu vestibulum lectus dapibus. Maecenas ullamcorper vestibulum mattis. Morbi quis cursus lorem. Cras sodales hendrerit elit, euismod cursus nunc vulputate vitae. Sed non dapibus urna, ultrices commodo sapien. Phasellus tincidunt elementum massa vel sodales. Curabitur in urna a metus commodo dictum. Nam faucibus sapien nec nibh ultricies, quis condimentum felis cursus. Pellentesque non velit tortor. Maecenas sed blandit nibh.',
      created_at: '2020-07-25T12:52:01.014Z',
    };

    const expectedAction = {
      type: Types.UPDATE_ITEM,
      payload,
    };

    expect(actions.updateItem(payload)).toEqual(expectedAction);
  });

  it('should create an action for SET_IS_LOADING', () => {
    const payload = true;

    const expectedAction = {
      type: Types.SET_IS_LOADING,
      payload,
    };

    expect(actions.setIsLoading(payload)).toEqual(expectedAction);
  });

  it('should create an action for SET_HAS_FETCHED_ONCE', () => {
    const payload = true;

    const expectedAction = {
      type: Types.SET_HAS_FETCHED_ONCE,
      payload,
    };

    expect(actions.setHasFetchedOnce(payload)).toEqual(expectedAction);
  });

  it('should create an action for RESET_REDUCER', () => {
    const expectedAction = {
      type: Types.RESET_REDUCER,
    };

    expect(actions.resetReducer()).toEqual(expectedAction);
  });  
});
