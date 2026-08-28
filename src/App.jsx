import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TargetAudience from './components/TargetAudience';
import CTA from './components/CTA';
import Footer from './components/Footer';
import IntroOverlay from './components/IntroOverlay';

export default function App() {
  const [introLeaving, setIntroLeaving] = useState(false);
  const [introDone, setIntroDone] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans">
      {introLeaving && (
        <>
          <Navbar />
          <main>
            <Hero />
            <Services />
            <TargetAudience />
            <CTA />
          </main>
          <Footer />
        </>
      )}
      {!introDone && (
        <IntroOverlay
          onExitStart={() => setIntroLeaving(true)}
          onFinished={() => setIntroDone(true)}
        />
      )}
    </div>
  );
}
