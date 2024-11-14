
import { Swiper, SwiperSlide } from 'swiper/react'
import teamImage from "../assets/equipe.jpeg"
import { useState, useEffect } from 'react';



import { register } from 'swiper/element/bundle'

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import { EffectCards, EffectCoverflow, Pagination } from 'swiper/modules';





export function GallerySection(){
    const [slidePerView, setSlidePerView] = useState(2)
    const slideData = [
        {id: '1', image: teamImage},
        {id: '2', image: teamImage},
        {id: '3', image: teamImage},
        {id: '4', image: teamImage},
    ]

    useEffect(() => {
        function handleResize(){
            if(window.innerWidth < 720){
                setSlidePerView(1);
            } else {
                setSlidePerView(2)
            }
        }

        handleResize();

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <section id='gallery' className="w-full flex flex-col gap-3 p-5 items-center mt-10 z-0 bg-orange-400 border-2 border-blue-600">
            <h2 className="font-pixelify text-gray-200 text-3xl mb-4">Galeria</h2>
            <div className='w-full max-w-7xl'>
            <Swiper
            modules={[EffectCoverflow, Pagination]}
            effect={'coverflow'}
            grabCursor={true}
            spaceBetween={30}
            slidesPerView={slidePerView}
            coverflowEffect={{
                rotate:50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation
            >
                {slideData.map((item ) => (
                    <SwiperSlide key={item.id} className='flex justify-center'>
                            <img src={item.image} alt="Slider" className='w-full h-80 object-cover rounded-lg '/>
                    </SwiperSlide>
                ))}
            </Swiper>

            </div>
        </section>
    )
}