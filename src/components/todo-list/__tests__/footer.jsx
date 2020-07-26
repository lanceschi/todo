import React from 'react';
import Component from '../footer';
import ComponentProps from './mock-data/component-props';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Todo list - Footer component', () => {
  it('Renders without crashing', () => {
    render(<Component {...ComponentProps.FOOTER} />);
  });

  it('Expect record button text to be Record', () => {
    render(<Component {...ComponentProps.FOOTER} />);

    const button = screen.getByTestId('record');
    expect(button.textContent).toBe('Record');
  });

  it('Expect Stop Recording button text to be Stop Recording', () => {
    render(<Component {...ComponentProps.FOOTER} />);

    const button = screen.getByTestId('stopRecording');
    expect(button.textContent).toBe('Stop Recording');
  });

  it('Expect Play Recording button text to be Play Recording', () => {
    render(<Component {...ComponentProps.FOOTER} />);

    const button = screen.getByTestId('playRecording');
    expect(button.textContent).toBe('Play Recording');
  });

  it('Expect Clear Recording button text to be Clear Recording', () => {
    render(<Component {...ComponentProps.FOOTER} />);

    const button = screen.getByTestId('clearRecording');
    expect(button.textContent).toBe('Clear Recording');
  });
});

describe('Todo list - Footer component enabled/disabled button state', () => {
  it('Expect Record button to be enabled', () => {
    render(<Component {...ComponentProps.FOOTER} />);

    const button = screen.getByTestId('record');
    expect(button).toBeEnabled();
  });

  it('Expect Stop Recording button to be disabled', () => {
    render(<Component {...ComponentProps.FOOTER} />);

    const button = screen.getByTestId('stopRecording');
    expect(button).toBeDisabled();
  });

  it('Expect Play Recording button to be disabled', () => {
    render(<Component {...ComponentProps.FOOTER} />);

    const button = screen.getByTestId('playRecording');
    expect(button).toBeDisabled();
  });

  it('Expect Clear Recording button to be disabled', () => {
    render(<Component {...ComponentProps.FOOTER} />);

    const button = screen.getByTestId('clearRecording');
    expect(button).toBeDisabled();
  });
});

describe('Todo list - Footer component enabled/disabled state when recording', () => {
  it('Expect Record button to be enabled', () => {
    render(<Component {...ComponentProps.FOOTER_IS_RECORDING} />);

    const button = screen.getByTestId('record');
    expect(button).toBeDisabled();
  });

  it('Expect Stop Recording button to be enabled', () => {
    render(<Component {...ComponentProps.FOOTER_IS_RECORDING} />);

    const button = screen.getByTestId('stopRecording');
    expect(button).toBeEnabled();
  });
});
