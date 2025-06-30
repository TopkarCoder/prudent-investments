import { useEffect, useState, useRef } from 'react';
import './Home.css'

function Home() {
  const [investorCount, setInvestorCount] = useState(0);
  const [yearCount, setyearCount] = useState(0);
  
  const testimonials = [
        {
          quote: `Kedar and Gayatri are not only one of our closest friends who are more than an extended family. 
                  That said we have been investors for the past 7 years when they were starting Prudent Investments. 
                  They have been helpful, honest and  sincere in ensuring that our investments grow and have been very understanding of our objectives. 
                  They ensure that the portfolio is modified as per the market movements and try to ensure the capital allocation is safe and also grows systematically. 
                  Their responsiveness to our queries has been prompt and effective. They take special care and I have known cases where they also personally meet their investors in Pune which is helpful especially for older investors who need help with documentation etc . 
                  Along with their investment interest,they show empathy and respect to their customers.                        
                 `,
          name: "Nilesh S"
        },
        {
          quote: `I began my investment journey with Ms. Gayatri Topkar from Prudent Investments in 2015, fresh out of college, with very limited knowledge about financial planning. From the very beginning, she has been readily available to guide me through every step of the process.
                What stood out most was her patience in explaining financial concepts whenever I had doubts, ensuring I understood the reasoning behind every investment decision. Her vigilance toward market trends and timely suggestions of new mutual funds have played a key role in optimizing my portfolio.
                Over the years, she has helped me build a diversified portfolio that aligns with my age, risk appetite, and long-term goals. Thanks to her expertise, my investments have yielded consistently good returns, while keeping my money in safe and secure avenues.
                I’m truly grateful for the professional yet personalized guidance I've received and would highly recommend Prudent Investments to anyone looking to grow their wealth smartly and safely.
                `,
          name: "Sampada S",
        },
        {
          quote: `Mr Kedar and Mrs Gayatri Topkar at Prudent investments in Pune are a great team for investment planning. They provide you with lots of investment options like Mutual funds, Bonds, FD’s as per your needs and long term goals. They also provide mediclaim and term insurance as well. I have had a great experience investing with them as a client since last 9years. Their advice is prudent and grounded with thoughtful analysis of the market and data.
                  Their operational service is top class. Though they have thousands of customers, they make you feel you are their prized customer.
                  I am very thankful to Mr and Mrs Topkar for providing me with a sense of security, that my investment is in safe and sensible hands. Strongly recommend anyone who wants a genuine advisor for their investments.
                  `,
          name: "Dr. Aditya J",
        },
        {
          quote: `I have been associated with “Prudent Investment “ firm since 6 years. I have great experience with them. Kedar and Gayatri are highly knowledgeable and provide me with excellent investment advice tailored to my needs. They always provide clarity and are transparent about risks and returns.
                  I trust them with my financial planning and they have guided me a long way.
                  I highly recommend them !!!!!
                `,
          name: "Sadhana G",
        },
        {
          quote: `I’ve had an excellent experience investing with Prudent investments. As someone in the early stages of investment journey, I was looking for trustworthy guidance and clarity—and they delivered beyond expectations.
                  Kedar Sir and Gayatri Ma'am have been incredibly supportive throughout. They've always been available to patiently answer all my (sometimes silly) questions and guide me with their expertise. Their advice has not only been insightful but has also led to some amazing returns on my investments.
                  What I really appreciate is the range of options they provide based on individual goals and risk appetite. It’s reassuring to know I have such a knowledgeable and dedicated team helping me grow my wealth. Highly recommended!
                `,
          name: "Rucha H",
        },
        {
          quote: `They value your investments and build your portfolio depending on your needs and financial goals. Very accessible and approachable people who are committed for customers.
                  I highly recommend Prudent investments for your investmentments.
                `,
          name: "Ajit V",
        },
        {
          quote: `Excellent Financial guidance with personal touch... when you are with Prudent then you are in safe hands.
                `,
          name: "Shivaray H",
        },
        {
          quote: `We get very professional as well as services with personal touch!!! Our investments are in safe hand and growing fast. All the best for their future which is linked with ours as well!
                `,
          name: "Vivek S",
        },
        {
          quote: `Great service. Owners are very knowledgeable in the field and well versed with managing domestic as well as international investment portfolios. 
                  Highly recommended.
                `,
          name: "Shashank K ",
        },

  ];

const [index, setIndex] = useState(0);
const slideRef = useRef();

const handleNext = () => setIndex((prev) => (prev + 1) % testimonials.length);
const handlePrev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);


useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, 30000); // 30 seconds

  slideRef.current = interval;

  return () => clearInterval(interval);
}, [index]); // watch index so clicking arrows resets timing



  useEffect (() => {
    const investorTarget = 300;
    const yearsTarget = 8;

    let investor = 0;
    let years = 0;

    const interval = setInterval (() => {
      if(investor < investorTarget) investor += 10;
      if(years < yearsTarget) years += 1;

      setInvestorCount(investor > investorTarget ? investorTarget : investor);
      setyearCount(years > yearsTarget ? yearsTarget : years);

      if(investor >= investorTarget && years >= yearsTarget) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, []);


  return (
    <>
    <main className="home-container">
      <div className="scroll-wrapper">
        <div className="scroll-text">
          <span>
            One step forward today is better than a perfect plan tomorrow.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Consistency turns ordinary actions into extraordinary results.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Your Investment Habits shape your Future. Choose them wisely.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span>
            One step forward today is better than a perfect plan tomorrow.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Consistency turns ordinary actions into extraordinary results.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Your Investment Habits shape your Future. Choose them wisely.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </div>
      </div>

      
       <section className="why-choose-us">
        <p>Initiate your financial Odyssey with us. We are a AMFI registered mutual fund distributor. Our personalized advice aims to help you achieve your ambitious financial goals with a judicious investment strategy for you & your family.
            At Prudent investments, we strongly believe in building enduring client relationships  by bridging the gap with understanding, empathy, and efforts to connect across the variation.
            We're committed to guide you on your financial roadmap to fulfill your financial goals & achieve generational wealth.</p>
        <div className="why-cards">
          <div className="why-card">
            <h3>{investorCount.toLocaleString()}+ Trusted Investors</h3>
            
          </div>
          <div className="why-card">
            <h3>{yearCount}+ Years Experience</h3>
          
          </div>
          <div className="why-card">
            <h3>AMFI Registered</h3>
            
          </div>
          <div className="why-card">
            <h3>Solution Oriented Assistance</h3>
            
          </div>
        </div>
      </section>

    </main>
    <section className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-box">
          <p>"{testimonials[index].quote}"</p>
          <p>-{testimonials[index].name}</p>
          

          <div className="testimonial-buttons">
            <button onClick={() => handlePrev()}>❮</button>
            <button onClick={() => handleNext()}>❯</button>
          </div>
        </div>
      </section>
      </>
  )
}

export default Home

