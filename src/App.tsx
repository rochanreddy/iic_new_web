import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IICBackground from './components/iic-background';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutPreview from './components/AboutPreview';
import KeyAchievements from './components/KeyAchievements';
import IICRoadmap from './components/IICRoadmap';
import CollaborationsPartners from './components/CollaborationsPartners';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import PhotoGallery from './components/PhotoGallery';
import TeamSection from './components/TeamSection';
import AchievementsPage from './components/AchievementsPage';
import StartupPage from './components/StartupPage';

// Home page component
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutPreview />
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
          <Route path="/gallery" element={<PhotoGallery />} />
          <Route path="/teams" element={<TeamSection />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/startup" element={<StartupPage />} />
        </Routes>
        <Footer />
      </IICBackground>
    </Router>
  );
}

export default App;