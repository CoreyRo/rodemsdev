import { render, screen, cleanup } from '@testing-library/react';
import Grid from './Grid';

describe('Grid Tests', () => {
  afterEach(cleanup);

  test('Grid item renders with children', () => {
    const child = 'child text';
    render(<Grid>{child}</Grid>);
    const gridChild = screen.getByText(child);
    expect(gridChild).toBeInTheDocument();
  });
});
