import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';

function App() {
  return (
    // 1. Wrap your whole app in BrowserRouter
    <BrowserRouter> 
      <Header /> 
      {/* 2. Define the main content area */}
      <main>
        {/* 3. Define the available routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />

          {/* 4. Catch-all route for 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;