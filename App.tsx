import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import ChatWidget from './components/ChatWidget';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-slate-950">
      <Header onBookAppointment={openModal} />
      <main>
        <Hero onBookAppointment={openModal} />
        <Services />
        <About />
        <Testimonials />
        <Contact onBookAppointment={openModal} />
      </main>
      <Footer />
      <ChatWidget />
      <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;