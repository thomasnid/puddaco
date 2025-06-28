import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
const Home = () => (
  <div>
    <Header />
    <main className="p-10 text-center">
      <h1 className="text-4xl font-bold text-black mb-4">Welcome to Pudda & Co</h1>
      <p className="text-lg text-black">Where business is made easy, elegant, and compliant.</p>
    </main>
    <Footer />
  </div>
);
export default Home;