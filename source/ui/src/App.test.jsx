import { cleanup, render, screen } from '@testing-library/react';
import App from './App';

describe('App Render', () => {
  afterEach(cleanup);

  test('renders App', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeInTheDocument();
  });
});
