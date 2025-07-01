import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import TestimonialsAndBlogsSection from './components/TestimonialsAndBlogsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <section id="hero"><HeroSection /></section>
      <section id="about"><AboutSection /></section>
      <section id="services"><ServicesSection /></section>
      <section id="process"><ProcessSection /></section>
      <section id="blogs"><TestimonialsAndBlogsSection /></section>
      <section id="contact" className="contact-section"><ContactForm /></section>
      <Footer />
    </div>
  );
}

export default App;
