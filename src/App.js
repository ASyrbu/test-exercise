import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Section from './components/Section';
import Calculator from './components/Calculator';
import Registration from './components/Registration';
import Footer from './components/Footer';

const App = () => (
  <div>
    <Header />
    <HeroSection />
    <Section id="about" title="О нас" content="Мы предлагаем лучшие финансовые решения для вашего бизнеса." />
    <Section id="services" title="Услуги" content="Наши услуги включают консалтинг, кредитование и инвестиции." />
    <Calculator />
    <Registration />
    <Section id="contact" title="Контакты" content="Свяжитесь с нами по email: example@domain.com" />
    <Footer />
  </div>
);

export default App;
