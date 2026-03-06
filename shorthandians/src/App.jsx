import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Achievements from './components/Achievements';
import WhyChoose from './components/WhyChoose';
import Courses from './components/Courses';
import PracticePreview from './components/PracticePreview';
import PracticeDashboard from './components/PracticeDashboard';
import DictationLibrary from './components/DictationLibrary';
import LiveTyping from './components/LiveTyping';
import ProgressAnalytics from './components/ProgressAnalytics';
import Leaderboard from './components/Leaderboard';
import MockTest from './components/MockTest';
import AppPromotion from './components/AppPromotion';
import SuccessHighlights from './components/SuccessHighlights';
import GoogleReviews from './components/GoogleReviews';
import About from './components/About';
import OfflineCoaching from './components/OfflineCoaching';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

// New Advanced Features
import AdvancedDictation from './components/AdvancedDictation';
import AudioLibrary from './components/AudioLibrary';
import SpeedTraining from './components/SpeedTraining';
import PracticeNotebook from './components/PracticeNotebook';
import ExtendedDashboard from './components/ExtendedDashboard';

// Admin Panel
import AdminPanel from './components/AdminPanel';


export default function App() {
  const [isAdminView, setIsAdminView] = useState(false);

  if (isAdminView) {
    return (
      <div className="relative">
        <button
          onClick={() => setIsAdminView(false)}
          className="fixed bottom-6 right-6 z-50 bg-gray-900 text-white px-6 py-3 rounded-full font-bold shadow-2xl hover:bg-gray-800 border-4 border-white transition-all transform hover:scale-105"
        >
          View Main Site
        </button>
        <AdminPanel />
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <button
        onClick={() => setIsAdminView(true)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white px-6 py-3 rounded-full font-bold shadow-2xl hover:bg-blue-700 border-4 border-white transition-all transform hover:scale-105"
      >
        View Admin Panel
      </button>

      <Navbar />
      <Hero />
      <Achievements />
      <WhyChoose />
      <Courses />

      {/* New Stenography Practice Platform Sections */}
      <PracticeDashboard />
      <ExtendedDashboard />

      <DictationLibrary />
      <AudioLibrary />
      <AdvancedDictation />
      <PracticeNotebook />
      <SpeedTraining />

      <MockTest />
      <LiveTyping />
      <ProgressAnalytics />
      <Leaderboard />
      <AppPromotion />

      <PracticePreview />
      <SuccessHighlights />
      <GoogleReviews />
      <About />
      <OfflineCoaching />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}
