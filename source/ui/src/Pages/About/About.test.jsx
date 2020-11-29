import { cleanup, render, screen } from '@testing-library/react';
import About from './About';

describe('About page tests', () => {
  afterEach(cleanup);

  test('renders About page', () => {
    render(<About />);
    const aboutMe = screen.getByText('About Me');
    expect(aboutMe).toBeInTheDocument();
  });
});
