import * as actions from 'FSAActions/recorder';
import Types from 'FSATypes/recorder';

describe('Recorder - Redux Actions', () => {
  it('should create an action for INIT', () => {
    const expectedAction = {
      type: Types.INIT,
    };

    expect(actions.init()).toEqual(expectedAction);
  });

  it('should create an action for SET_IS_RECORDING', () => {
    const payload = true;

    const expectedAction = {
      type: Types.SET_IS_RECORDING,
      payload,
    };

    expect(actions.setIsRecording(payload)).toEqual(expectedAction);
  });

  it('should create an action for SET_IS_PLAYING', () => {
    const payload = true;

    const expectedAction = {
      type: Types.SET_IS_PLAYING,
      payload,
    };

    expect(actions.setIsPlaying(payload)).toEqual(expectedAction);
  });

  it('should create an action for SET_IS_EMPTY', () => {
    const payload = true;

    const expectedAction = {
      type: Types.SET_IS_EMPTY,
      payload,
    };

    expect(actions.setIsEmpty(payload)).toEqual(expectedAction);
  });

  it('should create an action for UPDATE_IS_RECORDING', () => {
    const payload = true;

    const expectedAction = {
      type: Types.UPDATE_IS_RECORDING,
      payload,
    };

    expect(actions.updateIsRecording(payload)).toEqual(expectedAction);
  });

  it('should create an action for TRACK_ACTION', () => {
    const payload = {
      id: '4aeaf6f8-af50-4ef1-b8d8-7557570b496c',
      title: 'Donec et mi tortor',
      description:
        'Etiam fermentum lacinia mi, eu faucibus justo elementum sit amet. Donec congue eros leo, in rhoncus eros congue ac. Duis gravida ipsum et ex viverra, eu vestibulum lectus dapibus. Maecenas ullamcorper vestibulum mattis. Morbi quis cursus lorem. Cras sodales hendrerit elit, euismod cursus nunc vulputate vitae. Sed non dapibus urna, ultrices commodo sapien. Phasellus tincidunt elementum massa vel sodales. Curabitur in urna a metus commodo dictum. Nam faucibus sapien nec nibh ultricies, quis condimentum felis cursus. Pellentesque non velit tortor. Maecenas sed blandit nibh.',
      created_at: '2020-07-25T12:52:01.014Z',
    };

    const expectedAction = {
      type: Types.TRACK_ACTION,
      payload,
    };

    expect(actions.trackAction(payload)).toEqual(expectedAction);
  });

  it('should create an action for PLAY', () => {
    const expectedAction = {
      type: Types.PLAY,
    };

    expect(actions.play()).toEqual(expectedAction);
  });

  it('should create an action for EMPTY_ACTION_QUEUE', () => {
    const expectedAction = {
      type: Types.EMPTY_ACTION_QUEUE,
    };

    expect(actions.emptyActionQueue()).toEqual(expectedAction);
  });

  it('should create an action for RESET_RECORDER', () => {
    const expectedAction = {
      type: Types.RESET_RECORDER,
    };

    expect(actions.resetRecorder()).toEqual(expectedAction);
  });

  it('should create an action for SET_ACTIONS', () => {
    const payload = [];

    const expectedAction = {
      type: Types.SET_ACTIONS,
      payload,
    };

    expect(actions.setActions(payload)).toEqual(expectedAction);
  });

  it('should create an action for FETCH_ACTION_LIST', () => {
    const expectedAction = {
      type: Types.FETCH_ACTION_LIST,
    };

    expect(actions.fetchActions()).toEqual(expectedAction);
  });

  it('should create an action for FETCH_IS_RECORDING', () => {
    const expectedAction = {
      type: Types.FETCH_IS_RECORDING,
    };

    expect(actions.fetchIsRecording()).toEqual(expectedAction);
  });

  it('should create an action for RESET_REDUCER', () => {
    const expectedAction = {
      type: Types.RESET_REDUCER,
    };

    expect(actions.resetReducer()).toEqual(expectedAction);
  });
});
