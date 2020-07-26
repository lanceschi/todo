import React from 'react';
import Component from '../header';
import ComponentProps from './mock-data/component-props';
import { render, screen } from '@testing-library/react';

describe('Todo edit - Header component', () => {
  it('Renders without crashing', () => {
    render(<Component {...ComponentProps.HEADER} />);
  });

  it('Expect button text to be back', () => {
    render(<Component {...ComponentProps.HEADER} />);

    const button = screen.getByTestId('cancel');
    expect(button.textContent).toBe('Back');
  });

  it('Expect title text to be TODO EDIT', () => {
    render(<Component {...ComponentProps.HEADER} />);

    const button = screen.getByTestId('title');
    expect(button.textContent).toBe('TODO EDIT');
  });  
});
