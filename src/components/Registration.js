import React, { useState } from 'react';
import '../index.css';

const Registration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailto = `mailto:vad0686888749@gmail.com?subject=Регистрация&body=Имя: ${name}, Email: ${email}`;
        window.location.href = mailto;
    };

    return (
        <section id="register" className="section registration-section">
            <div className="container">
                <h2>Регистрация</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Имя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit">Отправить</button>
                </form>
            </div>
        </section>
    );
};

export default Registration;
