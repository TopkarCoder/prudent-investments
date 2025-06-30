import { useEffect, useState } from 'react';
import axios from 'axios';
import image1 from '/src/assets/Financial_Lifestage.jpeg';

export default function InvestorEducation() {
  
  const [resources, setResources] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/resources`)
      .then(res => setResources(res.data))
      .catch(() => alert('Error fetching resources'));
  }, []);
  
  return (
    <>
      <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: 'auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Investor Awareness</h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
          Welcome to our Investor Awareness page! Here, we aim to empower you with the knowledge and tools necessary to make informed investment decisions. Whether you're a seasoned investor or just starting out, understanding the basics of investing is crucial for building a successful financial future.
        </p>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginTop: '1rem' }}>
          We encourage you to explore the resources available on this page, including articles, guides, and tools designed to enhance your investment knowledge.
        </p>
      </div>

      <div className='image-wrapper'
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: '30px auto',
          maxWidth: "100%",
          height: "auto",
          padding: "10px",
          boxSizing: "border-box"
        }}>
        <img src={ image1 } alt="Financial_Lifestages" 
          style={{
            maxWidth: "75%",
            height: "auto",
            objectFit: "contain"
          }}>
        </img>      
      </div>

      <div style={{ padding: '2.5rem' }}>
        <h1>Investor Education Resources</h1>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.5rem',
          marginTop: '2rem'
        }}>
          {resources.map((res, idx) => (
            <div
              key={idx}
              style={{
                border: '1px solid #e0e0e0',
                borderRadius: '12px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
                width: '300px',
                padding: '1.5rem',
                background: '#fff',
                transition: 'transform 0.2s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                {res.type === 'video' ? '🎥' : '📘'}
              </div>
              <h3 style={{ marginBottom: '0.5rem', color: '#333', fontSize: '25px', fontWeight: 'bold' }}>
                {res.title}
              </h3>
              <p style={{ fontSize: '18px', color: '#666', minHeight: '60px' }}>
                {res.description}
              </p>
              <a
                href={res.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  marginTop: '1rem',
                  padding: '0.5rem 1rem',
                  backgroundColor: res.type === 'video' ? '#ff6b6b' : '#4CAF50',
                  color: '#fff',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: 'bold'
                }}
              >
                {res.type === 'video' ? '🎬 Watch Video' : '📄 View Document'}
              </a>

              <p style={{ fontSize: '1rem', color: '#999', marginTop: '0.75rem' }}>
                  📅 Added on: {new Date(res.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
    
  );
}
