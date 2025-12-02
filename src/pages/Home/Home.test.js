import { render, screen } from '@testing-library/react';
import Home from './Home';

/* The actual string value returned by the mocks */
const ASSERTION_MOCK_PATH = 'test-file-stub.png'; 

/* Mock the image imports using the string literal directly to avoid hoisting errors */
jest.mock('../../assets/Windbound_PCB.png', () => ASSERTION_MOCK_PATH);
jest.mock('../../assets/MCU_Routing.png', () => ASSERTION_MOCK_PATH);
jest.mock('../../assets/Decode_Logic.png', () => ASSERTION_MOCK_PATH);

/* Mock the HeroBanner component to keep the Home test focused on its own logic */
jest.mock('../../components/HeroBanner/HeroBanner', () => {
    return () => <div data-testid="mock-hero-banner">Mock Hero Banner</div>;
});

describe('Home Component Tests', () => {

    test('renders the introductory text and the HeroBanner mock', () => {
        render(<Home />);

        /* Check for the main introductory text (using a partial phrase) */
        const introText = screen.getByText(
            /I am a driven computer engineering student focused on embedded systems/i
        );
        expect(introText).toBeInTheDocument();

        /* Verify that the HeroBanner component has been rendered */
        expect(screen.getByTestId('mock-hero-banner')).toBeInTheDocument();
    });

    test('renders the three expertise squares with titles and images', () => {
        render(<Home />);

        const titles = ['PCB Design', 'System Integration', 'Firmware Architecture'];
        const altTexts = ['PCB Design Icon', 'System Integration Icon', 'Firmware Architecture Icon'];

        /* Check if all three titles are present */
        titles.forEach(title => {
            expect(screen.getByText(title)).toBeInTheDocument();
        });

        /* Check if all three images are present and have correct alt text */
        altTexts.forEach(alt => {
            const image = screen.getByAltText(alt);
            expect(image).toBeInTheDocument();
            /* Verify that the images are using the mocked path */
            expect(image).toHaveAttribute('src', ASSERTION_MOCK_PATH);
        });
    });

    test('renders the "View My Projects" link and validates its path', () => {
        render(<Home />);

        /* Find the link by its accessible name */
        const projectsLink = screen.getByRole('link', { name: /View My Projects/i });

        /* Verify the link is present */
        expect(projectsLink).toBeInTheDocument();

        /* Verify the link targets the correct internal route */
        expect(projectsLink).toHaveAttribute('href', '/projects');
        
        /* Verify the link has the correct styling class (gradient border) */
        expect(projectsLink).toHaveClass('btn btn-primary btn-lg gradient-border-wrapper');
    });
});