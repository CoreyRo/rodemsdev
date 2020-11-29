import { cleanup, render, screen } from '@testing-library/react';
import Projects from './Projects';

describe('Projects page tests', () => {
  afterEach(cleanup);

  test('renders Projects page', () => {
    render(<Projects />);
    const myProjects = screen.getByText('My Projects');
    expect(myProjects).toBeInTheDocument();
  });
});
