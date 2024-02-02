import React, { useState } from 'react';

const BankCardForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleConfirm = () => {
    // შეცდომების შემოწმება
    if (!cardNumber.trim() || !expirationDate.trim() || !cvv.trim()) {
      console.error('შეცდომა: შეამოწმეთ ყველა ველი');
      return;
    }

    // სწორი ინფორმაციის დადგენა
    console.log('სწორი ინფორმაცია:', {
      cardNumber,
      expirationDate,
      cvv,
    });
  };

  return (
    <div>
      <label>
        ბარათის ნომერი:
        <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
      </label>
      <br />
      <label>
        ვადა:
        <input type="text" value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)} />
      </label>
      <br />
      <label>
        CVV:
        <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} />
      </label>
      <br />
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );
};

export default BankCardForm;
