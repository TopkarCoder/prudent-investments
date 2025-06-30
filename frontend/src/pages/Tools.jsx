import './Tools.css';
import image1 from '../assets/7531.png'
import image2 from '../assets/Riskometer.png';

export default function Tools() {
  const sipRules = [
    {
      title: '7 – Patience is the Key',
      description:
        '<p>This fundamental principle of the rule is to have a seven year investment horizon . Historic data shows that equities have performed well in the longer horizon and investing via SIP allows the power of compounding to take full effect. The longer the investment horizon the more significant is the compounding effect. Investing in equity SIPs for a minimum of 7 years significantly improves the likelihood of achieving reasonable returns while also lowering the chances of experiencing negative returns.</p>',
    },
    {
      title: '5 – Diversify your Portfolio',
      description:
        '<p>For equity investors, diversification is the important thing to achieve stability and growth in the investment portfolios. The 5 finger framework suggests spreading investments across five asset classes to balance risk and reward. These asset classes include high-quality stocks, value stocks, growth at reasonable price (GARP) stocks, mid-or-small cap stocks, and global stocks</p>',
    },
    {
      title: '3 – Mental Strength',
      description:
      ` <p>Equity investors often face three challenging phases that test their commitment. Here is how to prepare:</p>
        <p><strong>The Disappointment Phase (7–10% returns):</strong> Investors may anticipate high returns and feel let down by moderate gains. Recognizing that even moderate returns signify progress helps manage expectations.</p>
        <p><strong>The Irritation Phase (0–7% returns):</strong> Investors might get frustrated, thinking fixed deposits would’ve done better. But SIPs are meant for long-term wealth, not short-term comparisons.</p>
        <p><strong>The Panic Phase (Negative returns):</strong> A drop in value below initial investment can trigger panic. But staying composed and continuing SIPs helps benefit from market recovery.</p>
      `
    },
    {
      title: '1 – Increase SIP Annually',
      description:
        `<p>Increasing your SIP amount each year is like boosting the strength of your equity portfolio. It reflects
        a stronger commitment toward your financial goals and can help improve long-term outcomes.
        Understand why this strategy matters:</p>
        <p><strong>Reach your financial goals faster</strong> - Raising your SIP amount over time can speed up the achievement
        of your financial targets</p>
        <p><strong>Expanding financial goals</strong> - With experiencing the benefits of incremental growth, the financial
        aspirations may expand. One might start considering financial independence as a goal rather than
        solely focussing on building a retirement corpus.</p`
    },
  ];

  const riskometerLevels = [
    { label: 'Low Risk', color: 'low', description: 'Ideal for capital preservation with minimal risk.' },
    { label: 'Low to Moderate', color: 'low-moderate', description: 'Slightly higher return potential with low volatility.' },
    { label: 'Moderate', color: 'moderate', description: 'Balanced approach for steady growth.' },
    { label: 'Moderately High', color: 'moderately-high', description: 'Suitable for those who accept moderate volatility.' },
    { label: 'High', color: 'high', description: 'Primarily equity-based with high return potential and risk.' },
    { label: 'Very High', color: 'very-high', description: 'Highly volatile, for experienced investors only.' },
  ];

  return (
    <div className="tools-container">
      <div className='intro-para'>
        <p style={{fontFamily: "sans-serif", fontSize: "20px"}}>Systematic Investment Plans (SIPs) are one of the most popular and disciplined ways to invest in
          mutual funds. To make the most of SIPs, it helps to follow a structured approach—and the 7-5-3-1
          rule serves as a useful guideline for investors to manage their expectations and strategies over
          different time horizons.
        </p>
        <p style={{fontFamily: "sans-serif", fontSize: "20px"}}>This rule provides a broad framework based on historical average returns that investors might expect
          from mutual funds over specific durations. It helps set realistic return expectations when investing
          through SIPs. This rule emphasises the importance of investment tenure, diversification, mental
          strength, and incremental growth in SIP amount.
        </p>
      </div>
      <section className="sip-section">
        <div className='image-wrapper'>
          <img src={ image1 } alt="7-5-3-1 SIP Rule"></img>
        </div>
        <h2 className="section-title">📈 7-5-3-1 Rule for SIPs</h2>
        <div className="sip-grid">
          {sipRules.map((rule, idx) => (
            <div className="sip-card" key={idx}>
              <h3>{rule.title}</h3>
              {idx === 0 || 1 || 2 || 3 ? (
              <div className="sip-description"
                  dangerouslySetInnerHTML={{ __html: rule.description }}    //only used in case of third card
              />
              ) : (
                <p>{rule.description}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="riskometer-section">
        <h2 className="section-title">⚠️ Understanding the Riskometer</h2>
        <p className="risk-intro">
          The Riskometer, introduced by SEBI, helps investors assess mutual fund risk levels across six categories:
        </p>
        <div className='image-wrapper'>
          <img src={ image2 } alt="Riskometer"></img>
        </div>
        <div className="risk-grid">
          {riskometerLevels.map((level, idx) => (
            <div className={`risk-card ${level.color}`} key={idx}>
              <h4>{level.label}</h4>
              <p>{level.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

