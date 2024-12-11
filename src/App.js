import React from 'react';
import StepCard from './components/StepCard';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Customer Registration</h1>
        <p>Automation Steps</p>
      </header>

      <main>
        <section className="step-section">
          <h2>Customer Information Collection</h2>
          <p>User enters personal details (e.g., name, email, phone number) and submits it</p>

          <div className="step-cards">
            <StepCard
              title="Start"
              description="Trigger"
              imageSrc="/images/start-icon.png"
              buttonColor="red"
            />
            <StepCard
              title="Activity"
              description="Input"
              imageSrc="/images/activity-icon.png"
              buttonColor="green"
            />
            <StepCard
              title="Result"
              description="Output"
              imageSrc="/images/result-icon.png"
              buttonColor="pink"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
