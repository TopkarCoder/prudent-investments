import React from "react"
import "./Footer.css"
function Footer() {

  const specific = {
    fontSize: "20px",
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <h3>Prudent Investments</h3>
          <p>
            Empowering smart investment decisions with reliable tools,
            educational resources, and seamless access to financial insights.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/KnowledgeCenter/tools">Financial Tools</a></li>
            <li><a href="/KnowledgeCenter">Knowledge Center</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>

        {/* Client & Downloads */}
        <div className="footer-section">
          <h4>Client Services</h4>
          <ul>
            <li><a href="https://prudentinvestment.investwell.app/app/#/login" target="_blank" rel="noopener noreferrer">Client Login</a></li>
            <li><a href="/downloads">Downloads</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>
      </div>
      <p style={specific}><b>Mutual fund Investments are subject to market risks. Please read all scheme related documents carefully.</b></p>
      <hr></hr>
      Address: Office No. 303, Spectra, Pratik Nagar, Kothrud, Pune, Maharashtra 411038
      <hr></hr>
      AMFI Registered Mutual Fund Distributor | ARN-160946 <br></br>
      <a href="https://www.nseindia.com/" target="blank">NSE</a> | <a href="https://www.bseindia.com/" target="blank">BSE</a> | < a href="https://www.sebi.gov.in/" target="blank">SEBI</a> | <a href="https://nsdl.co.in/" target="blank">NSDL</a> | < a href="https://www.cdslindia.com/" target="blank">CSDL</a>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Prudent Investments. All rights reserved.</p>
      </div>  
    </footer>
  )
}

export default Footer

