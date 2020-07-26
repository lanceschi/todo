import React from 'react';
import style from './style.module.less';

const truncate = (input, length = 5) =>
  input.length > length ? `${input.substring(0, length)} ...` : input;

export const List = ({ list, editItem, deleteItem }) => {
  return (
    <div className={style.List}>
      {list.length > 0 && (
        <div className={style.TodoWrapper}>
          {list.map((x) => (
            <div key={x.id} className={style.TodoCard}>
              <TodoHeader title={x.title} createdAt={x.created_at} />
              <Description text={x.description} />
              <TodoFooter
                editItem={editItem.bind(this, x.id)}
                deleteItem={deleteItem.bind(this, x.id)}
              />
            </div>
          ))}
        </div>
      )}
      {list.length < 1 && (
        <div className={style.NoResults}>
          <div className={style.NoResultsInfobox}>
            <h1>No todos here</h1>
            <p>Create a new one by clicking the left button <br/>located in the header above</p>
          </div>
        </div>
      )}
    </div>
  );
};

const TodoFooter = ({ editItem, deleteItem }) => (
  <div className={style.TodoFooter}>
    <button onClick={editItem}>Edit</button>
    <button onClick={deleteItem}>Delete</button>
  </div>
);

const TodoHeader = ({ title, createdAt }) => (
  <div className={style.TodoHeader}>
    <Title title={title} />
    <CreatedAt createdAt={createdAt} />
  </div>
);

const Title = ({ title }) => <h2 className={style.Title}>{title}</h2>;

const Description = ({ text }) => {
  text = truncate(text, 95);
  return <p className={style.Description}>{text}</p>;
};

const CreatedAt = ({ createdAt }) => {
  createdAt = new Date(createdAt);
  const opts = {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  const date = createdAt.toLocaleDateString('en-GB', opts);
  const time = createdAt.toLocaleTimeString('en-GB', opts);
  return (
    <p className={style.CreateAt}>
      <i>{time}</i>
    </p>
  );
};
