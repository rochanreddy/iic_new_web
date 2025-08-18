import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import VisionMission from './components/VisionMission';
import IICRoadmap from './components/IICRoadmap';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import LazyWrapper from './components/LazyWrapper';
import SEOHead from './components/SEOHead';
import ScrollToTop from './components/ScrollToTop';

// Lazy load components for better performance
const ContactUs = lazy(() => import('./components/ContactUs'));
const PhotoGallery = lazy(() => import('./components/PhotoGallery'));
const IEEventsPage = lazy(() => import('./components/IEEventsPage'));
const FacultyCoordinators = lazy(() => import('./components/FacultyCoordinators'));
const IECourses = lazy(() => import('./components/IECourses'));
const StartupPage = lazy(() => import('./components/StartupPage'));
const AboutUs = lazy(() => import('./components/AboutUs'));
const RegisterPage = lazy(() => import('./components/RegisterPage'));
const IEAmbassador = lazy(() => import('./components/IEAmbassador'));

// Home page component
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <VisionMission />
      <IICRoadmap />
      <Testimonials />
    </>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <SEOHead />
        <ScrollToTop />
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
          <Route path="/ie/coordinators" element={
            <LazyWrapper>
              <FacultyCoordinators />
            </LazyWrapper>
          } />
          <Route path="/ie/courses" element={
            <LazyWrapper>
              <IECourses />
            </LazyWrapper>
          } />
          <Route path="/test-events" element={<IEEventsPage />} />
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
          <Route path="/register" element={
            <LazyWrapper>
              <RegisterPage />
            </LazyWrapper>
          } />
          <Route path="/ie/ambassador" element={
            <LazyWrapper>
              <IEAmbassador />
            </LazyWrapper>
          } />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;