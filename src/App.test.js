import { render, screen } from '@testing-library/react';
import App from './App';

test('h1 is present', () => {
  render(<App />);
  const headElement = screen.getByRole("heading");
  expect(headElement).toBeInTheDocument();
});
