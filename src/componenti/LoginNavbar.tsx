import {Button, Popover} from "@mantine/core";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function LoginNavbar(){

    const [open, setOpen]= useState(false)
    var navigate= useNavigate()

    return (

        <Popover width={300} position="bottom-end" radius={"lg"}  opened={open}>
                <Popover.Target>
                    <Button variant="filled" color="black" size="md"
                            onClick={() => {
                                setOpen(!open)
                            }}>
                        <div className={'flex flex-col'}>
                            <p className={'font-semibold'}> Benvenuto </p>
                            <p className={'font-light text-xs pt-2'}> Accedi al tuo account </p>
                        </div>

                    </Button>

                </Popover.Target>
                <Popover.Dropdown>
                    <div className={'p-3 gap-2 flex flex-col items-center'}>
                        <Button variant="filled" color="black" size={"sm"}
                                onClick={() => {
                                }}
                                styles={{root: {borderRadius: '10px', width: '250px'}}}>
                            <p onClick={() => {
                                navigate("/login")
                            }}>Accedi</p>
                        </Button>

                        <p>Non sei ancora iscritto? </p>
                        <p onClick={() => {
                            navigate("/registrazione")
                        }} className={'cursor-pointer underline'}> Iscriviti qui </p>
                    </div>

                </Popover.Dropdown>
        </Popover>
    )
}