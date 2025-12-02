import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from './NotFound';

test('displays 404 error message and a functional link to the home page', () => {
  /* Must be wrapped in Router context because it contains a <Link> */
  render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  );

  /* 1. Check for the main error code (404) */
  const errorCode = screen.getByRole('heading', { name: /404/i });
  expect(errorCode).toBeInTheDocument();
  
  /* 2. Check for the descriptive error message */
  expect(screen.getByText(/The page you are looking for does not exist./i)).toBeInTheDocument();

  /* 3. Find the link/button directing the user home */
  const homeLink = screen.getByRole('link', { name: /Go to Home Page/i });
  expect(homeLink).toBeInTheDocument();
  
  /* 4. Verify the link targets the root path (/) */
  expect(homeLink).toHaveAttribute('href', '/');
  
  /* 5. Verify the link has the correct styling classes */
  expect(homeLink).toHaveClass('btn btn-primary btn-lg');
});