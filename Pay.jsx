import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Pay = () => {
  const [code, setCode] = useState('');
  const invoiceLinks = {
    'INV-2045': 'https://buy.stripe.com/test_inv2045',
    'INV-3650': 'https://buy.stripe.com/test_inv3650',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (invoiceLinks[code]) {
      window.location.href = invoiceLinks[code];
    } else {
      alert('Invalid Invoice Code');
    }
  };

  return (
    <div>
      <Header />
      <main className="p-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">Pay Your Invoice</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Invoice Code (e.g., INV-2045)"
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
            className="p-2 border rounded mr-2"
          />
          <button type="submit" className="bg-black text-white px-4 py-2 rounded">
            Pay Now
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Pay;