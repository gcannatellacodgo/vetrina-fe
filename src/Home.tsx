import copertina from './immagini/ps5.jpg'
export default function Home(){
    return(
        <div className={"relative h-screen flex items-center justify-center overflow-hidden"}>
            <img src={copertina} className="absolute inset-0 object-cover w-full"/>

        </div>

    );
}
