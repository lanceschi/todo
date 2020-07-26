import Types from 'FSATypes/todo-new';

export default {
  FETCHED_TODOS: [
    {
      title: 'Lorem',
      description: 'Ipsum',
      id: 'e1c24852-d4c2-4f53-a69d-dc3853df16d4',
      created_at: '2020-07-25T19:02:34.172Z',
    },
    {
      title: 'Ipsum',
      description: 'Lorem',
      id: '388887f3-ef45-4de4-81ae-f56f7759c0f6',
      created_at: '2020-07-25T19:02:42.890Z',
    },
  ],
  TRACKED_TODO: {
    title: 'Lorem',
    description: 'Ipsum',
    id: 'e1c24852-d4c2-4f53-a69d-dc3853df16d4',
    created_at: '2020-07-25T19:02:34.172Z',
  },
  SINGLE_ACTION: {
    type: Types.CREATE_ITEM,
    payload: {
      title: 'Lorem',
      description: 'Ipsum',
      id: 'e1c24852-d4c2-4f53-a69d-dc3853df16d4',
      created_at: '2020-07-25T19:02:34.172Z',          
    }    
  }
};
