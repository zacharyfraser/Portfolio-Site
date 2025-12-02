import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

const renderWithRouter = (ui) => {
  return render(ui, { wrapper: MemoryRouter });
};

test('renders the name, logo, and all navigation links', () => {
  renderWithRouter(<Header />);
  
  /* Check for the main name text */
  const brandName = screen.getByText(/Zachary Fraser/i);
  expect(brandName).toBeInTheDocument();
  
  /* Check for the logo image using its alt text */
  const logoImage = screen.getByAltText(/Circuit Chip Logo/i);
  expect(logoImage).toBeInTheDocument();
  
  /* Check that the logo links to the home page (it's the first Link to "/") */
  const logoLink = screen.getByRole('link', { name: /Circuit Chip Logo/i });
  expect(logoLink).toHaveAttribute('href', '/');

  /* Get all navigation links by their accessible role 'link' */
  const homeLink = screen.getByRole('link', { name: /home/i });
  const aboutLink = screen.getByRole('link', { name: /about/i });
  const resumeLink = screen.getByRole('link', { name: /resume/i });
  const projectsLink = screen.getByRole('link', { name: /projects/i });
  
  /* Check if all links are present */
  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(resumeLink).toBeInTheDocument();
  expect(projectsLink).toBeInTheDocument();

  /* Verify each link targets the correct path */
  expect(homeLink).toHaveAttribute('href', '/');
  expect(aboutLink).toHaveAttribute('href', '/about');
  expect(resumeLink).toHaveAttribute('href', '/resume');
  expect(projectsLink).toHaveAttribute('href', '/projects');
});