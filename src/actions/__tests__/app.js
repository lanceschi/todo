import * as actions from 'FSAActions/app';
import Types from 'FSATypes/app';

describe('App - Redux Actions', () => {
  it('should create an action for ROUTE_TO', () => {
    const payload = {
      model: 'todo',
      action: 'list',
    };

    const expectedAction = {
      type: Types.ROUTE_TO,
      payload,
    };

    expect(actions.routeTo(payload)).toEqual(expectedAction);
  });
});
