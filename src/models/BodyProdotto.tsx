export interface BodyProdotto{

    titolo: string,
    modello: string,
    codice: string,
    descrizione: string,
    prezzo: number

    blobImg: [
        {
            id:number,
            image:string
        },
        {
            id:number,
            image:string
        },
        {
            id:number,
            image:string
        },
        {
            id:number,
            image:string
        }
    ]




}
