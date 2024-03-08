import React, {useState} from "react";
import {BodyProdotti} from "./models/BodyProdotti";
import {Card, CardSection, Grid, SimpleGrid} from "@mantine/core";
import {useNavigate} from "react-router-dom";


export default function Prodotti() {


    const [prodotti, setProdotti] = useState<BodyProdotti[]>([])

    var navigate= useNavigate()



    function getProdotti(){

        fetch(`http://localhost:8080/`,{
            method:'GET'
        }).then(async (response)=>{
            if (response.status === 200){
                var bodyJson = await response.json()
                setProdotti(bodyJson.oggettoRitorno)
            }
        })
    }


    return (

        <SimpleGrid cols={5} spacing={0}>

            {prodotti.map((item: BodyProdotti) => (

                <div className={'w[350px] bg-white border border-neutral-300'}>
                    <Card className={'h[300px] '} onClick={()=>(
                        navigate("/prodotti/dettaglioProdotto")
                    )}>
                        <CardSection>
                            <img className={'w-full h-full object-cover'} src={item.blobImg[0].image}/>
                        </CardSection>
                        <div className={'flex flex-col text-justify'}>
                        <p className={'font-semibold'}>{item.titolo}</p>
                        <p className={'pt-2 text-xs'}>{item.descrizione}</p>
                        <p className={'font-semibold'}>&euro;{item.prezzo}</p>
                        </div>
                    </Card>
                </div>

            ))}
        </SimpleGrid>
    )
}