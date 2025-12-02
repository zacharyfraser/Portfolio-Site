import { render, screen } from '@testing-library/react';
import Resume from './Resume';

describe('Resume Component Tests', () => {

  test('renders contact information and external links', () => {
    render(<Resume />);

    /* Check for name and contact details */
    expect(screen.getByRole('heading', { name: /Zachary Fraser/i, level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/\(902\)577-6034/i)).toBeInTheDocument();
    expect(screen.getByText(/zach\.fraser88@gmail\.com/i)).toBeInTheDocument();

    /* Check for external links (LinkedIn and GitHub) */
    const linkedInLink = screen.getByRole('link', { name: /LinkedIn/i });
    expect(linkedInLink).toBeInTheDocument();
    expect(linkedInLink).toHaveAttribute('href', 'https://www.linkedin.com/in/zach-fraser');
    expect(linkedInLink).toHaveAttribute('target', '_blank');

    const githubLink = screen.getByRole('link', { name: /GitHub/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://www.github.com/zacharyfraser');
    expect(githubLink).toHaveAttribute('target', '_blank');
  });

  test('renders all major section headings', () => {
    render(<Resume />);

    const headings = [
      'Education', 'Awards', 'Hard Skills', 'Soft Skills', 
      'Experience', 'Projects'
    ];

    headings.forEach(name => {
      /* Check that each heading (level 2) is present */
      expect(screen.getByRole('heading', { name: new RegExp(name, 'i'), level: 2 })).toBeInTheDocument();
    });
  });

  test('renders content within Education and Awards sections', () => {
    render(<Resume />);

    /* Check Education details */
    expect(screen.getByText(/Bachelor of Engineering, Electrical Engineering/i)).toBeInTheDocument();
    expect(screen.getByText(/Dalhousie University \(2020 – 2025\)/i)).toBeInTheDocument();

    /* Check for specific award mentions */
    const schullichAwards = screen.getAllByText(/\$100,000 Schulich Leader Scholarship/i);
    expect(schullichAwards.length).toBeGreaterThanOrEqual(2);
    expect(screen.getByText(/Engineers Nova Scotia Award/i)).toBeInTheDocument();
    expect(screen.getByText(/Canada-Wide Science Fair Finalist/i)).toBeInTheDocument();
  });

  test('renders and verifies content within the experience/details sections', () => {
    render(<Resume />);

    /* Check for the summary text for Starfish Medical */
    const starfishSummary = screen.getByText(/Electrical PD Coop – Starfish Medical/i);
    expect(starfishSummary).toBeInTheDocument();
    
    /* Since <details> starts collapsed, we check for unique content after expanding */
    /* Check for text that is unique to the job description to ensure the section is present */
    const reliabilityText = screen.getByText(/improving touch reliability from 0–50%/i);
    expect(reliabilityText).toBeInTheDocument();
    
    /* Check for unique content in the Ocean Sonics experience */
    const oceanSonicsSummary = screen.getByText(/Electrical R&D Coop – Ocean Sonics LTD/i);
    expect(oceanSonicsSummary).toBeInTheDocument();
    const oceanSonicsTech = screen.getByText(/Implemented high-efficiency, low-load/i);
    expect(oceanSonicsTech).toBeInTheDocument();
  });

  test('renders and verifies content within the projects/details sections', () => {
    render(<Resume />);

    /* Check for project summary titles */
    expect(screen.getByText(/Autonomous Robot/i)).toBeInTheDocument();
    expect(screen.getByText(/XM23P CPU Emulator/i)).toBeInTheDocument();

    /* Check for unique content within the Autonomous Robot project */
    const robotTech = screen.getByText(/Implemented modular software nodes for sensor fusion, mapping, and obstacle avoidance./i);
    expect(robotTech).toBeInTheDocument();
    
    /* Check for unique content within the XM23P CPU Emulator project */
    const emulatorTech = screen.getByText(/Validated correctness by running assembly test programs and verifying register/i);
    expect(emulatorTech).toBeInTheDocument();
  });
});