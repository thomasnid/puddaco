import React from 'react';
const ServiceCard = ({ title, features, price, link }) => (
  <div className="border rounded-xl shadow-md p-6 bg-white text-black">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <ul className="mb-4 list-disc pl-4">
      {features.map((feature, idx) => <li key={idx}>{feature}</li>)}
    </ul>
    <button
      onClick={() => window.location.href = link}
      className="bg-black text-white py-2 px-4 rounded hover:bg-gold transition"
    >
      Pay ${price}
    </button>
  </div>
);
export default ServiceCard;