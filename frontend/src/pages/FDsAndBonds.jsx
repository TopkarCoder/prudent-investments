import './MutualFunds.css'; 
import image1 from '../assets/bonds.png';
import image2 from '../assets/FD.png';

export default function FDsAndBonds() {
  return (
    <div className="mf-container">
        <h1 className="mf-title">📄 Understanding FDs</h1>

        <section className="mf-section">
            <h2>What are FDs?</h2>
            <div className="mf-image">
                <img src={ image2 } alt="Illustration of Bonds" style={{width: '600px'}}/>
            </div>
        <p>
            An FD is a term deposit where you agree to keep your money with the bank or financial
            institution for a specific duration (e.g., 1 month to 10 years). The interest rate on an FD
            depends on the deposit amount, the tenure (length of time), and the specific bank or
            institution. There are various types of FDs, including those with monthly or quarterly interest
            payouts, tax-saving FDs, and those with special rates for senior citizens.
            Maximise the potential of your hard-earned money. Fixed Deposits offer attractive interest
            rates and flexible tenure options to grow your wealth over time.
        </p>
      </section>

      <section className="mf-section">
        <h2>Why Invest in FDs?</h2>
        <div className="mf-cards">
          {FDadvantages.map((item, i) => (
            <div className="mf-card" key={i}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <hr></hr>

      <h1 className="mf-title">📄 Understanding Bonds</h1>

      <section className="mf-section">
        <h2>What are Bonds?</h2>
        <div className="mf-image">
          <img src={ image1 } alt="Illustration of Bonds" style={{width: '600px'}}/>
        </div>
        <p>
            Bonds are a type of debt instrument, meaning they represent a loan from the bondholder to
            the issuer. The issuer of a bond can be a government (federal, state, or local) or a
            corporation. Bonds are considered fixed-income securities because the interest payments
            are typically predetermined.
        </p>
      </section>

      <section className="mf-section">
        <h2>Types of Bonds </h2>
        <ul style={{ listStyleType: 'disc', color: '#555', fontSize: '1.25rem'}}>
          <li>Government Bonds</li>
          <ul style={{ listStyleType: 'disc', color: '#555', fontSize: '1.25rem'}}>
            <li>Capital Gain Bonds</li>
            <li>RBI Floating Rate Bonds</li>
          </ul>
          <li>Corporate Bonds</li>
        </ul>
      </section>

      <section className="mf-section">
        <h2>Why Invest in Bonds?</h2>
        <div className="mf-cards">
          {bondAdvantages.map((item, i) => (
            <div className="mf-card" key={i}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const bondAdvantages = [
  {
    title: "1. Income Generation",
    description: "Bonds provide a stream of regular interest payments to the investor."
  },
  {
    title: "2. Diversification",
    description: "Bonds can help diversify an investment portfolio and reduce overall risk."
  },
  {
    title: "3. Capital Appreciation",
    description: "While bonds are generally less volatile than stocks, their market value can fluctuate, potentially leading to capital gains if sold before maturity."
  },
  {
    title: "4. Lower Risk",
    description: "Compared to stocks, bonds are generally considered a lower-risk investment, particularly government bonds."
  }
];

const FDadvantages = [
    {
        title: "1. Flexible Tenure",
        description: "Choose from the flexible investment options starting from 12 to 60 months."
    },
    {
        title: "2. Benefits for Senior Citizens",
        description: "Senior citizens get additional rates p.a"
    },
    {
        title: "3. Special Interest Rates for Women",
        description: "Women depositors get an additional rates p.a."
    },
    {
        title: "4. Flexible Payout Options",
        description: "Choose from flexible interest payout options, i.e., monthly, quarterly, half-yearly, yearly or at maturity."
    },
    {
        title: "5. Attractive Returns",
        description: "Get steady and reliable returns to fulfil your dreams."
    }
];
