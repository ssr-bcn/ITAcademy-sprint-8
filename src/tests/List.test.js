import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import List from '../components/List/List';
import * as customHooks from '../application/hooks/useSWApi';

// jest.mock('../application/hooks/useSWApi', () => ({
//   ...jest.requireActual('../application/hooks/useSWApi'),
//   useStarshipsEndPoint: () => {
//     return [
//       true, 
//       data => data, '', 
//       {
//         count: 0,
//         next: 1,
//         results: []
//       }
//     ];
//   }
// }));

const spyStarshipsHook = jest.spyOn(customHooks, 'useStarshipsEndPoint');

describe('List component', () => {
  it('must display an image with alt="Loading" while asking for data', () => {
    spyStarshipsHook.mockReturnValue([
      true,
      () => '',
      '',
      {
        count: 0,
        next: 1,
        results: []        
      }
    ])

    render(<List />);

    expect( screen.getByAltText(/^Loading$/) ).toBeInTheDocument();
  });

  it('must NOT display an image with alt="Loading" when no asking for data', () => {
    spyStarshipsHook.mockReturnValue([
      false,
      () => '',
      '',
      {
        count: 0,
        next: 1,
        results: []        
      }
    ])

    render(<List />);

    expect( screen.queryByAltText(/^Loading$/) ).not.toBeInTheDocument();
  });

  it('must show as many ship cards as shipsToRender.results.length', () => {
    spyStarshipsHook.mockReturnValue([
      false,
      () => '',
      '',
      {
        count: 36,
        next: 2,
        results: [
          { url: '1'}, { url: '2'}, { url: '3'}, { url: '4'}, { url: '5'}, { url: '6'}, { url: '7'}, { url: '8'}, { url: '9'}, { url: '10'},
        ]        
      }
    ])

    render(
      <MemoryRouter initialEntries={[{ pathname: '/' }]}>
        <List />
      </MemoryRouter>);

    const cards = screen.getAllByRole('article')

    expect(cards).toHaveLength(10);
  });

  it('must show a Show More button if shipsToRender.next is not null', () => {
    spyStarshipsHook.mockReturnValue([
      false,
      () => '',
      '',
      {
        count: 36,
        next: 1,
        results: []        
      }
    ])

    render(
      <MemoryRouter initialEntries={[{ pathname: '/' }]}>
        <List />
      </MemoryRouter>);

    const button = screen.getAllByRole('button')

    expect(button).toHaveLength(1);
    expect(button[0]).toHaveTextContent('Show more');
  });

  it('must NOT show a Show More button if shipsToRender.next is null', () => {
    spyStarshipsHook.mockReturnValue([
      false,
      () => '',
      '',
      {
        count: 36,
        next: null,
        results: []        
      }
    ])

    render(
      <MemoryRouter initialEntries={[{ pathname: '/' }]}>
        <List />
      </MemoryRouter>);

    expect( screen.queryByRole('button') ).toBeNull();
  });

  it('must NOT show any error message if error is empty', () => {
    spyStarshipsHook.mockReturnValue([
      false,
      () => '',
      '',
      {
        count: 36,
        next: null,
        results: []        
      }
    ])

    render(
      <MemoryRouter initialEntries={[{ pathname: '/' }]}>
        <List />
      </MemoryRouter>);

    expect( screen.queryByRole('heading') ).toBeNull();
  });

  it('must show an error message if error is not empty', () => {
    spyStarshipsHook.mockReturnValue([
      false,
      () => '',
      'Error: error message',
      {
        count: 36,
        next: null,
        results: []        
      }
    ])

    render(
      <MemoryRouter initialEntries={[{ pathname: '/' }]}>
        <List />
      </MemoryRouter>);

    expect( screen.queryAllByRole('heading') ).toHaveLength(1);
  });
});
