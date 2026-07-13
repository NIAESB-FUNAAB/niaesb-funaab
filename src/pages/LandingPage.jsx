import HeroSection from '../components/landing/HeroSection';
import AboutSection from '../components/landing/AboutSection';
import QuickAccess from '../components/landing/QuickAccess';
import ExcosSection from '../components/landing/ExcosSection';
import ImpactSection from '../components/landing/ImpactSection';

const LandingPage = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <QuickAccess />
      <ImpactSection />
      <ExcosSection />
    </main>
  );
};

export default LandingPage;