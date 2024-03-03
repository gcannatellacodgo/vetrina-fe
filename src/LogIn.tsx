import React, { useState } from 'react';
import './LogIn.css';
import passwordicon from './Icon/icon-eye.gif'


export default function LogIn() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });


    const handleChange = (e:any) => {
        const {name, value, type, checked} = e.target;
        const newValue = type === 'checkbox' ? !formData.rememberMe : value;
        setFormData(prevState => ({
            ...prevState,
            [name]: newValue
        }));
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="log-in">
            <h2>Accedi</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Inserisci la tua email:</label>
                    <input type="email" id="email" name="Email" value={formData.email} onChange={handleChange}
                           required/>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Inserisci la tua password:</label>
                    <div className="password-input-container">
                        <input type="password" id="password" name="Password" value={formData.password} onChange={handleChange} required style={{ backgroundImage: `url(${passwordicon})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right', backgroundSize: '20px 20px', paddingLeft: '30px' }} />
                    </div>
                    <div className="additional-options">
                        <input type="checkbox" id="rememberMe" name="rememberMe" checked={formData.rememberMe} onChange={handleChange} />
                        <label htmlFor="rememberMe" className="checkbox-label">Resta connesso</label>
                        <a href="/forgot-password" className="forgot-password">Password dimenticata?</a>
                    </div>
                    <button type="submit" className="submit-button">ACCEDI</button>
                </div>
            </form>
        </div>
    );
}
