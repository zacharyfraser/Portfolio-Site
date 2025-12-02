import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

function App() {
  return (
    // 1. Wrap your whole app in BrowserRouter
    <BrowserRouter> 
      <div className="d-flex flex-column min-vh-100">
        <Header /> 
        {/* 2. Define the main content area */}
          {/* 3. Define the available routes */}
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />

              {/* 4. Catch-all route for 404 Not Found */}
              <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;