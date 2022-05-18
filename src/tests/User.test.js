/**
 * Testing con useContext:
 * https://stackoverflow.com/a/55013256
 * 
 * Testing con Router y useLocation:
 * https://stackoverflow.com/a/68250122
 */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { UserContext } from '../application/provider';
import User from '../components/User/User';

const view = (user, setUser) => {
  render(
    <MemoryRouter initialEntries={[{ pathname: '/' }]}>
      <UserContext.Provider value={[user, setUser]}>
        <User />
      </UserContext.Provider>
    </MemoryRouter>
  );
}

describe('User component', () => {
  it('must display links on anonymous user', () => {
    const user = {};
    const setUser = data => ( {data} );

    view(user, setUser);

    expect( screen.getByText(/log in/i) ).toBeInTheDocument();
    expect( screen.getByText(/sign up/i) ).toBeInTheDocument();
    expect( screen.queryByText(/^Hi/i) ).not.toBeInTheDocument();
    expect( screen.queryByText(/log out/i) ).not.toBeInTheDocument();
  });

  it('must display the user name and log out button on logged user', () => {
    const user = { username: 'Logged user name' };
    const setUser = data => ( {data} );

    view(user, setUser);

    expect( screen.getByText( new RegExp( `Hi, ${user.username}`, 'i') ) ).toBeInTheDocument();
    expect( screen.getByText(/log out/i) ).toBeInTheDocument();
    expect( screen.queryByText(/log in/i) ).not.toBeInTheDocument();
    expect( screen.queryByText(/sign up/i) ).not.toBeInTheDocument();
  })
});
