import { render, screen } from '@testing-library/react';
import HeroBanner from './HeroBanner';

/* The actual string value returned by the mocks */
const ASSERTION_MOCK_PATH = 'test-file-stub.png'; 

jest.mock('../../assets/Circuit_Background.png', () => ASSERTION_MOCK_PATH);

describe('HeroBanner Component Tests', () => {

  test('renders the main title text', () => {
    render(<HeroBanner />);
    
    const titleText = screen.getByRole('heading', { 
      name: /ZACHARY FRASER \| Embedded Systems/i 
    });
    
    /* Check if the main <h1> title is present */
    expect(titleText).toBeInTheDocument();
  });

  test('applies the correct background image styling', () => {
    render(<HeroBanner />);
    
    /* Find the main container div */
    const bannerContainer = screen.getByTestId('hero-banner-container');
    
    /* Check if the backgroundImage style is correctly set using the imported path */
    expect(bannerContainer).toHaveStyle(`background-image: url(${ASSERTION_MOCK_PATH})`);
    
    /* Check for other required background styling properties */
    expect(bannerContainer).toHaveStyle('background-size: cover');
    expect(bannerContainer).toHaveStyle('background-position: center');
    expect(bannerContainer).toHaveStyle('background-repeat: no-repeat');
  });
});