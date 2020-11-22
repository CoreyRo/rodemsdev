import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders Header component', () => {
  render(<Header size="1">Hello World</Header>);
  const headerEl = screen.getByText('Hello World');
  expect(headerEl).toBeInTheDocument();
});
