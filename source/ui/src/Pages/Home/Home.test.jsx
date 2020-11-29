import { cleanup, render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home page tests', () => {
  afterEach(cleanup);

  test('renders Home page', () => {
    render(<Home />);
    const helloWorld = screen.getByText('Hello World');
    expect(helloWorld).toBeInTheDocument();
  });
});
