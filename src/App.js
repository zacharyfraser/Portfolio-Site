import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import Projects from './pages/Projects/Projects';
import Resume from './pages/Resume/Resume';

function App() {
  return (
    /* Wrap your whole app in BrowserRouter */
    <BrowserRouter> 
      <div className="d-flex flex-column min-vh-100">
        <Header /> 
        {/* Define the main content area */}
          {/* Define the available routes */}
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />

              {/* Catch-all route for 404 Not Found */}
              <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;