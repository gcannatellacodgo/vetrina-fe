import React, { useState } from 'react';
import './FormRegistrazione.css';
import MyButton from "./Componenti/MyButton";


export default function FormRegistrazione() {
    const [formData, setFormData] = useState({
        nome: '',
        cognome: '',
        email: '',
        cellulare: ''
    });

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="registration-form">
            <h2>Registrati</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" name="Nome" value={formData.nome} onChange={handleChange}
                           required/>
                </div>

                <div className="form-group">
                    <label htmlFor="cognome">Cognome:</label>
                    <input type="text" id="cognome" name="Cognome" value={formData.cognome} onChange={handleChange}
                           required/>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="Email" value={formData.email} onChange={handleChange}
                           required/>
                </div>

                <div className="form-group">
                    <label htmlFor="cellulare">Cellulare:</label>
                    <input type="text" id="cellulare" name="Cellulare" value={formData.cellulare} onChange={handleChange}
                           required/>
                </div>

                <MyButton myOnClick={() => {
                    const setProvaButton = (bottone3: string) => {

                    };
                    setProvaButton("bottone 3")
                }}  testoBottone={'REGISTRATI'}/>
            </form>
        </div>)
}

