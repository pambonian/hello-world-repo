import { render, screen } from '@testing-library/react';
import InstaAlbum from './InstaAlbum'

test('renders jeremy thomas credit', () => {
  render(<InstaAlbum />);
  const spanElement = screen.getByText(/Jeremy Thomas/i);
  expect(spanElement).toBeInTheDocument();
});

test('checks for steph curry post', () => {
    render(<InstaAlbum />);
    const spanElement = screen.getByText(/@stephcurry/i);
    expect(spanElement).toBeInTheDocument();
});

test('renders specific caption', () => {
    render(<InstaAlbum />);
    const spanElement = screen.getByText(/Scenic Route Belongs Here/i);
    expect(spanElement).toBeInTheDocument();
});




  
