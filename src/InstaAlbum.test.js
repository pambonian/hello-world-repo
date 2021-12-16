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

test('renders specific username', () => {
    render(<InstaAlbum />);
    const spanElement = screen.getByText(/@mike/i);
    expect(spanElement).toBeInTheDocument();
});

test('renders search text in search bar', () => {
    render(<InstaAlbum />);
    const spanElement = screen.getByText(/search/i);
    expect(spanElement).toBeInTheDocument();
});

test('renders license information at bottom of page', () => {
    render(<InstaAlbum />);
    const spanElement = screen.getByText(/The website content is licensed/i);
    expect(spanElement).toBeInTheDocument();
});

test('renders CC info', () => {
    render(<InstaAlbum />);
    const spanElement = screen.getByText(/CC BY NC SA/i);
    expect(spanElement).toBeInTheDocument();
});

test('renders specific caption', () => {
    render(<InstaAlbum />);
    const spanElement = screen.getByText(/dogma/i);
    expect(spanElement).toBeInTheDocument();
});

test('renders specific testId', () => {
    render(<InstaAlbum />);
    const spanElement = screen.getByTestId('blurb');
    expect(spanElement).toBeInTheDocument();
});

test('renders specific testId', () => {
    render(<InstaAlbum />);
    const spanElement = screen.getByTitle("zoinks");
    expect(spanElement).toBeInTheDocument();
});




  
