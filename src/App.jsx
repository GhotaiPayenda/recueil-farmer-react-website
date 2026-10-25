import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Statistics } from './components/Statistics/Statistics';
import { VideoSection } from './components/VideoSection/VideoSection';
import { InfoCards } from './components/InfoCards/InfoCards';
import { HowItWorks } from './components/HowItWorks/HowItWorks';
import { ImageCards } from './components/ImageCards/ImageCards';
import { MemberSection } from './components/MemberSection/MemberSection';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg-primary)', color: 'var(--color-text-primary)' }}>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Statistics />
        <VideoSection />
        <InfoCards />
        <HowItWorks />
        <ImageCards />
        <MemberSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;