import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Success = () => (
  <div>
    <Header />
    <main className="p-10 text-center">
      <h1 className="text-3xl text-green-600 font-bold">✅ Payment Successful</h1>
      <p className="mt-4">Thank you for choosing Pudda & Co. A confirmation email has been sent.</p>
    </main>
    <Footer />
  </div>
);
export default Success;