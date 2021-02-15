import React from 'react';
import { render, screen } from '@testing-library/react';
import Hideable from '../';

describe('<Hideable/>', () => {
  test('text inside should not be visible', () => {
    render(<Hideable>Hidden</Hideable>);
    expect(screen.getByText('Hidden')).not.toBeVisible();
  });
});
