import React from 'react';

function Resume() {
  return (
    <div className="container py-5">
      <h1>Zachary Fraser</h1>
      <p>Phone: <strong>(902)577-6034</strong></p>
      <p>Email: <strong>zach.fraser88@gmail.com</strong></p>
      <p>
        <a href="https://www.linkedin.com/in/zach-fraser" target="_blank" rel="noopener noreferrer"><strong>LinkedIn</strong></a> |&nbsp; 
        <a href="https://www.github.com/zacharyfraser" target="_blank" rel="noopener noreferrer"><strong>GitHub</strong></a>
      </p>

      <h2>Education</h2>
      <p><strong>Bachelor of Engineering, Electrical Engineering – Computer</strong><br />
      Dalhousie University (2020 – 2025)</p>

      <h2>Awards</h2>
      <ul>
        <li><strong>$100,000 Schulich Leader Scholarship</strong></li>
        <li><strong>Engineers Nova Scotia Award</strong></li>
        <li><strong>University of Toronto Engineering Award</strong></li>
        <li><strong>Canadian Acoustical Society Award</strong></li>
        <li>2× <strong>Canada-Wide Science Fair Finalist</strong></li>
        <li><strong>CB Regional Science Fair Platinum Award</strong></li>
      </ul>

      <h2>Hard Skills</h2>
      <ul>
        <li><strong>Programming Languages:</strong> C (10+ Major Projects), Python (7+ Major Projects)</li>
        <li><strong>Protocols:</strong> I2C, UART, SPI, Ethernet, USB 2.0</li>
        <li><strong>Architectures:</strong> ARM, AVR, Xtensa</li>
        <li><strong>CAD Programs:</strong> Altium/Eagle EDA (5+ Major Projects), LTSpice (5 Major Projects)</li>
        <li><strong>Version Control:</strong> Git/GitHub/GitLab (7+ Major Projects)</li>
        <li><strong>Equipment:</strong> Oscilloscopes, Soldering (0402/QFN/QFP)</li>
      </ul>

      <h2>Soft Skills</h2>
      <ul>
        <li><strong>Leadership:</strong> Regularly recognized for leadership qualities, such as the <strong>$100,000 Schulich Leader Scholarship</strong>.</li>
        <li><strong>Independent:</strong> Consistently acknowledged for providing valuable contributions with minimal guidance</li>
        <li><strong>Attention to Detail:</strong> Committed to comprehensive problem definition and testing</li>
      </ul>

      <h2>Experience</h2>
      
      <details>
        <summary><strong>Electrical PD Coop – Starfish Medical</strong> <br />(May–Aug 2025)</summary>
        <ul>
          <li>Developed firmware for an <strong>MS Teams integrated nameplate</strong>, including:
            <ul>
              <li>Redesigned the <strong>capacitive touch sensing</strong> system, improving touch reliability from 0–50% to <strong>99%</strong> across all grounding conditions</li>
              <li>Engineered a novel use of the <strong>SPI peripheral</strong> to drive <strong>45 RGB LEDs</strong> over a proprietary high-speed interface</li>
              <li>Designed and implemented a communication protocol with a <strong>.NET desktop application</strong> to synchronize nameplate colour with Microsoft Teams status</li>
            </ul>
          </li>
          <li>Designed a <strong>brushless linear actuator and speed controller</strong> for a material fatigue testing system:
            <ul>
              <li>Created the closed-loop motor controller schematic and routed the PCB in <strong>Altium</strong>, optimizing for manufacturability and signal integrity</li>
              <li>Implemented <strong>PID-based position and speed control</strong> using digital biquad filtering, hall-effect sensors, and a magnetic encoder</li>
              <li>Developed a <strong>multi-threaded Python API</strong> for serial communication with the controller</li>
              <li>Built a <strong>Python Tkinter GUI</strong> to program test routines, visualize actuator response, and log fatigue test data</li>
            </ul>
          </li>
          <li>Contributed to additional engineering projects:
            <ul>
              <li>Implemented a <strong>Python-based real-time laser leveling GUI</strong>, reducing optical bench setup time by <strong>90%+</strong></li>
              <li>Designed and assembled a <strong>single-fault-tolerant power supply</strong> for in-house laser testing</li>
              <li>Automated product verification by developing <strong>Python scripts</strong> to control a 3-axis gantry system</li>
            </ul>
          </li>
        </ul>
      </details>

      <details>
        <summary><strong>Electrical R&amp;D Coop – Ocean Sonics LTD</strong> <br />(Jan–May, Sep–Dec 2024)</summary>
        <ul>
          <li>Designed two generations of a custom <strong>PCB</strong>, leading the full cycle from schematic to validation:
            <ul>
              <li>Integrated <strong>STM32 Cortex-M0 and M33 microcontrollers</strong> with supporting peripherals</li>
              <li>Implemented high-efficiency, low-load <strong>buck converters</strong> achieving &gt;70% efficiency at 1–10 mA</li>
              <li>Incorporated <strong>Ethernet switching</strong>, external sensor interfaces, and robust power distribution</li>
            </ul>
          </li>
          <li>Architected and implemented firmware using a custom <strong>superloop architecture</strong>, balancing ultra-low-power operation with reliable scheduling</li>
          <li>Led a product <strong>RMA investigation</strong> that identified operating-range design errors, improving product reliability</li>
          <li>Developed <strong>Python scripts</strong> to improve internal workflows:
            <ul>
              <li>Automated test routines by interfacing with <strong>laboratory instruments</strong></li>
              <li>Streamlined inventory management with custom scripting solutions, reducing manual errors</li>
            </ul>
          </li>
          <li>Drove migration of the engineering team’s <strong>EDA workflow</strong> from Eagle to Fusion Electronics</li>
          <li>Created <strong>QA automation tools</strong> for beamforming array validation and large-scale data collection monitoring</li>
        </ul>
      </details>

      <details>
        <summary><strong>Electrical &amp; Software Team Lead – DalMAST Autonomous Sailboat</strong> <br />(2024–Present)</summary>
        <ul>
          <li>Designed and routed a custom <strong>STM32 Cortex-M33 PCB</strong> integrating:
            <ul>
              <li><strong>H-Bridge motor drivers</strong> for sail, rudder, and flap actuation</li>
              <li><strong>Magnetic angle encoders</strong> for precise position sensing</li>
              <li><strong>XBee radio</strong> for long-range wireless communication</li>
              <li><strong>Buck converters</strong> and onboard power regulation</li>
              <li>Interfaces for external <strong>environmental sensors</strong></li>
              <li>A high-speed <strong>communication bus</strong> to a Raspberry Pi for mission logic</li>
            </ul>
          </li>
          <li>Assembled and tested the hardware, performing full <strong>board bring-up and validation</strong></li>
          <li>Implemented real-time firmware in <strong>C with RTOS</strong>:
            <ul>
              <li>Developed <strong>PI feedback loops</strong> for motor control, ensuring fast and stable sail and flap response</li>
              <li>Integrated multiple sensors and communication channels with <strong>deterministic timing</strong></li>
            </ul>
          </li>
          <li>Architected the overall <strong>electrical and software system</strong>, ensuring reliable subsystem integration</li>
          <li>Coordinated and mentored the <strong>software sub-team</strong>, managing task distribution, code reviews, and collaborative development</li>
          <li>Delivered a robust and extensible platform supporting <strong>autonomous navigation</strong> and competition-ready performance</li>
        </ul>
      </details>

      <details>
        <summary><strong>Co-Founder &amp; Team Lead – Dal Aero Design</strong> <br />(Summer 2025 – Present)</summary>
        <ul>
          <li><strong>Co-founded Atlantic Canada's first Aerospace Design Team</strong>, establishing the foundation for long-term student involvement in aircraft design and competition</li>
          <li><strong>Organize and lead weekly team meetings</strong>, ensuring effective collaboration across sub-teams and maintaining alignment with project goals</li>
          <li>Engage with faculty advisors and university administration to secure mentorship, institutional support, and resources</li>
          <li>Lead <strong>outreach initiatives</strong>, including recruiting new members and securing <strong>sponsorships</strong> from industry partners</li>
          <li><strong>Coordinate and track progress</strong> across structural, aerodynamics, stability, and avionics sub-teams to ensure timely task completion</li>
          <li><strong>Direct the preliminary design</strong> of the team’s first prototype airplane, defining requirements, researching design options, and guiding system integration</li>
          <li>Oversaw creation of the team’s first <strong>public website</strong> and branding materials to support recruitment and fundraising</li>
          <li>Applied <strong>systems engineering principles</strong>, including requirement definition, research, and design reviews, to establish a structured and professional engineering process</li>
        </ul>
      </details>

      <h2>Projects</h2>

      <details>
        <summary>Autonomous Robot</summary>
        <ul>
          <li>Developed an <b>autonomous pathfinding robot</b> using <b>ROS2</b> in <b>C++</b> and <b>Python</b>.</li>
          <li>Integrated <b>LIDAR</b>, <b>IMU</b>, and wheel encoder data through <b>AMCL algorithms</b> for robust localization and navigation.</li>
          <li>Implemented modular software nodes for sensor fusion, mapping, and obstacle avoidance.</li>
          <li>Demonstrated reliable indoor navigation through dynamic environments with moving obstacles.</li>
        </ul>
      </details>

      <details>
        <summary>XM23P CPU Emulator</summary>
        <ul>
          <li>Designed and implemented a cycle-accurate <b>emulator</b> for the <b>XM23P CPU</b> in <b>C</b>.</li>
          <li>Supported <b>program loading</b>, <b>instruction decoding</b>, <b>execution pipeline</b>, and <b>exception handling</b>.</li>
          <li>Validated correctness by running assembly test programs and verifying register/memory states.</li>
          <li>Created a modular codebase to allow extensions for new instructions.</li>
        </ul>
      </details>

      <details>
        <summary>Laser Tuner – A Novel Approach to Membranophonic Pitch Detection</summary>
        <ul>
          <li>Designed and built a <b>drum tuner</b> detecting pitch by analyzing <b>reflected laser light</b> using the <b>Arduino</b> platform.</li>
          <li>Implemented algorithms to measure membrane vibrations and map resonance frequency to pitch.</li>
          <li>Published findings in the <b>Canadian Science Fair Journal</b>, with recognition for originality.</li>
          <li>Received several <b>national awards</b> at the Canada-Wide Science Fair for innovation in acoustics.</li>
        </ul>
      </details>

      <details>
        <summary>Autonomous Vehicle Simulation</summary>
        <ul>
          <li>Developed an <b>autonomous delivery vehicle simulation</b> entirely in <b>C</b>.</li>
          <li>Created a lightweight <b>ASCII graphics engine</b> for visualization of vehicle state and map layout.</li>
          <li>Implemented a <b>custom A*</b> pathfinding algorithm with heuristic optimization for speed and efficiency.</li>
          <li>Simulated delivery tasks across grid-based maps with dynamic obstacles and route re-planning.</li>
        </ul>
      </details>

      <details>
        <summary>Intruder Detection System</summary>
        <ul>
          <li>Designed a <b>home security system</b> detecting intrusion at multiple access points.</li>
          <li>Built a working embedded prototype around an <b>Atmega168p microcontroller</b> with discrete sensors.</li>
          <li>Developed low-level firmware in <b>C</b> for real-time detection and alarm activation.</li>
          <li>Recognized for <b>best feature set</b> and <b>most aesthetic presentation</b> among peer projects.</li>
        </ul>
      </details>

      <details>
        <summary>Frequency-Specific Attenuation in Soundproofing</summary>
        <ul>
          <li>Designed and executed experiments to measure <b>sound attenuation</b> across the audible spectrum (20 Hz – 20 kHz).</li>
          <li>Tested a variety of materials, recording <b>frequency-specific absorption</b> and transmission loss.</li>
          <li>Performed signal analysis with microphones and FFT-based frequency decomposition.</li>
          <li>Generated data visualizations demonstrating how different materials isolate specific frequency bands.</li>
        </ul>
      </details>
    </div>
  );
}

export default Resume;