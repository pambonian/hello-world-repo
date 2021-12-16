import { render, screen } from '@testing-library/react';
import Forum from './Forum'

test('renders dashboard tag', () => {
  render(<Forum />);
  const spanElement = screen.getByText(/Dashboard/i);
  expect(spanElement).toBeInTheDocument();
});
