import { cleanup, render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component tests', () => {
  afterEach(cleanup);

  test('renders Header component', () => {
    render(<Header size="1">Hello World</Header>);
    const headerEl = screen.getByText('Hello World');
    expect(headerEl).toBeInTheDocument();
  });

  test('renders Header component', () => {
    render(<Header>Hello World</Header>);
    const headerEl = screen.getByText('Hello World');
    expect(headerEl).toBeInTheDocument();
  });
});
