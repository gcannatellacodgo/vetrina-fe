import {Input} from "@mantine/core";
import icon_search from "../images/icon_search.png";
import React, {useState} from "react";
import {BodyProdotti} from "../models/BodyProdotti";

export default function InputSearch(){

    const [prodotti, setProdotti] = useState<BodyProdotti[]>([])


    function getProdotti(ricerca:string){
        if(ricerca === ''){
            fetch(`http://localhost:8080/`,{
                method:'GET'
            }).then(async (response)=>{
                if (response.status === 200){
                    var bodyJson = await response.json()
                    console.log(bodyJson.oggettoRitorno)
                    setProdotti(bodyJson.oggettoRitorno)
                }
            })
        }else {
            fetch(`http://localhost:8080/RubricaDB/leggi?parametroRicerca=`+ ricerca,{
                method:'GET'
            }).then(async (response)=>{
                if (response.status === 200){
                    var bodyJson = await response.json()
                    console.log(bodyJson.oggettoRitorno)
                    setProdotti(bodyJson.oggettoRitorno)
                }
            })
        }
    }



    return(

        <Input
            type={"search"}
            placeholder="cerca qui"
            leftSection={<img className={'w-4'} src={icon_search} alt="icon_search"/>}
            styles={{input: {borderRadius: '0 6px 6px 0'}}}
            onChange={event =>{
            getProdotti(event.currentTarget.value)
        }}/>
    )



}