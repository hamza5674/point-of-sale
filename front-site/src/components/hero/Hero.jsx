import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../hero/style.css'
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Automatic sliding enabled
    autoplaySpeed: 3000, // Delay between slides (in milliseconds)
    arrows: false
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        <div className="w-full h-screen relative">
          <img className="w-full h-full object-cover align-middle" src={img1} alt="Slide 1" />
          <div className="absolute inset-0 flex items-center justify-center text-center ">
            <div className='text-[#e8ecf1]'>
              <h1 className=" text-2xl md:text-4xl font-bold mb-4 tracking-in-expand-fwd-top ">We Are The Best</h1>
              <p className="text-2xl mt-8 md:text-[70px]  tracking-in-expand-fwd-top">Trendy Collection 2024</p>
            </div>
          </div>
        </div>
        <div className="w-full h-screen relative">
          <img className="w-full h-full object-cover" src={img2} alt="Slide 2" />
          <div className="absolute inset-0 flex items-center justify-center text-center ">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-4 tracking-in-expand-fwd-top">Top Fashion For Men</h1>
              <p className="text-2xl mt-8 md:text-[70px]  tracking-in-expand-fwd-top">Best Fashin For Men</p>
            </div>
          </div>
        </div>
        <div className="w-full h-screen relative">
          <img className="w-full h-full object-cover" src={img3} alt="Slide 3" />
          <div className="absolute inset-0 flex items-center justify-center text-center text-white">
            <div>
              <h1 className="text-4xl font-bold mb-4 ">Slide 1</h1>
              <p className="text-lg">Your text here for slide 1</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
