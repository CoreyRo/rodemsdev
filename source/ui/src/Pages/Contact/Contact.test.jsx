import { cleanup, render, screen } from '@testing-library/react';
import Contact from './Contact';

describe('Contact page tests', () => {
  afterEach(cleanup);

  test('renders Contact page', () => {
    render(<Contact />);
    const contactMe = screen.getByText('Contact Me');
    expect(contactMe).toBeInTheDocument();
  });
});
