import { cleanup, render, screen } from '@testing-library/react';
import Logo from './Logo';

describe('Logo component tests', () => {
  afterEach(cleanup);

  test('renders Logo component', () => {
    render(<Logo />);
    const rodems = screen.getByText('rodems');
    const dot = screen.getByText('.');
    const dev = screen.getByText('dev');
    const callIt = screen.getByText('();');

    expect(rodems).toBeInTheDocument();
    expect(dot).toBeInTheDocument();
    expect(dev).toBeInTheDocument();
    expect(callIt).toBeInTheDocument();
  });
});
