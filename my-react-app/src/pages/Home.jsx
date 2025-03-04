import React from 'react';
import Chat from '../assets/img/icon-chat.png';
import Money from '../assets/img/icon-money.png';
import Security from '../assets/img/icon-security.png';
import Feature from '../components/Feature';
import '../css/main.css';

function Home() {
  return (
    <main>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
    
      <section className="features">
        <h2 className="sr-only">Features</h2>
      
        <div className="feature-item">
          <Feature title='You are our #1 priority' icon={Chat} alt='Chat Icon'>
              Need to talk to a representative? You can get in touch through our
              24/7 chat or through a phone call in less than 5 minutes.
          </Feature>
        </div>
        <div className="feature-item">
          <Feature title='More savings means higher rates' icon={Money} alt='Money Icon'>
            The more you save with us, the higher your interest rate will be!
          </Feature>
        </div>
        <div className="feature-item">
          <Feature title='Security you can trust' icon={Security} alt='Security Icon'>
            We use top of the line encryption to make sure your data and money
            is always safe.
          </Feature>
        </div>
      </section>
    </main>
  );
}

export default Home;
