import { render, screen, fireEvent } from '@testing-library/react';
import ProjectCard from './ProjectCard';

describe('ProjectCard Component Tests', () => {
  /* Define a mock project object to pass as props */
  const mockProject = {
    id: 1,
    title: 'Test Project',
    category: 'Testing',
    image: '/images/test.jpg', /* Mock image path */
    description: 'A project description.',
  };
  
  /* Define a mock function to track if the click handler is called */
  const mockOnClick = jest.fn();

  test('renders project details correctly', () => {
    render(
      <ProjectCard 
        project={mockProject} 
        onClick={mockOnClick} 
      />
    );
    
    /* Check if the project title and category are displayed */
    expect(screen.getByText(mockProject.title)).toBeInTheDocument();
    expect(screen.getByText(mockProject.category)).toBeInTheDocument();
    
    /* Check if the image renders with the correct source and alt text */
    const projectImage = screen.getByAltText(mockProject.title);
    expect(projectImage).toBeInTheDocument();
    expect(projectImage).toHaveAttribute('src', mockProject.image);
    
    /* Check for the "View Details" overlay text */
    expect(screen.getByText(/View Details/i)).toBeInTheDocument();
  });

  test('calls the onClick handler with the project data when clicked', () => {
    render(
      <ProjectCard 
        project={mockProject} 
        onClick={mockOnClick} 
      />
    );
    
    /* Find the main card element (which has the onClick handler) */
    const cardElement = screen.getByText(mockProject.title).closest('.project-card');
    expect(cardElement).toBeInTheDocument(); /* Ensure we found the clickable element */
    
    /* Simulate a user click on the card */
    fireEvent.click(cardElement);
    
    /* Assert that the mock function was called exactly once */
    expect(mockOnClick).toHaveBeenCalledTimes(1);
    
    /* Assert that the mock function was called with the correct project object */
    expect(mockOnClick).toHaveBeenCalledWith(mockProject);
  });

  test('contains Bootstrap modal attributes', () => {
    render(
      <ProjectCard 
        project={mockProject} 
        onClick={mockOnClick} 
      />
    );

    /* Find the main card element */
    const cardElement = screen.getByText(mockProject.title).closest('.project-card');

    /* Check for necessary Bootstrap attributes for modal trigger */
    expect(cardElement).toHaveAttribute('data-bs-toggle', 'modal');
    expect(cardElement).toHaveAttribute('data-bs-target', '#projectModal');
  });
});