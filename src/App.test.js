import { render, screen } from '@testing-library/react';
import App from './App';

test('renders your name on the page', () => {
  render(<App />);
  const nameElement = screen.getByText(/Leona Ilao/i); 
  expect(nameElement).toBeInTheDocument();
});
