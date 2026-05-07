import { useEffect, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function getAutoTheme() {
  const hour = new Date().getHours();
  return hour >= 7 && hour < 21 ? 'light' : 'dark';
}

function App() {
  const [theme, setTheme] = useState(getAutoTheme);
  const isDark = theme === 'dark';

  useEffect(() => {
    document.body.classList.toggle('react-dark-body', isDark);

    return () => {
      document.body.classList.remove('react-dark-body');
    };
  }, [isDark]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div
      className={`min-h-screen py-10 px-4 transition-colors ${
        isDark ? 'react-dark bg-slate-950 text-slate-100' : 'bg-slate-100 text-slate-900'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <Header />

        <div className="flex justify-end mt-4">
          <button
            type="button"
            onClick={toggleTheme}
            className={`rounded-lg px-4 py-2 text-sm font-semibold shadow-md transition-colors ${
              isDark
                ? 'bg-blue-200 text-slate-950 hover:bg-blue-100'
                : 'bg-slate-900 text-white hover:bg-slate-800'
            }`}
          >
            {isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="md:col-span-2 space-y-6">
            <About />
            <Experience />
            <Reviews />
          </div>

          <div className="space-y-6">
            <Skills />
            <Education />
          </div>
        </div>

        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;
