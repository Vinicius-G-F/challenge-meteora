import { Autoplay, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import './Carrossel.scss'
import setaDir from './setaDir.svg'
import setaEsq from './setaEsq.svg'

export default function Carrossel() {

  return (
    <div className='carrossel'>
    
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{clickable:true}}
        navigation={true}
        autoplay={{delay: 5000, disableOnInteraction: false}}
        className='swiper'
        loop={true}
      >
        <SwiperSlide>
            <div className='imagem-carrossel-1'></div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='imagem-carrossel-2'></div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='imagem-carrossel-3'></div>
        </SwiperSlide>
      </Swiper>
        <img
          src={setaEsq}
          className="custom-prev"
          alt="Seta Anterior"
        />
        <img
          src={setaDir}
          className="custom-next"
          alt="Seta Próxima"
        />
    </div>
    
  )
}
