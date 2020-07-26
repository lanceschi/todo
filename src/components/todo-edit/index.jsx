import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { init, updateItem, resetReducer } from 'FSAActions/todo-edit';
import { useForm } from 'react-hook-form';
import { routeTo } from 'FSAActions/app';
import { Header } from './header';
import style from './style.module.less';

export default () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.todo_edit);
  const handleCancel = () =>
    dispatch(routeTo({ model: 'todo', action: 'list' }));
  useEffect(() => {
    dispatch(init(id));

    return () => dispatch(resetReducer());
  }, []);

  return (
    <div className={style.Wrapper}>
      <Header cancel={handleCancel} />
      {state.isLoading === false && state.hasFetchedOnce === true && (
        <Form data={state.item} />
      )}
    </div>
  );
};

const Form = ({ data = {} }) => {
  const dispatch = useDispatch();
  const { handleSubmit, setValue, register, errors } = useForm({
    defaultValues: { ...data },
  });
  const onSubmit = (item) => dispatch(updateItem(item));

  return (
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
          <p>Save</p>
        </button>
      </form>
    </div>
  );
};
