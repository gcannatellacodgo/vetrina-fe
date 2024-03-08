import React, {useState} from "react";
import {Divider, PasswordInput} from "@mantine/core";
import {BodyProdotto} from "./models/BodyProdotto";


export default function DettaglioProdotto(){
    const [prodotto, setProdotto] = useState<BodyProdotto>({
        codice: "",
        descrizione: "",
        modello: "",
        prezzo: 0,
        titolo: "",
        blobImg: [
            { id: 0, image: "" },
            { id: 0, image: "" },
            { id: 0, image: "" },
            { id: 0, image: "" }
        ]
    })


    const[immagine, setImmagine]= useState(prodotto.blobImg[0].image)
    // localStorage.setItem('modello', '')
    // var modello = localStorage.getItem('modello')

    function getProductDetails(){

        fetch(`http://localhost:8080/`,{
            method:'GET'
        }).then(async (response)=>{
            if (response.status === 200){
                var bodyJson = await response.json()
                setProdotto(bodyJson.oggettoRitorno)
            }
        })
    }

    return (
        <div>
            <div className={'w-full flex  p-10'}>
                <div className={'w-48 h-20 flex-col'}>
                    {prodotto.blobImg.map((item) => (
                        <img className={'w-16 h-16 rounded-md cursor-pointer border-2 border-black  mt-4 mb-5 hover:border-orange-600'}
                             key={item.id}
                             src={item.image}
                             alt={prodotto.titolo}
                             onClick={() => {
                                 setImmagine(item.image)
                             }}/>
                    ))}
                </div>

                <div>
                    <img className={'w-[330px] h-[330px]'} src={immagine}/>
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