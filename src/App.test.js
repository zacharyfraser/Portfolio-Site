import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

/* Mocking Child Components */
jest.mock('./components/Header/Header', () => {
  return () => <div data-testid="mock-header">Mock Header</div>;
});
jest.mock('./components/Footer/Footer', () => {
  return () => <div data-testid="mock-footer">Mock Footer</div>;
});
jest.mock('./pages/Home/Home', () => {
  return () => <div data-testid="mock-home-page">Home Page Content</div>;
});
jest.mock('./pages/About/About', () => {
  return () => <div data-testid="mock-about-page">About Page Content</div>;
});
jest.mock('./pages/Resume/Resume', () => {
  return () => <div data-testid="mock-resume-page">Resume Page Content</div>;
});
jest.mock('./pages/Projects/Projects', () => {
  return () => <div data-testid="mock-projects-page">Projects Page Content</div>;
});
jest.mock('./pages/NotFound/NotFound', () => {
  return () => <div data-testid="mock-404-page">404 Not Found Page</div>;
});

jest.mock('react-router-dom', () => {
    /* We use jest.requireActual to get the real MemoryRouter for use in the tests */
    const originalModule = jest.requireActual('react-router-dom');

    return {
        ...originalModule,
        /* Mock BrowserRouter to pass through children without creating a new context */
        BrowserRouter: ({ children }) => <div>{children}</div>,
    };
});

describe('App Component and Routing Tests', () => {
  
  /* Verifies that the Header and Footer load */
  test('renders the Header and Footer components', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    
    expect(screen.getByTestId('mock-header')).toBeInTheDocument();
    expect(screen.getByTestId('mock-footer')).toBeInTheDocument();
  });

  /* Verifies the default route (/) loads the Home page */
  test('navigates to the Home page for the default route (/)', () => {
    render(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>);

    expect(screen.getByTestId('mock-home-page')).toBeInTheDocument();
    expect(screen.queryByTestId('mock-about-page')).not.toBeInTheDocument();
  });

  /* Verifies the /about route loads the About page */
  test('navigates to the About page for the /about route', () => {
    render(<MemoryRouter initialEntries={['/about']}><App /></MemoryRouter>);

    expect(screen.getByTestId('mock-about-page')).toBeInTheDocument();
    expect(screen.queryByTestId('mock-home-page')).not.toBeInTheDocument();
  });

  /* Verifies the /resume route loads the Resume page */
  test('navigates to the Resume page for the /resume route', () => {
    render(<MemoryRouter initialEntries={['/resume']}><App /></MemoryRouter>);

    expect(screen.getByTestId('mock-resume-page')).toBeInTheDocument();
  });

  /* Verifies the /projects route loads the Projects page */
  test('navigates to the Projects page for the /projects route', () => {
    render(<MemoryRouter initialEntries={['/projects']}><App /></MemoryRouter>);

    expect(screen.getByTestId('mock-projects-page')).toBeInTheDocument();
  });

  /* Verifies the catch-all route loads the NotFound page */
  test('navigates to the 404 page for an unknown route', () => {
    render(<MemoryRouter initialEntries={['/unknown-route-123']}><App /></MemoryRouter>);

    expect(screen.getByTestId('mock-404-page')).toBeInTheDocument();
    expect(screen.queryByTestId('mock-home-page')).not.toBeInTheDocument();
  });
});