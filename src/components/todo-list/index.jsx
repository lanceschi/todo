import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Header } from './header';
import { Footer } from './footer';
import { List } from './list';
import { routeTo } from 'FSAActions/app';
import { init, deleteItem, deleteList } from 'FSAActions/todo-list';
import {
  init as initRecorder,
  updateIsRecording,
  play,
  resetRecorder,
} from 'FSAActions/recorder';
import style from './style.module.less';
import Div100vh from 'react-div-100vh';

export default () => {
  const list = useSelector((state) => state.todo_list.list);
  const isRecordingState = useSelector((state) => state.recorder.isRecording);
  const isPlayingState = useSelector((state) => state.recorder.isPlaying);
  const isEmptyState = useSelector((state) => state.recorder.isEmpty);
  const dispatch = useDispatch();
  const handleCreateNew = () =>
    dispatch(routeTo({ model: 'todo', action: 'new' }));
  const handleDeleteList = () => dispatch(deleteList());
  const handleEditItem = (id) =>
    dispatch(routeTo({ model: 'todo', action: 'edit', id }));
  const handleDeleteItem = (id) => dispatch(deleteItem(id));

  const toggleIsRecording = () => {
    const nextState = !isRecordingState;
    dispatch(updateIsRecording(nextState));
  };

  const handlePlay = () => dispatch(play());
  const handleResetRecorder = () => dispatch(resetRecorder());

  useEffect(() => {
    dispatch(initRecorder());
    dispatch(init());
  }, []);

  return (
    <Div100vh className={style.GridWrapper}>
      <Header
        createNew={handleCreateNew}
        deleteList={handleDeleteList}
        isPlaying={isPlayingState}
        areTodos={(list.length > 0)}
      />

      <List
        list={list}
        editItem={handleEditItem}
        deleteItem={handleDeleteItem}
      />

      <Footer
        toggleIsRecording={toggleIsRecording}
        isRecording={isRecordingState}
        isPlaying={isPlayingState}
        isEmpty={isEmptyState}
        play={handlePlay}
        resetRecorder={handleResetRecorder}
      />
    </Div100vh>
  );
};
