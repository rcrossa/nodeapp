import { render, screen } from '@testing-library/react';
import App from './App';
import TestBasico from './components/TestBasico/TestBasico';

test(` ${TestBasico}`, () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
