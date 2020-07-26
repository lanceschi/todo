import Payloads from './payloads';

export default {
  DEFAULT: {
    todo_list: {
      list: [],
    },
    todo_new: {
      item: {
        id: 'eb525a9b-8407-40f7-809b-90d3016b0621',
        title: '',
        description: '',
        created_at: null,
      },
    },
    todo_edit: {
      item: {},
      isLoading: false,
      hasFetchFailed: false,
      hasFetchedOnce: false,
    },
    recorder: {
      actions: [],
      isRecording: false,
      isPlaying: false,
      isEmpty: true,
    },
  },
  SINGLE_ACTION: {
    todo_list: {
      list: [],
    },
    todo_new: {
      item: {
        id: 'eb525a9b-8407-40f7-809b-90d3016b0621',
        title: '',
        description: '',
        created_at: null,
      },
    },
    todo_edit: {
      item: {},
      isLoading: false,
      hasFetchFailed: false,
      hasFetchedOnce: false,
    },
    recorder: {
      actions: [Payloads.SINGLE_ACTION],
      isRecording: false,
      isPlaying: false,
      isEmpty: false,
    },
  },
};
