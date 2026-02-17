import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import VisionMission from './pages/VisionMission';
import Programs from './pages/Programs';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import News from './pages/News';
import Contact from './pages/Contact';
import Team from './pages/Team';
import PresidentMessage from './pages/PresidentMessage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vision-mission" element={<VisionMission />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<Services />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/:id" element={<Programs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/president-message" element={<PresidentMessage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
