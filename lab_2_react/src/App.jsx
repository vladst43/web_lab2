import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Skills />
        <Education />
        <Experience />
      </main>
      <Footer />
    </>
  );
}

export default App;
