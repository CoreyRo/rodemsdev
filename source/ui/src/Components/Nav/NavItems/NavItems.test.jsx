import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { MemoryRouter } from 'react-router-dom';
import NavItems from './NavItems';

describe('NavItems component tests', () => {
  let callBack;
  beforeEach(() => {
    callBack = jest.fn();
  });
  afterEach(() => {
    jest.resetAllMocks();
    cleanup();
  });

  test('renders the NavItems', () => {
    render(
      <MemoryRouter>
        <NavItems callback={callBack} />
      </MemoryRouter>,
    );
    const homeLink = screen.getByText('Home');
    const aboutLink = screen.getByText('About');
    const projectsLink = screen.getByText('Projects');
    const contactsLink = screen.getByText('Contact');

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(projectsLink).toBeInTheDocument();
    expect(contactsLink).toBeInTheDocument();
  });

  test.each`
    link
    ${'Home'}
    ${'About'}
    ${'Projects'}
    ${'Contact'}
  `('NavItem calls the callback on click', ({ link }) => {
    render(
      <MemoryRouter>
        <NavItems callback={callBack} />
      </MemoryRouter>,
    );
    const navLink = screen.getByText(link);

    userEvent.click(navLink);

    expect(callBack).toHaveBeenCalledTimes(1);
  });
});
