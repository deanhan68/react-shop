
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

import './style.css'


const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
}


export const CarouselSlider = () => {
    return (
        <div className={'carousel-root'}>
            <Carousel responsive={responsive} autoPlay={true}>
                <div>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8XO-OfEIpwcXrAZnLjK1Uco-7WoVjGZ_S9A&s"/>

                </div>

                <div>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCXdhaxEUPdSJitxjgS8r-DFR71GS6zzbEpw&s"/>
                </div>

                <div>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkRkVRtYhhrYXPoP5H9DVGK9wh19uLyeAiRd_m14e62aLcq51nDAaMDeIC2LJK8wsUPIA&usqp=CAU"/>
                </div>

                <div>
                    <img src="https://ir.ozone.ru/s3/multimedia-1-s/c400/7071385456.jpg"/>
                </div>

                <div>
                    <img src="https://ir.ozone.ru/s3/multimedia-1-8/c400/6990714368.jpg"/>
                </div>

                <div>
                    <img src="https://basket-18.wbbasket.ru/vol2844/part284485/284485257/images/c516x688/1.webp"/>
                </div>

                <div>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlHVUomafvxTKdE7n9Rn1BPgNzBYSkS0XLOQ&s"/>
                </div>

                <div>
                    <img src="https://ae04.alicdn.com/kf/S8915e499b8164b2c8d26cf31fb3fe89fN.jpg"/>
                </div>
                <div>
                    <img
                        src="https://static.insales-cdn.com/r/FjJJ4BoC1JQ/rs:fit:500:500:1/plain/images/products/1/6871/947378903/IMG_0181.JPG@jpg"/>
                </div>
                <div>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmICnVC7tZ8A88sndO_B-YZaWaCLT5eRKjTA&s"/>
                </div>
            </Carousel>
        </div>
    )
}


