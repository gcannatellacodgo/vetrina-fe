import React, { useState } from 'react';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');

    const handleChange = (e:any) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log('Email:', email);
    };

    return (
        <div>
            <h2>Recupero Password</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Inserisci la tua email:</label>
                <input type="email" id="email" value={email} onChange={handleChange} required />
                <button type="submit">Invia</button>
            </form>
        </div>
    );
}