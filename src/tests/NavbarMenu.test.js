/**
 * Testing con Router y useLocation:
 * https://stackoverflow.com/a/68250122
 */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavbarMenu from '../components/NavbarMenu/NavbarMenu';

describe('NavbarMenu component', () => {
  it('must display two links', () => {
    render(
      <MemoryRouter initialEntries={[{}]}>
        <NavbarMenu />
      </MemoryRouter>
    );

    expect( screen.getByText(/^home$/i) ).toBeInTheDocument();
    expect( screen.getByText(/^starships$/i) ).toBeInTheDocument();
  });
});
