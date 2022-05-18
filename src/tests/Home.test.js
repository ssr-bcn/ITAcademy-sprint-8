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
import Home from '../pages/Home';

const view = (user, setUser) => {
  render(
    <MemoryRouter initialEntries={[{ pathname: '/' }]}>
      <UserContext.Provider value={[user, setUser]}>
        <Home />
      </UserContext.Provider>
    </MemoryRouter>
  );
}

describe('Home component', () => {
  it('must show welcome message and button', () => {
    const user = {};
    const setUser = data => ( {data} );

    view(user, setUser);

    expect( screen
      .getByText(/^Welcome to the World of Star Wars$/i) )
      .toBeInTheDocument();

    expect( screen
        .getByText(/^Take off!$/i) )
        .toBeInTheDocument();
    });

  it('must show generic message on anonymous user', () => {
    const user = {};
    const setUser = data => ( {data} );

    view(user, setUser);

    expect( screen
      .getByText(/^Discover the ships that appear in the Star Wars movies$/i) )
      .toBeInTheDocument();
  });

  it('must show custom message on logged user', () => {
    const user = { username: 'Logged user name'};
    const setUser = data => ( {data} );

    view(user, setUser);

    expect( screen
      .getByText( new RegExp( `${user.username}, discover the ships that appear in the Star Wars movies`, 'i' ) ) )
      .toBeInTheDocument();
  });
});
