import React, { useState } from 'react';
import './LogIn.css';
import { Activity } from 'tabler-icons-react';
import {Input, TextInput} from '@mantine/core';
import MyButton from "./Componenti/MyButton";
import colors from "tailwindcss/colors";

export default function FormRegistrazione() {
    const [formData, setFormData] = useState({
        nome: '',
        cognome: '',
        email: '',
        cellulare: ''
    });





        return (
            <div className="registration-form" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h2 style={{fontSize:'24px'}}>Registrati</h2>
                <TextInput
                    key={1}
                    label="Nome:"
                    variant="filled"
                    styles={{input: {backgroundColor: "#cccccc", width: '300px', padding: '20px', borderRadius: '10px'}}}
                    defaultValue={formData.nome}
                    onChange={(e) => setFormData({...formData, nome: e.target.value})}
                />


                <TextInput
                    label="Cognome:"
                    variant="filled"
                    styles={{input: {backgroundColor: "#cccccc", width: '300px', padding: '20px', borderRadius: '10px'}}}
                    value={formData.cognome}
                    onChange={(e) => setFormData({...formData, cognome: e.target.value})}
                />

                <TextInput
                    label="Email:"
                    variant="filled"
                    styles={{input: {backgroundColor: "#cccccc", width: '300px', padding: '20px', borderRadius: '10px'}}}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                />

                <TextInput
                    label="Cellulare:"
                    variant="filled"
                    styles={{input: {backgroundColor: "#cccccc", width: '300px', padding: '20px', borderRadius: '10px'}}}
                    value={formData.cellulare}
                    onChange={(e) => setFormData({...formData, cellulare: e.target.value})}
                />

                <div onClick={()=>{

                }}>
                    <div
                        className={`w-auto h-12 bg-orange-700 min-w-20 mb-10  hover:opacity-100 rounded-2xl hover:scale-110 duration-500 cursor-pointer  flex flex-col items-center justify-center px-20`}
                        style={{ width: '300px', marginTop: '20px'}}>
                        <p className={'text-sm font-mono text-white '}>Registrati</p>
                    </div>
                </div>
            </div>
        );

}
