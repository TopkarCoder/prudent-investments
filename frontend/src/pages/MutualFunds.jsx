import { FaCheckCircle } from "react-icons/fa";
import './MutualFunds.css';
import image1 from '../assets/MF.png';
import image2 from '../assets/groww.png';
import image3 from '../assets/benefitsofMF.png';
import image4 from '../assets/MF2.png';
import img1 from '../assets/MF3.png';
import img2 from '../assets/MF4.png';
import img3 from '../assets/MF5.png';
import img4 from '../assets/MF6.png';
import img5 from '../assets/MF7.png';
import img6 from '../assets/MF8.png';

export default function MutualFunds() {
    const advantages = [
  {
    title: "1. Professional Management",
    description:
      ` Investors may not have the time or the required knowledge and
        resources to conduct their research and purchase individual stocks or bonds. A mutual fund is
        managed by full-time, professional money managers who have the expertise, experience and
        resources to actively buy, sell, and monitor investments. A fund manager continuously monitors
        investments and rebalances the portfolio accordingly to meet the scheme’s objectives. Portfolio
        management by professional fund managers is one of the most important advantages of a mutual
        fund.`
  },
  {
    title: "2. Risk Diversification",
    description:
      ` Buying shares in a mutual fund is an easy way to diversify your investments
        across many securities and asset categories such as equity, debt and gold, which helps in spreading
        the risk - so you won't have all your eggs in one basket. This proves to be beneficial when an
        underlying security of a given mutual fund scheme experiences market headwinds. With
        diversification, the risk associated with one asset class is countered by the others. Thus, risk
        diversification is one of the most prominent advantages of investing in mutual funds.`,
  },
  {
    title: "3. Affordability & Convenience",
    description:
      ` For many investors, it could be more
        costly to directly purchase all of the individual securities held by a single mutual fund. By contrast,
        the minimum initial investments for most mutual funds are more affordable.`,
  },
  {
    title: "4. Liquidity",
    description:
      ` You can easily redeem (liquidate) units of open ended mutual fund schemes to meet
        your financial needs on any business day (when the stock markets and/or banks are open), so you
        have easy access to your money. Upon redemption, the redemption amount is credited in your bank
        account within one day to 3-4 days, depending upon the type of scheme`,
  },
  {
    title: "5. Low Cost",
    description:
      ` An important advantage of mutual funds is their low cost. Due to huge economies of
        scale, mutual funds schemes have a low expense ratio. Expense ratio represents the annual fund
        operating expenses of a scheme, expressed as a percentage of the fund’s daily net assets.`,
  },
  {
    title: "6. Well-Regulated",
    description:
      ` Mutual Funds are regulated by the capital markets regulator, Securities and
        Exchange Board of India (SEBI) under SEBI (Mutual Funds) Regulations, 1996. SEBI has laid down
        stringent rules and regulations keeping investor protection, transparency with appropriate risk
        mitigation framework and fair valuation principles.`,
  }
];

const sipBenefits = [
    "Invest through market ups and downs via rupee cost averaging.",
    "Start with as low as ₹500 per month.",
    "Choose frequency: daily, weekly, fortnightly, monthly, or quarterly.",
    "Beat inflation and create long-term wealth.",
    "Build financial discipline and investment habits.",
    "Avoid the stress of market timing."
  ];

const SipBenefits = [
  { icon: img1, text: "Invest through market ups and downs via rupee cost averaging." },
  { icon: img2, text: "Start with as low as ₹500 per month." },
  { icon: img3, text: "Choose frequency: daily, weekly, fortnightly, monthly, or quarterly." },
  { icon: img4, text: "Beat inflation and create long-term wealth." },
  { icon: img5, text: "Build financial discipline and investment habits." },
  { icon: img6, text: "Avoid the stress of market timing." }
];

    return (
    <>
    <main style={{ padding: "2rem" }}>
        <div className="mf-container">
            <h1 className="mf-title">📘 Introduction to Mutual Funds</h1>

            <section className="mf-section">
                <h2>What are Mutual Funds?</h2>
                <div className="mf-image">
                    <img src={ image1 } alt="Mutual Funds" />
                </div>
                <p>
                    A mutual fund is a collective investment vehicle that collects & pools money from a number
                    of investors and invests the same in equities, bonds, government securities, money market
                    instruments.
                </p>

                <p>
                    The money collected in mutual fund scheme is invested by professional fund managers in
                    stocks and bonds etc. in line with a scheme’s investment objective. The income / gains
                    generated from this collective investment scheme are distributed proportionately amongst
                    the investors, after deducting applicable expenses and levies, by calculating a scheme’s “Net
                    Asset Value” or NAV. In return, mutual fund charges a small fee.
                </p>
            </section>

            <section className="mf-section">
                <h2>How a Mutual Fund Works</h2>
                <div className="mf-image">
                    <img src={ image2 } alt="How Mutual Funds Work" style={{width: "800px"}} />
                </div>
                <p>
                   When you invest in a mutual fund, you are pooling your money with many other investors.
                    Mutual fund issues “Units” against the amount invested at the prevailing NAV. Returns from
                    a mutual fund may include income distributions to investors out of dividends, interest,
                    capital gains or other income earned by the mutual fund. You can also have capital gains (or
                    losses) if you sell the mutual fund units for more (or less) than the amount you invested.
                </p>
            </section>

            <section className="mf-section">
                <h2>Who Should Invest?</h2>
                    <ul className="mf-checklist">
                        <li><FaCheckCircle /> Lack the knowledge or skill / experience of investing in stock markets directly.</li>
                        <li><FaCheckCircle /> Want to grow their wealth, but do not have the inclination or time to research the stock market.</li>
                        <li><FaCheckCircle /> Wish to invest only small amounts.</li>
                    </ul>
            </section>    

            <section className="mf-section">
                <h2>Why Invest in Mutual Funds?</h2>
                <div className="mf-image">
                    <img src={ image3 } alt="Benefits of Mutual Funds"/>
                </div>
                <p>
                    As investment goals vary from person to person – post-retirement expenses, money for children’s
                    education or marriage, house purchase, etc. – the investment products required to achieve these
                    goals too vary. Mutual funds provide certain distinct advantages over investing in individual
                    securities. Mutual funds offer multiple choices for investment across equity shares, corporate bonds,
                    government securities, and money market instruments, providing an excellent avenue for retail
                    investors to participate and benefit from the uptrends in capital markets. The main advantages are
                    that you can invest in a variety of securities for a relatively low cost and leave the investment
                    decisions to a professional manager.
                </p>
            </section>

            <section className="mf-section">
                <h2>🧩 Advantages of Investing in Mutual Funds</h2>
                <div className="mf-cards">
                    {advantages.map((adv, i) => (
                    <div className="mf-card" key={i}>
                        <h3>{adv.title}</h3>
                        <p>{adv.description}</p>
                    </div>
                ))} 
                </div>
                <div className="mf-image">
                        <img src={ image4 } alt="Advantages of Mutual Funds" />  
                </div> 
            </section>
        </div>
        <hr></hr>
        <section className="sip-section">
            <div className="mf-section">
                <h2>💡 What is SIP?</h2>
            </div>
            <p style={{fontSize: "1.25rem", color: "#555", margin: "0.5rem"}}>
                A Systematic Investment Plan (SIP), more popularly known as SIP, is a facility offered by mutual funds
                to the investors to invest in a disciplined manner. SIP facility allows an investor to invest a fixed
                amount of money at pre-defined intervals in the selected mutual fund scheme. The fixed amount of
                money can be as low as Rs. 500, while the pre-defined SIP intervals can be on a
                weekly/monthly/quarterly/semi-annually or annual basis. By taking the SIP route to investments, the
                investor invests in a time-bound manner without worrying about the market dynamics and stands to
                benefit in the long-term due to average costing and power of compounding.
            </p>

            <div className="sip-benefits-grid">
                <ul className="mf-checklist">
                {SipBenefits.slice(0, 3).map((item, i) => (
                    <li key={i}>
                    <img src={item.icon} alt="" className="benefit-icon" />
                    {item.text}
                    </li>
                ))}
                </ul>
                <ul className="mf-checklist">
                {SipBenefits.slice(3).map((item, i) => (
                    <li key={i}>
                    <img src={item.icon} alt="" className="benefit-icon" />
                    {item.text}
                    </li>
                ))}
                </ul>
            </div>

            <div className="video-wrapper">
                <iframe
                src="https://www.youtube.com/embed/AWoIBW5FnOw?si=BmP1VwWzbRFQd_r0"
                title="SIP Explained"
                allowFullScreen
                />
                <iframe
                src="https://www.youtube.com/embed/g0xKwZ0fab8?si=JC-K_Y9coSJDknuL"
                title="SIP Benefits"
                allowFullScreen
                />
            </div>
        </section>
    </main>
    </>
)
}






    

