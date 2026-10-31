import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Footer } from './components/Footer/Footer';
import Benefits from './components/Benefits/Benefits';
import { Library } from './components/Library/Library';
import { Stories } from './components/Stories/Stories';

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg-primary)', color: 'var(--color-text-primary)' }}>
      <Navbar />
      <main id="main-content">
        <Hero />
        <div
          className="relative z-[2]"
          style={{ backgroundColor: 'var(--color-bg-primary)' }}
        >
          <Library />
          <Benefits />
          <Stories />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;