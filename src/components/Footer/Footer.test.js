import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component Tests', () => {
  const currentYear = new Date().getFullYear();
  const linkedInBaseUrl = 'https://www.linkedin.com/in/zach-fraser';
  const flaticonUrl = 'https://www.flaticon.com/free-icons/hardware';

  test('renders the correct copyright and attribution links', () => {
    render(<Footer />);
    
    /* Check for dynamic year and attribution link */
    const copyrightText = screen.getByText(new RegExp(`\\© ${currentYear} Zachary Fraser\. All Rights Reserved\.`, 'i'));
    expect(copyrightText).toBeInTheDocument();

    /* Check for Flaticon attribution link text and its href */
    const flaticonLink = screen.getByRole('link', { name: /Hardware icons created by meaicon - Flaticon/i });
    expect(flaticonLink).toBeInTheDocument();
    expect(flaticonLink).toHaveAttribute('href', flaticonUrl);
  });

  test('renders and validates the external LinkedIn link', () => {
    render(<Footer />);

    /* Check for the LinkedIn link using its accessible name */
    const linkedInLink = screen.getByRole('link', { name: /LinkedIn/i });
    expect(linkedInLink).toBeInTheDocument();

    /* Validate the full, protocol-correct URL */
    expect(linkedInLink).toHaveAttribute('href', linkedInBaseUrl);

    /* Validate security and UX attributes for external links (opens in new tab) */
    expect(linkedInLink).toHaveAttribute('target', '_blank');
    expect(linkedInLink).toHaveAttribute('rel', 'noopener noreferrer');
    
    /* Check that the surrounding text is present */
    expect(screen.getByText(/Connect with me on/i)).toBeInTheDocument();
  });
});