import React from 'react';
import Component from '../header';
import ComponentProps from './mock-data/component-props';
import { render, screen } from '@testing-library/react';

describe('Todo new - Header component', () => {
  it('Renders without crashing', () => {
    render(<Component {...ComponentProps.HEADER} />);
  });

  it('Expect button text to be back', () => {
    render(<Component {...ComponentProps.HEADER} />);

    const button = screen.getByTestId('cancel');
    expect(button.textContent).toBe('Back');
  });

  it('Expect title text to be CREATE TODO', () => {
    render(<Component {...ComponentProps.HEADER} />);

    const button = screen.getByTestId('title');
    expect(button.textContent).toBe('CREATE TODO');
  });  
});
