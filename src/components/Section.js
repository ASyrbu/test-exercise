import React from 'react';
import '../index.css';

const Section = ({ id, title, content }) => (
    <section id={id} className="section">
        <div className="container">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    </section>
);

export default Section;
