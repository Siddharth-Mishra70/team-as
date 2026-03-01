import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Achievements from './components/Achievements';
import WhyChoose from './components/WhyChoose';
import Courses from './components/Courses';
import PracticePreview from './components/PracticePreview';
import SuccessHighlights from './components/SuccessHighlights';
import About from './components/About';
import OfflineCoaching from './components/OfflineCoaching';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Achievements />
      <WhyChoose />
      <Courses />
      <PracticePreview />
      <SuccessHighlights />
      <About />
      <OfflineCoaching />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}
