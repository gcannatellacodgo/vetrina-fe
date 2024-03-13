import copertina from './images/ps5.jpg'
import '@mantine/carousel/styles.css';
import ps5Slim from './images/ps5_slim.jpg'
import gameboy from './images/gameboy.jpg'
import {useNavigate} from "react-router-dom";
import {Carousel} from "@mantine/carousel";



export default function Home(){


    
var navigate = useNavigate()

    return(
        <div>
            <div className="w-full">
                <img src={copertina} className="  w-full "/>
            </div>


            <div className={"p-10 flex space-x-3"}>
                <p className={"font-semibold"}> In evidenza</p>

                <div>

                    <p className={"text-sky-400 hover:text-red-800 font-semibold"}  onClick={()=>{
                        navigate("/prodotti")
                    }}>Visualizza tutti i prodottiii

                    </p>
                </div>

            </div>


            <Carousel
                withIndicators
                height={400}
                slideSize="33.333333%"
                slideGap="md"
                loop
                align="start"
                slidesToScroll={3}
            >
                <Carousel.Slide>
                    <div>
                        <div className="absolute top-2 left-2 bg-gray-300 text-black px-2 py-1 ">
                            <p>€239,80</p>
                        </div>
                        <img src={gameboy} className="w-full mb-3"/>
                        <div className="absolute bottom-0  w-full bg-white px-4 py-2">
                            <p className="text-black font-semibold">Gameboy</p>
                        </div>
                    </div>
                </Carousel.Slide>
                <Carousel.Slide>
                    <div>
                        <div className="absolute top-2 left-2 bg-gray-300 text-black px-2 py-1 ">
                            <p>€239,80</p>
                        </div>
                        <img src={ps5Slim} className="w-full mb-3"/>
                        <div className="absolute bottom-0  w-full bg-white px-4 py-2">
                            <p className="text-black font-semibold">Playstation 5 console slim</p>
                        </div>
                    </div>
                </Carousel.Slide>
                <Carousel.Slide>
                    <div>
                        <div className="absolute top-2 left-2 bg-gray-300 text-black px-2 py-1 ">
                            <p>€239,80</p>
                        </div>
                        <img src={gameboy} className="w-full mb-3"/>
                        <div className="absolute bottom-0  w-full bg-white px-4 py-2">
                            <p className="text-black font-semibold">Gameboy</p>
                        </div>
                    </div>
                </Carousel.Slide>
                <Carousel.Slide>
                    <div>
                        <div className="absolute top-2 left-2 bg-gray-300 text-black px-2 py-1 ">
                            <p>€239,80</p>
                        </div>
                        <img src={ps5Slim} className="w-full mb-3"/>
                        <div className="absolute bottom-0 w-full bg-white px-4 py-2">
                            <p className="text-black font-semibold">Playstation 5 console slim</p>
                        </div>
                    </div>
                </Carousel.Slide>
                <Carousel.Slide>
                    <div>
                        <div className="absolute top-2 left-2 bg-gray-300 text-black px-2 py-1 ">
                            <p>€239,80</p>
                        </div>
                        <img src={gameboy} className="w-full mb-3"/>
                        <div className="absolute bottom-0  w-full bg-white px-4 py-2">
                            <p className="text-black font-semibold">Gameboy</p>
                        </div>
                    </div>
                </Carousel.Slide>
                <Carousel.Slide>
                    <div>
                        <div className="absolute top-2 left-2 bg-gray-300 text-black px-2 py-1 ">
                            <p>€239,80</p>
                        </div>
                        <img src={ps5Slim} className="w-full mb-3"/>
                        <div className="absolute bottom-0  w-full bg-white px-4 py-2">
                            <p className="text-black font-semibold">Playstation 5 console slim</p>
                        </div>
                    </div>
                </Carousel.Slide>
                <Carousel.Slide>
                    <div>
                        <div className="absolute top-2 left-2 bg-gray-300 text-black px-2 py-1 ">
                            <p>€239,80 </p>
                        </div>
                        <img src={gameboy} className="w-full mb-3"/>
                        <div className="absolute bottom-0  w-full bg-white px-4 py-2">
                            <p className="text-black font-semibold">Gameboy</p>
                        </div>
                    </div>
                </Carousel.Slide>
            </Carousel>

            </div>

    );
}
