import React, {useEffect, useState} from "react";
import {Divider, PasswordInput} from "@mantine/core";
import {BodyProdotto} from "./models/BodyProdotto";


export default function DettaglioProdotto(){

    const[immagine, setImmagine]= useState('')
    const [prodotto, setProdotto] = useState<BodyProdotto>({
        codice: "",
        descrizione: "",
        modello: localStorage.getItem('modello')!,
        prezzo: 0,
        titolo: "",
        blobImg: []
    })


    useEffect(()=>{
        getProductDetails()
    }, [])
    useEffect(() => {
        if (prodotto.blobImg.length>0) {
            setImmagine(prodotto.blobImg[0].image)
        }
    }, [prodotto]);
    // localStorage.setItem('modello', '')
    // var modello = localStorage.getItem('modello')

    function getProductDetails(){

        fetch(`http://192.168.1.126:8080/prodotti/${prodotto.modello}`,{
            method:'GET'
        }).then(async (response)=>{
            if (response.status === 200){
                var bodyJson = await response.json()
                setProdotto(bodyJson)
            }
        })
    }

    return (
        <div>
            <div className={'w-full flex  p-10'}>
                <div className={'w-48 h-20 flex-col'}>
                    {prodotto.blobImg.length >0?prodotto.blobImg.map((item) => (
                        <img className={'w-16 h-16 rounded-md cursor-pointer border-2 border-black  mt-4 mb-5 hover:border-orange-600'}
                             key={item.id}
                             src={'data:image/jpeg;base64, ' +item.image}
                             alt={prodotto.titolo}
                             onClick={() => {
                                 setImmagine(item.image)
                             }}/>
                    )):null}
                </div>

                <div>
                    <img className={'w-[330px] h-[330px]'} src={'data:image/jpeg;base64, ' +immagine}/>
                </div>
                <div>
                    <div className={'w[400px] h-80 flex-col px-5'}>
                        <div className={'text-4xl font-semibold'}>
                            <p> Playstation 5 console slim+1 DualSense white {prodotto.titolo}</p>
                        </div>
                        <div className={'flex text-xs font-serif gap-2 pt-2 '}>
                            <p> MODELLO {prodotto.modello} </p>
                            <p> CODICE {prodotto.codice}</p>
                        </div>
                        <div className={'text-xs font-bold pt-2 '}>
                            <p> PREZZO {prodotto.prezzo}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Divider my="lg"/>
            <div className={'pt-8 px-5 text-xs pb-5'}>
                <p>
                    {prodotto.descrizione}
                </p>
            </div>
        </div>
    )
}