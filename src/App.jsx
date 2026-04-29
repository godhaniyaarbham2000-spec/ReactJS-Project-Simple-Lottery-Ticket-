import { useState } from 'react';
import './App.css';

function App() {
  const [lotteryTicket, setLotteryTicket] = useState('000');
  const [message, setMessage] = useState('Lottery');

  const handleDrawTicket = () => {
    const newNumber = Math.floor(Math.random() * 1000);
    const newTicket = String(newNumber).padStart(3, '0');
    
    const sumOfDigits = newTicket
      .split('')
      .map(Number)
      .reduce((sum, digit) => sum + digit, 0);

    if (sumOfDigits === 15) {
      setMessage("Lottery 'Congratulations, you won!' 🎉");
    } else {
      setMessage('Lottery - No Winning');
    }
-
    setLotteryTicket(newTicket);
  };

  return (
    <div className="lottery-game-container">
      <div className="lottery-card">
        <h1 className="lottery-message">{message}</h1>
        
        <div className="lottery-ticket-display">
          Lottery Ticket = *{lotteryTicket}*
        </div>
        
        <button 
          className="draw-button" 
          onClick={handleDrawTicket}
        >
          Get New Ticket
        </button>
      </div>
    </div>
  );
}

export default App;