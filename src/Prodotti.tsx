import React, {useEffect, useState} from "react";
import {BodyProdotti} from "./models/BodyProdotti";
import {Card, CardSection, Grid, SimpleGrid} from "@mantine/core";
import {useNavigate} from "react-router-dom";


export default function Prodotti() {


    const [prodotti, setProdotti] = useState<BodyProdotti[]>([])

    var navigate= useNavigate()

        useEffect(()=>{
            getProdotti()
        },[])

    function getProdotti(){

        fetch(`http://192.168.1.126:8080/prodotti`,{
            method:'GET'
        }).then(async (response)=>{
            if (response.status === 200){
                var bodyJson = await response.json()
                setProdotti(bodyJson)
            }
        })
    }


    return (

        <SimpleGrid cols={5} spacing={0}>

            {prodotti.map((item: BodyProdotti) => (

                <div className={'w[350px] bg-white border border-neutral-300'}>
                    <Card className={'h[300px] '} onClick={()=>{
                        localStorage.setItem('modello', item.modello)
                        navigate("/prodotti/dettaglioProdotto")
                    }}>
                        <CardSection>
                            <img className={'w-full h-full object-cover'} src={'data:image/jpeg;base64, ' + item.blobImg[0].image}/>
                        </CardSection>
                        <div className={'flex flex-col text-justify'}>
                        <p className={'font-semibold'}>{item.modello}</p>
                        <p className={'pt-2 text-xs'}>{item.descrizione}</p>
                        <p className={'font-semibold'}>&euro;{item.prezzo}</p>
                        </div>
                    </Card>
                </div>

            ))}
        </SimpleGrid>
    )
}