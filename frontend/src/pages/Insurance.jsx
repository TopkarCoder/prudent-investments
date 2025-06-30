import image1 from '../assets/Insurance.png';
import './MutualFunds.css'

export default function Insurance() {
    return (
        <div className="mf-container">
            <h1 className="mf-title">📄 Understanding Insurance</h1>
    
            <section className="mf-section">
                <h2>What is Insurance?</h2>
                <div className="mf-image">
                    <img src={ image1 } alt="Illustration of Bonds" style={{width: '600px'}}/>
                </div>
                <p>
                    Insurance is a financial arrangement where an individual or entity transfers the risk of
                    potential losses to an insurance company in exchange for regular premium payments.
                    This provides a safety net, mitigating the financial impact of unexpected events. In return for
                    this risk transfer, the policyholder pays regular premiums to the insurance company. The
                    insurance policy specifies the events or circumstances under which the insurance company
                    will provide financial compensation.
                    Insurance provides a sense of security and financial stability by reducing the potential
                    impact of unexpected events.
                </p>
            </section>
        </div>
    );
}