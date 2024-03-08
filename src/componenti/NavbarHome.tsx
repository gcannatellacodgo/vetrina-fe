import React from 'react';
import logo_sito from "../images/logo_sito.png";
import {Button} from "@mantine/core";
import iconCategory from "../images/icons-chevron-right.png"
import LoginNavbar from "./LoginNavbar";
import InputSearch from "./InputSearch";
import {useNavigate} from "react-router-dom";

export default function NavbarHome() {


    var navigate= useNavigate()

    return (


        <div className={'w-full h-28 bg-black mb-8 flex pl-5'}>
            <div className={'w-full flex justify-between items-center gap-x-8'}>

                <div className={'w-[360px]'}>
                    <img className={'cursor-pointer'} src={logo_sito} alt="logo" onClick={()=>(
                        navigate('/')
                    )}/>
                </div>

                <div className={'w-full flex items-center'}>
                    <div>
                        <Button
                            color="rgba(94, 94, 94, 1)"
                            justify="center"
                            rightSection={<img className={'w-3'} src={iconCategory} alt="icon_search"/>}
                            styles={{root: {borderRadius: ' 6px 0 0 6px', width:'120px', height:'36px' }}}>
                            Categorie
                        </Button>

                    </div>

                    <div className={'w-full'}>

                        <InputSearch/>
                    </div>
                </div>
                <div className={' pr-3 items-center'}>
                    <LoginNavbar/>
                </div>
            </div>
        </div>

    )

}
