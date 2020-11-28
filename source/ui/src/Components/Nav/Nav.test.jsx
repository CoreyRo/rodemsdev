import { cleanup, fireEvent, render, screen, act } from '@testing-library/react';
import { waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { MemoryRouter } from 'react-router-dom';
import Nav from './Nav';

describe('Nav component tests', () => {
  beforeEach(() => {
    jest.doMock('./NavItems', () => {
      const ComponentToMock = () => <div />;
      return ComponentToMock;
    });
  });
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  test('renders Nav', () => {
    render(
      <MemoryRouter>
        <Nav windowWidth={1921} />
      </MemoryRouter>,
    );
    const homeLink = screen.getByTitle('home');

    expect(homeLink).toBeInTheDocument();
  });

  test('fires the callback when a link is clicked', () => {
    render(
      <MemoryRouter>
        <Nav windowWidth={640} />
      </MemoryRouter>,
    );
    const homeLink = screen.getByTitle('home');
    fireEvent.click(homeLink);

    expect(homeLink).toBeInTheDocument();
  });

  test('renders Nav with the burger button in breakpoint under tablet', () => {
    render(
      <MemoryRouter>
        <Nav windowWidth={640} />
      </MemoryRouter>,
    );
    const burgerButton = screen.getByTestId('burger-button');

    expect(burgerButton).toBeInTheDocument();
  });

  describe('Nav click tests', () => {
    test('opens the nav menu on burger click', async () => {
      const { container } = render(
        <MemoryRouter>
          <Nav windowWidth={640} />
          <button type="button" data-testid="mocked-page">
            home page
          </button>
        </MemoryRouter>,
      );
      const burgerButton = container.querySelector('[data-testid="burger-button"]');
      userEvent.click(burgerButton);

      await waitFor(
        async () => {
          const mobileNavMenu = container.querySelector('[data-testid="mobile-nav-menu"]');
          expect(mobileNavMenu).toBeVisible();
        },
        { timeout: 500 },
      );
    });

    test('renders Nav with the burger button', async () => {
      const { container } = render(
        <MemoryRouter>
          <Nav windowWidth={640} />
          <button type="button" data-testid="mocked-page">
            home page
          </button>
        </MemoryRouter>,
      );
      const burgerButton = container.querySelector('[data-testid="burger-button"]');
      userEvent.click(burgerButton);

      await waitFor(
        async () => {
          const mockedPage = container.querySelector('[data-testid="mocked-page"]');
          userEvent.click(mockedPage);
        },
        { timeout: 500 },
      );

      await waitFor(
        async () => {
          const mobileNavMenu = container.querySelector('[data-testid="mobile-nav-menu"]');
          expect(mobileNavMenu).not.toBeVisible();
        },
        { timeout: 1000 },
      );
    });
  });
});
