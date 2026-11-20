import { useState } from 'react';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Services from '@/components/landing/Services';
import Differentials from '@/components/landing/Differentials';
import Testimonials from '@/components/landing/Testimonials';
import Footer from '@/components/landing/Footer';
import WhatsAppFloat from '@/components/landing/WhatsAppFloat';
import BookingModal from '@/components/landing/BookingModal';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const openBooking = () => setBookingOpen(true);
  const closeBooking = () => setBookingOpen(false);

  return (
    <div className="min-h-screen bg-white font-sans text-graphite">
      <Header />
      <main>
        <Hero onBook={openBooking} />
        <Services onBook={openBooking} />
        <Differentials />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppFloat />
      <BookingModal open={bookingOpen} onClose={closeBooking} />
    </div>
  );
}