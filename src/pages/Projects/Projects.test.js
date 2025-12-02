import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Projects from './Projects';

/* The actual string value returned by the mocks (used for image assertions if needed) */
const ASSERTION_MOCK_PATH = 'test-file-stub.jpg';

/* Mock the image imports since Jest doesn't process assets */
jest.mock('../../assets/projects/Brushless_Controller.jpg', () => ASSERTION_MOCK_PATH);
jest.mock('../../assets/projects/Windbound_PCB.png', () => ASSERTION_MOCK_PATH);
jest.mock('../../assets/projects/UART_Forwarder_Top.png', () => ASSERTION_MOCK_PATH);


/* Mock the child component ProjectCard */
jest.mock('../../components/ProjectCard/ProjectCard', () => {
    return function MockProjectCard({ project, onClick }) {
        return (
            <div 
                data-testid={`project-card-${project.id}`} 
                onClick={() => onClick(project)}
            >
                {project.title}
            </div>
        );
    };
});

describe('Projects Component Tests', () => {

    test('renders main heading and all project cards', () => {
        render(<Projects />);

        /* Check for the main page heading */
        expect(screen.getByRole('heading', { name: /My Projects/i })).toBeInTheDocument();

        /* Check that all three project titles are rendered (via the mocked ProjectCard) */
        expect(screen.getByText(/Brushless Motor Driver/i)).toBeInTheDocument();
        expect(screen.getByText(/Autonomous Sailboat PCB/i)).toBeInTheDocument();
        expect(screen.getByText(/UART Message Hub/i)).toBeInTheDocument();
    });
});