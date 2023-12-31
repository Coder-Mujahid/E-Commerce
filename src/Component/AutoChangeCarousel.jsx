import img1 from '../../public/img/1 (1).jpg'
import img2 from '../../public/img/1 (2).jpg'
import img3 from '../../public/img/1 (3).jpg'
import img4 from '../../public/img/1 (4).jpg'
import img5 from '../../public/img/1 (5).jpg'

import { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AutoChangeCarousel = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current.slickNext();
    }, 4000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className=' w-11/12 md:h-[600px]  mx-auto  mb-10 '>
      <Slider ref={sliderRef} {...settings}>
      <div className=' bg-black'>
        <img className=' md:h-[600px] w-full' src={img1} alt={img1} />
      </div>
      <div  className=' bg-black'>
        <img className=' md:h-[600px] w-full' src={img2} alt={img2} />
      </div>
      <div  className=' bg-black'>
        <img className=' md:h-[600px] w-full' src={img3} alt={img3} />
      </div>
      <div  className=' bg-black'>
        <img className=' md:h-[600px] w-full' src={img4} alt={img4} />
      </div>
      <div  className=' bg-black'>
        <img className=' md:h-[600px] w-full' src={img5} alt={img5} />
      </div>
    </Slider>
    </div>
  )
}

export default AutoChangeCarousel;
