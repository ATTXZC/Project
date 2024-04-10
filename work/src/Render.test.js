import { render, screen } from '@testing-library/react';
import Render from './Render';

test('renders learn react link', () => {
  render(<Render />);
  const linkElement = screen.getByText(/Olá Mundo!/i);
  expect(linkElement).toBeInTheDocument();
});