import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    {
      title: 'Starter LLC Kit',
      features: ['LLC', 'EIN', 'Operating Agreement', 'Registered Agent'],
      price: 204,
      link: '#',
    },
    {
      title: 'Virtual Biz Launch Kit',
      features: ['LLC', 'EIN', 'Virtual Address', 'Phone', 'Email', 'Google Profile'],
      price: 365,
      link: '#',
    },
    {
      title: 'Full Scope Business Kit',
      features: ['LLC', 'EIN', 'All Above', 'DUNS', 'BOI Compliance', 'Domain Setup'],
      price: 569,
      link: '#',
    },
  ];

  return (
    <div>
      <Header />
      <main className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Services;