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

function App() {
  return (
    <IICBackground>
      <Navbar />
      <HeroSection />
      <AboutPreview />
      <FeaturedEvents />
      <KeyAchievements />
      <IICRoadmap />
      <CollaborationsPartners />
      <Testimonials />
      <Footer />
    </IICBackground>
  );
}

export default App;