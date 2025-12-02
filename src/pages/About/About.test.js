import { render, screen } from '@testing-library/react';
import About from './About';

/* The actual string value returned by the mocks */
const ASSERTION_MOCK_PATH = 'test-file-stub.jpg'; 

jest.mock('../../assets/cool_dude.jpg', () => ASSERTION_MOCK_PATH);

describe('About Component Tests', () => {

  test('renders the main heading and profile image', () => {
    render(<About />);
    
    /* Check for the main heading */
    expect(screen.getByRole('heading', { name: /About Me/i })).toBeInTheDocument();
    
    /* Check for the profile image using its alt text */
    const profileImage = screen.getByAltText(/Zachary Fraser/i);
    expect(profileImage).toBeInTheDocument();
    
    /* Verify the image source path */
    expect(profileImage).toHaveAttribute('src', ASSERTION_MOCK_PATH);
  });

  test('renders various text snippets', () => {
    render(<About />);

    /* Check for professional focus text */
    const professionalText = screen.getByText(
      /passionate computer engineering student with a focus on embedded systems/i
    );
    expect(professionalText).toBeInTheDocument();
    
    const scholarshipText = screen.getByText(
      /\$100,000 Schulich Leader Scholarship/i
    );
    expect(scholarshipText).toBeInTheDocument();

    /* Check for the "full stack" embedded development mention */
    expect(screen.getByText(/full stack' embedded development/i)).toBeInTheDocument();

    /* Check for the personal focus */
    expect(screen.getByText(/I am a musician and orchestral percussionist/i)).toBeInTheDocument();

    /* Check for the closing thank you statement */
    expect(screen.getByText(/Thank you for visiting my site/i)).toBeInTheDocument();
  });
});