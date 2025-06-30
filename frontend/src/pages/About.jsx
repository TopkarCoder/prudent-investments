import './About.css'
import image1 from '../assets/advisor.png'
import image2 from '../assets/image.png'
import image3 from '../assets/advisor2.jpeg'

function About() {
  return (
    <main style={{ padding: "1rem" }}>
      <h1>About Us</h1>
      <div className="mv-section">
        <div className="mv-card">
          <h3>🚀 Mission</h3>
          <p><b>Investor-Centric Approach</b> - To simplify the investor's journey towards financial goals, making it easy and rewarding.</p> 
          <p><b>Risk-Adjusted Performance</b> - To deliver strong, risk-adjusted returns for investors, balancing growth with prudent risk management.</p>
        </div>
        
        <div className="mv-card">
          <h3>🎯 Vision</h3>
          <p>To become a trusted Mutual Fund Distributor for all our investors creating sustainable and long term wealth creation.</p>
        </div>
        
        <div className="mv-card">
          <h3>📦 Products Offered</h3>
          <ul className="product-list">
            <li>Mutual Funds</li>
            <li>FDs</li>
            <li>Bonds</li>
            <li>Capital Gain Bonds</li>
            <li>Insurance</li>
          </ul>
        </div>
      <div className='intro'>        
        <div className='intro-1'>
          <div className='intro-text'>
            <p>At Prudent investments, we strongly believe in building long-term relationships with our clients, offering personalized advice, and maintaining a deep understanding of their financial needs.
                We provide ongoing support to navigate market changes, ensuring your portfolio remains aligned with your objectives. </p>                
          </div>
          <img src={ image1 } alt='advisors' className='intro-img'></img>
        </div>

        <div className='intro-2'>
          <img src={ image2 } alt='advisors' className='intro-img'></img>
          <div className='intro-text'>
            <p> We begin by understanding your unique financial situation, risk tolerance, and goals. We educate you on investment principles and market trends, empowering you to make informed decisions. Together, we embark on your investment journey and start with the process of planning and Investing followed by regular reviews and updates.</p>
          </div>
        </div>

        <div className='intro-3'>
          <div className='intro-text'>
            <p>We're committed to living up to every single promise, setting the right expectations, and gaining your trust throughout our journey.</p>
            <p>You can get started by booking a free consultation through our website. Visit the contact page to get in touch with us via email.</p>
          </div>
          <img src={ image3 } alt='advisors' className='intro-img'></img>
        </div>
      </div>
      
      </div> 

    </main>
  )
}

export default About