import { render, screen, cleanup } from '@testing-library/react';
import App from './App';

describe('App.jsx tests', () => {
  afterEach(cleanup);

  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText('App');
    expect(linkElement).toBeInTheDocument();
  });
});
