import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// To-Do List Lazy Component
const TodoListComponent = React.lazy(() =>
  import(/* webpackChunkName: "todoListComponent" */ 'Components/todo-list')
);

// <React.Suspense fallback={<LoadingSpinner />}>
const TodoList = (props) => (
  <React.Suspense fallback={<div>Loading ...</div>}>
    <TodoListComponent {...props} />
  </React.Suspense>
);

// To-Do New Lazy Component
const TodoNewComponent = React.lazy(() =>
  import(/* webpackChunkName: "todoNewComponent" */ 'Components/todo-new')
);

const TodoNew = (props) => (
  <React.Suspense fallback={<div>Loading ...</div>}>
    <TodoNewComponent {...props} />
  </React.Suspense>
);


// To-Do Edit Lazy Component
const TodoEditComponent = React.lazy(() =>
  import(/* webpackChunkName: "todoEditComponent" */ 'Components/todo-edit')
);

const TodoEdit = (props) => (
  <React.Suspense fallback={<div>Loading ...</div>}>
    <TodoEditComponent {...props} />
  </React.Suspense>
);

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/todo/list" component={TodoList} />
      <Route path="/todo/new" component={TodoNew} />
      <Route path="/todo/:id/edit" component={TodoEdit} />

      <Redirect exact from="/" to="/todo/list" />
      <Redirect to="/" />
    </Switch>
  );
};
