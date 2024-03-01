import copertina from './immagini/ps5.jpg'
import '@mantine/carousel/styles.css';
import {Carousel} from "@mantine/carousel";
import ps5Slim from './immagini/ps5_slim.jpg'
import gameboy from './immagini/gameboy.jpg'
export default function Home(){
    return(
        <div>
            <div className="w-full">
                <img src={copertina} className="  w-full "/>
            </div>


            <div className={"p-10 flex space-x-3"}>
                <p className={"font-semibold"}> In evidenza</p>

                <div>
                    <p className={"text-sky-400 hover:text-red-800 font-semibold"}>Visualizza tutti i prodotti</p>
                </div>

            </div>



            <Carousel
                withIndicators
                height={200}
                slideSize="33.333333%"
                slideGap="md"
                loop
                align="start"
                slidesToScroll={3}
            >
                <Carousel.Slide><img src={gameboy}/></Carousel.Slide>
                <Carousel.Slide><img src={ps5Slim}/></Carousel.Slide>
                <Carousel.Slide><img src={gameboy}/></Carousel.Slide>
                <Carousel.Slide><img src={ps5Slim}/></Carousel.Slide>
                <Carousel.Slide><img src={gameboy}/></Carousel.Slide>
                <Carousel.Slide><img src={ps5Slim}/></Carousel.Slide>
                <Carousel.Slide><img src={gameboy}/></Carousel.Slide>
                {/* ...other slides */}
            </Carousel>




        </div>
    );
}
