import React, { useState } from 'react';

function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services does your company provide?",
      answer: "We offer a comprehensive range of financial services, including investments in Mutual Funds, retirement plans, child education savings plans, FDs and Insurance services. Our goal is to help you achieve financial security and grow your wealth.",
    },
    {
      question: "Is my money safe in mutual funds?",
      answer: "Mutual funds are subject to market risks. However, with the right fund selection based on your goals and risk appetite, they can be a safe and rewarding investment option.",
    },
    {
      question: "How do I start investing?",
      answer: "You can start investing by contacting us for a free consultation, filling out your risk profile, and we’ll help you choose the right SIP or fund to begin with.",
    },
    {
      question: "What is SIP?",
      answer: "SIP stands for Systematic Investment Plan. It allows you to invest a fixed amount regularly (monthly or quarterly) in a mutual fund scheme.",
    },
    {
      question: "Can I withdraw my money anytime?",
      answer: "Yes, most mutual funds allow you to withdraw money anytime, but some may have exit loads or lock-in periods like ELSS (3 years).",
    },
    {
        question: "Who are your typical clients?",
        answer: "We serve a diverse range of clients including individuals, families, Minors, Business owners, NRIs (Non-Resident Indians) and high-net-worth individuals. We customize our services to meet the specific needs of each client segment."
    },
    {
        question: "How to ensure my financial information's security?",
        answer: "We implement robust security measures to protect your personal and financial information and our systems are designed to safeguard your data against unauthorized access."
    },
    {
        question: "How do I get started with your services?",
        answer: "You can get started by booking a free consultation through our website. During the consultation, we will assess your financial goals and provide tailored advice to help you achieve your goals."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const styles = {
    page: {
      padding: '2rem',
      fontFamily: "'Segoe UI', sans-serif",
      maxWidth: '900px',
      margin: 'auto',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '2rem',
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    item: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '1rem',
      backgroundColor: '#f9f9f9',
      cursor: 'pointer',
    },
    question: (isOpen) => ({
      fontWeight: 'bold',
      fontSize: '1.1rem',
      color: isOpen ? '#007bff' : '#333',
    }),
    answer: {
      marginTop: '0.5rem',
      color: '#555',
      fontSize: '1rem',
    },
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Frequently Asked Questions</h1>
      <div style={styles.container}>
        {faqs.map((faq, idx) => (
          <div style={styles.item} key={idx}>
            <div
              style={styles.question(openIndex === idx)}
              onClick={() => toggleFAQ(idx)}
            >
              {faq.question}
            </div>
            {openIndex === idx && (
              <div style={styles.answer}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faqs;
