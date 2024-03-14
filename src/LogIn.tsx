import React, { useState } from 'react';
import './LogIn.css';
import {Buffer} from 'buffer'
import passwordicon from './images/icon-pass.png'
import {PasswordInput, rem, TextInput} from "@mantine/core";
import passoff from './images/eye-off.png';

import { Checkbox } from '@mantine/core';

const LogIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [passsowrdVisible, setPasswordVisible] = useState(false);

    const [checked, setChecked] = useState(false);



        return (
            <div className="log-in">
                <h2>Accedi</h2>
                <TextInput
                    label="Inserisci la tua email:"
                    variant="filled"
                    onChange={(event)=>{
                        setFormData({...formData, email: event.currentTarget.value})
                    }}
                    styles={{ input: { backgroundColor: "#cccccc", width: '320px', padding: '20px', borderRadius: '10px' } }}
                />

                <PasswordInput
                    variant="filled"
                    styles={{wrapper:{width:'320px' }, input: { backgroundColor: "#cccccc",  width:'320px', padding:'20px', borderRadius:'10px'} }}
                    label="Inserisci la tua password:"
                    visible={passsowrdVisible}
                    onChange={(txt) => {
                        setFormData({...formData, password: txt.currentTarget.value})
                    }}
                    rightSection={<img className={'w-4'} src={passsowrdVisible ? passwordicon : passoff} onClick={() => {
                        setPasswordVisible(!passsowrdVisible)
                    }}
                    />}
                />

                <div>
                    <div style={{marginTop: '20px', marginBottom:'20px'}}> {}
                        <Checkbox
                            defaultChecked
                            label="Resta connesso"

                        />
                    </div>

                </div>
                <div onClick={()=>{

                    var headers = new Headers()
                    headers.append('Authorization', Buffer.from(`${formData.email}:${formData.password}`).toString('base64') )

                    console.log(formData.password)
                    console.log(formData.email)
                    fetch(`http://192.168.1.126:8080/user`,{
                        method:'GET',
                        headers: headers
                    }).then(async (response)=>{
                        if (response.status === 200){
                            console.log(response.status)
                            response.headers.forEach(function(val, key) { console.log(key + ' -> ' + val); });
                          alert(response.headers.get('message'))
                        }
                    })
                }}>
                    <div
                        className={`w-auto h-12 bg-orange-700 min-w-20 mb-10  hover:opacity-100 rounded-2xl hover:scale-110 duration-500 cursor-pointer  flex flex-col items-center justify-center px-20`}
                        style={{ width: '320px', marginTop: '20px'}}>
                        <p className={'text-sm font-mono text-white '}>Accedi</p>
                    </div>
                </div>

            </div>


        );
    }





export default LogIn;
