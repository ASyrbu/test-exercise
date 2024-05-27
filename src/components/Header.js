import React from 'react';
import '../index.css';

const Header = () => (
    <header className="header">
        <div className="container">
            <h1 className="logo">ExampleFinance</h1>
            <nav>
                <a href="#about">О нас</a>
                <a href="#services">Услуги</a>
                <a href="#calculator">Калькулятор</a>
                <a href="#register">Регистрация</a>
                <a href="#contact">Контакты</a>
            </nav>
        </div>
    </header>
);

export default Header;
