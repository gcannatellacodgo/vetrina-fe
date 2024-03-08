import React, { useState } from 'react';
import './LogIn.css';
import passwordicon from './Icon/icon-pass.png'
import {PasswordInput, rem, TextInput} from "@mantine/core";
import passoff from './Icon/eye-off.png';
import { Activity } from 'tabler-icons-react';
import { Input } from '@mantine/core';
import MyButton from "./Componenti/MyButton";
import colors from "tailwindcss/colors";
import { Checkbox } from '@mantine/core';

const LogIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [passsowrdVisible, setPasswordVisible] = useState(false);

    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(formData);
    };

    const MyButton = (props: { myOnClick: () => void; testoBottone: string }) => {
        const [checked, setChecked] = useState(false);


        return (
            <div className="log-in">
                <h2>Accedi</h2>
                <TextInput
                    label="Inserisci la tua email:"
                    variant="filled"
                    styles={{ input: { backgroundColor: "#cccccc", width: '320px', padding: '20px', borderRadius: '10px' } }}
                />

                <PasswordInput
                    variant="filled"
                    styles={{wrapper:{width:'320px' }, input: { backgroundColor: "#cccccc",  width:'320px', padding:'20px', borderRadius:'10px'} }}
                    label="Inserisci la tua password:"
                    visible={passsowrdVisible}
                    onChange={(txt) => {
                    }}
                    rightSection={<img className={'w-4'} src={passsowrdVisible ? passwordicon : passoff} onClick={() => {
                        setPasswordVisible(!passsowrdVisible)
                    }} />}
                />

                <div>
                    <div style={{marginTop: '20px', marginBottom:'20px'}}> {}
                        <Checkbox
                            defaultChecked
                            label="Resta connesso"

                        />
                    </div>

                </div>
                <div onClick={props.myOnClick}>
                    <div
                        className={`w-auto h-12 bg-orange-700 min-w-20 mb-10  hover:opacity-100 rounded-2xl hover:scale-110 duration-500 cursor-pointer  flex flex-col items-center justify-center px-20`}
                        style={{ width: '320px', marginTop: '20px'}}>
                        <p className={'text-sm font-mono text-white '}>{props.testoBottone}</p>
                    </div>
                </div>
            </div>
        );
    }

    return <MyButton myOnClick={() => {}} testoBottone="Accedi" />;
}

export default LogIn;
