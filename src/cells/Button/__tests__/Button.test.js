import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../';

describe('<Button/>', () => {
  test('should render properly', () => {
    render(<Button label="Continue" />);
  });
  test('should call onClick function once', () => {
    const handleClick = jest.fn();
    render(<Button label="Continue" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Continue'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('should not call onClick function', () => {
    const handleClick = jest.fn();
    render(<Button label="Continue" onClick={handleClick} disabled={true} />);
    fireEvent.click(screen.getByText('Continue'));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
