import { cleanup, render, screen } from '@testing-library/react';
import Burger from './Burger';

describe('Burger component tests', () => {
  afterEach(cleanup);

  test.each`
    clicked
    ${true}
    ${false}
  `('renders Burger with clicked = $clicked', ({ clicked }) => {
    render(<Burger clicked={clicked} />);
    const BurgerEl = screen.getByTestId('burger-svg');
    expect(BurgerEl).toBeInTheDocument();
  });
});
