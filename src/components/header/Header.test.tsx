import { screen, render } from '@testing-library/react';
import Header from '.';

describe('Tests On The Header Component', () => {
  it('displays the contact information on the header', () => {
    render(<Header />);
    const textElement = screen.getByText(/\+420 336 775 664/i);
    expect(textElement).toBeInTheDocument();
    const emailElemnt = screen.getByText(/info@freshnesecom.com/i);
    expect(emailElemnt).toBeInTheDocument();
  });
  it('displays the content of the main header', () => {
    render(<Header />);
    const logoElement = screen.getByTestId(/freshnesecom/i);
    expect(logoElement).toBeInTheDocument();
  });
});
