import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IICBackground from './components/iic-background';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutPreview from './components/AboutPreview';
import FeaturedEvents from './components/FeaturedEvents';
import KeyAchievements from './components/KeyAchievements';
import IICRoadmap from './components/IICRoadmap';
import CollaborationsPartners from './components/CollaborationsPartners';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';

// Home page component
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <FeaturedEvents />
      <KeyAchievements />
      <IICRoadmap />
      <CollaborationsPartners />
      <Testimonials />
    </>
  );
};

function App() {
  return (
    <Router>
      <IICBackground>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </IICBackground>
    </Router>
  );
}

export default App;