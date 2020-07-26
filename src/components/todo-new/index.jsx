import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { createNewItem, resetReducer } from 'FSAActions/todo-new';
import { useForm } from 'react-hook-form';
import { routeTo } from 'FSAActions/app';
import { Header } from './header';
import style from './style.module.less';

export default () => {
  const { handleSubmit, register, errors } = useForm({
    defaultValues: {
      title: '',
      description: '',
    },
  });
  const dispatch = useDispatch();
  const form = useSelector((state) => state.todo_new.item);
  const onSubmit = (item) => {
    item.id = uuidv4();
    item.created_at = new Date();
    dispatch(createNewItem(item));
  };
  const handleCancel = () =>
    dispatch(routeTo({ model: 'todo', action: 'list' }));

  useEffect(() => {
    return () => dispatch(resetReducer());
  }, []);

  return (
    <div className={style.Wrapper}>
      <Header cancel={handleCancel} />
      <div className={style.FormWrapper}>
        <form onSubmit={handleSubmit(onSubmit)} className={style.FormContent}>
          <div className={style.FormGroup}>
            <label htmlFor="title">TITLE</label>
            <input
              id="title"
              name="title"
              type="text"
              autoComplete="off"
              ref={register({
                required: 'Required',
                minLength: 5,
              })}
            />
            {errors.title?.type === 'required' && (
              <div className={style.Tip}>Title is required</div>
            )}
            {errors.title?.type === 'minLength' && (
              <div className={style.Tip}>5 characters min length</div>
            )}
          </div>
          <div className={style.FormGroup}>
            <label htmlFor="description">DESCRIPTION</label>
            <textarea
              id="description"
              name="description"
              rows="12"
              ref={register({
                required: 'Required',
                minLength: 5,
              })}
            />
            {errors.description?.type === 'required' && (
              <div className={style.Tip}>Description is required</div>
            )}
            {errors.description?.type === 'minLength' && (
              <div className={style.Tip}>5 characters min length</div>
            )}
          </div>

          <button type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
              <polyline points="17 21 17 13 7 13 7 21"></polyline>
              <polyline points="7 3 7 8 15 8"></polyline>
            </svg>
            <p>Create</p>
          </button>
        </form>
      </div>
    </div>
  );
};
