import React, { useState } from 'react';
import '../index.css';

const Calculator = () => {
    const [amount, setAmount] = useState('');
    const [months, setMonths] = useState('');
    const [result, setResult] = useState(null);

    const calculate = () => {
        if (amount && months) {
            const monthlyPayment = (parseFloat(amount) / parseInt(months)).toFixed(2);
            setResult(monthlyPayment);
        }
    };

    return (
        <section id="calculator" className="section calculator-section">
            <div className="container">
                <h2>Калькулятор кредитования</h2>
                <input
                    type="number"
                    placeholder="Сумма кредита"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Количество месяцев"
                    value={months}
                    onChange={(e) => setMonths(e.target.value)}
                />
                <button onClick={calculate}>Рассчитать</button>
                {result && <p>Ежемесячный платеж: {result} лей</p>}
            </div>
        </section>
    );
};

export default Calculator;
