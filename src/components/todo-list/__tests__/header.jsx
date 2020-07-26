import React from 'react';
import Component from '../header';
import ComponentProps from './mock-data/component-props';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Todo list - Header component', () => {
  it('Renders without crashing', () => {
    render(<Component {...ComponentProps.HEADER} />);
  });

  it('Expect left button text to be Create', () => {
    render(<Component {...ComponentProps.HEADER} />);

    const button = screen.getByTestId('createTodo');
    expect(button.textContent).toBe('Create');
  });

  it('Expect title text to be TODO LIST', () => {
    render(<Component {...ComponentProps.HEADER} />);

    const button = screen.getByTestId('title');
    expect(button.textContent).toBe('TODO LIST');
  });

  it('Expect right button text to be Clear Todos', () => {
    render(<Component {...ComponentProps.HEADER} />);

    const button = screen.getByTestId('deleteTodos');
    expect(button.textContent).toBe('Clear Todos');
  });
});

describe('Todo list - Header component enabled/disabled button state', () => {
  it('Expect Create button to be enabled', () => {
    render(<Component {...ComponentProps.FOOTER} />);

    const button = screen.getByTestId('createTodo');
    expect(button).toBeEnabled();
  });

  it('Expect Clear Todos button to be disabled', () => {
    render(<Component {...ComponentProps.FOOTER} />);

    const button = screen.getByTestId('deleteTodos');
    expect(button).toBeDisabled();
  });
});
