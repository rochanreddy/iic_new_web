import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import IICBackground from './components/iic-background';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutPreview from './components/AboutPreview';
import IICRoadmap from './components/IICRoadmap';
import CollaborationsPartners from './components/CollaborationsPartners';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import LazyWrapper from './components/LazyWrapper';
import SEOHead from './components/SEOHead';

// Lazy load components for better performance
const ContactUs = lazy(() => import('./components/ContactUs'));
const PhotoGallery = lazy(() => import('./components/PhotoGallery'));
const IEEventsPage = lazy(() => import('./components/IEEventsPage'));
const StartupPage = lazy(() => import('./components/StartupPage'));
const AboutUs = lazy(() => import('./components/AboutUs'));

// Home page component
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <IICRoadmap />
      <CollaborationsPartners />
      <Testimonials />
    </>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <SEOHead />
        <IICBackground>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={
              <LazyWrapper>
                <ContactUs />
              </LazyWrapper>
            } />
            <Route path="/gallery" element={
              <LazyWrapper>
                <PhotoGallery />
              </LazyWrapper>
            } />
            <Route path="/ie/events" element={
              <LazyWrapper>
                <IEEventsPage />
              </LazyWrapper>
            } />
            <Route path="/startup" element={
              <LazyWrapper>
                <StartupPage />
              </LazyWrapper>
            } />
            <Route path="/about" element={
              <LazyWrapper>
                <AboutUs />
              </LazyWrapper>
            } />
          </Routes>
          <Footer />
        </IICBackground>
      </Router>
    </HelmetProvider>
  );
}

export default App;