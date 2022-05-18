 import React from 'react';
 import '@testing-library/jest-dom/extend-expect';
 import { render, screen } from '@testing-library/react';
 import Logo from '../components/Logo/Logo';
 
 describe('Logo component', () => {
   it('must display an image with alt="Star Wars"', () => {
     render(<Logo />);
 
     expect( screen.getByAltText(/^Star Wars$/) ).toBeInTheDocument();
   });
 });
 