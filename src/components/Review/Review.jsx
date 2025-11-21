
import review1 from '@images/review1.png'
import review2 from '@images/review2.png'
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Navigation } from 'swiper/modules';


function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-0 xl:left-[10px] 2xl:left-[-40px] top-1/2 -translate-y-1/2 z-10 text-[#4756DF] hover:text-[#2f3bd1] text-[40px]"
    >
      <FaCircleChevronLeft />
    </button>
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-0 xl:right-[10px] 2xl:right-[-40px] top-1/2 -translate-y-1/2 z-10 text-[#4756DF] hover:text-[#2f3bd1] text-[40px]"
    >
      <FaCircleChevronRight />
    </button>
  );
}


function Review(){

  

    return(
        <>
         <section id='review' className=' pb-[50px] 2xl:pb-[227px]'>
            <div className="container px-[20px] md:px-0 lg:px-[20px] 2xl:px-0 ">
                <div className="w-full md:w-[610px] mx-auto text-center pb-[50px] md:pb-[130px] lg:pb-[70px] xl:pb-[130px]">
                    <h2 className="font-bold font-inter text-[25px] md:text-[45px] text-[#151515] pb-5">Some Client Reviews</h2>
                    <p className="font-inter font-normal leading-[26px] text-[#737373] text-[16px]">There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.</p>
                </div>
            </div>
            <div className="container relative">
                 <button className=" swiper-button-prev absolute left-[-40px] top-1/2 -translate-y-1/2 z-10 text-[#4756DF] hover:text-[#2f3bd1] text-[40px] hidden md:block ">
                    <FaCircleChevronLeft />
                </button>
                <button className="swiper-button-next absolute right-[-40px] top-1/2 -translate-y-1/2 z-10 text-[#4756DF] hover:text-[#2f3bd1] text-[40px] hidden md:block ">
                    <FaCircleChevronRight />
                </button>
                <div className=" gap-6">
                     <Swiper
                        spaceBetween={24}
                        slidesPerView={3} 
                        centeredSlides={true}  
                        loop={true}
                         navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false, }}
                         modules={[Autoplay, Navigation]}

                        breakpoints={{
                            1024: { slidesPerView: 3 ,
                                //  centeredSlides:true
                            },
                            768: {slidesPerView: 2,
                                centeredSlides:false},
                            300: { slidesPerView: 1 ,
                                 centeredSlides:false
                            },
                        }}
       
        className="mySwiper">
                     <SwiperSlide>
                     <div className="item duration-500 px-[58px] lg:px-[30px] xl:px-[58px] py-[54px] lg:py-[25px] xl:py-[54px] rounded-[30px]">
                        <img src={review1} alt="" />
                        <p className='font-inter font-normal leading-[26px] text-[#7B7B7B] text-[16px] pt-5'>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                        <div className='pt-5 flex gap-[5px]'>
                            <FaStar className='text-[#F9BD2C] text-[20px]' />
                            <FaStar className='text-[#F9BD2C] text-[20px]' />
                            <FaStar className='text-[#F9BD2C] text-[20px]' />
                            <FaStar className='text-[#F9BD2C] text-[20px]' />
                            <FaStar className='text-[#F9BD2C] text-[20px]' />
                        </div>
                        <div className='flex pt-8 gap-5 items-center'>
                            <div>
                                <img src={review2} alt="" />
                            </div>
                            <div>
                                <h3 className='font-inter font-semibold text-[20px] text-[#232323] leading-[120%]'>Eric Drake</h3>
                                <p className='font-inter font-normal leading-[26px] text-[#7B7B7B] text-[16px]'>Digital Marketor</p>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                     <SwiperSlide>
                     <div className="item duration-500 px-[58px] lg:px-[30px] xl:px-[58px] py-[54px] lg:py-[25px] xl:py-[54px] rounded-[30px]">
                        <img src={review1} alt="" />
                        <p className='font-inter font-normal leading-[26px] text-[#7B7B7B] text-[16px] pt-5'>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                        <div className='pt-5 flex gap-[5px]'>
                            <FaStar className='text-[#F9BD2C] text-[20px]' />
                            <FaStar className='text-[#F9BD2C] text-[20px]' />
                            <FaStar className='text-[#F9BD2C] text-[20px]' />
                            <FaStar className='text-[#F9BD2C] text-[20px]' />
                            <FaStar className='text-[#F9BD2C] text-[20px]' />
                        </div>
                        <div className='flex pt-8 gap-5 items-center'>
                            <div>
                                <img src={review2} alt="" />
                            </div>
                            <div>
                                <h3 className='font-inter font-semibold text-[20px] text-[#232323] leading-[120%]'>Eric Drake</h3>
                                <p className='font-inter font-normal leading-[26px] text-[#7B7B7B] text-[16px]'>Digital Marketor</p>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                     <SwiperSlide>
                     <div className="item duration-500 px-[58px] lg:px-[30px] xl:px-[58px] py-[54px] lg:py-[25px] xl:py-[54px] rounded-[30px]">
                        <img src={review1} alt="" />
                        <p className='font-inter font-normal leading-[26px] text-[#7B7B7B] text-[16px] pt-5'>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                        <div className='pt-5 flex gap-[5px]'>
                            <FaStar className='text-[#F9BD2C] text-[20px]' />
                            <FaStar className='text-[#F9BD2C] text-[20px]' />
                            <FaStar className='text-[#F9BD2C] text-[20px]' />
                            <FaStar className='text-[#F9BD2C] text-[20px]' />
                            <FaStar className='text-[#F9BD2C] text-[20px]' />
                        </div>
                        <div className='flex pt-8 gap-5 items-center'>
                            <div>
                                <img src={review2} alt="" />
                            </div>
                            <div>
                                <h3 className='font-inter font-semibold text-[20px] text-[#232323] leading-[120%]'>Eric Drake</h3>
                                <p className='font-inter font-normal leading-[26px] text-[#7B7B7B] text-[16px]'>Digital Marketor</p>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                     <SwiperSlide>
                     <div className="item duration-500 px-[58px] lg:px-[30px] xl:px-[58px] py-[54px] lg:py-[25px] xl:py-[54px] rounded-[30px]">
                        <img src={review1} alt="" />
                        <p className='font-inter font-normal leading-[26px] text-[#7B7B7B] text-[16px] pt-5'>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                        <div className='pt-5 flex gap-[5px]'>
                            <FaStar className='text-[#F9BD2C] text-[20px]' />
                            <FaStar className='text-[#F9BD2C] text-[20px]' />
                            <FaStar className='text-[#F9BD2C] text-[20px]' />
                            <FaStar className='text-[#F9BD2C] text-[20px]' />
                            <FaStar className='text-[#F9BD2C] text-[20px]' />
                        </div>
                        <div className='flex pt-8 gap-5 items-center'>
                            <div>
                                <img src={review2} alt="" />
                            </div>
                            <div>
                                <h3 className='font-inter font-semibold text-[20px] text-[#232323] leading-[120%]'>Eric Drake</h3>
                                <p className='font-inter font-normal leading-[26px] text-[#7B7B7B] text-[16px]'>Digital Marketor</p>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                     <div className="item duration-500 px-[58px] lg:px-[30px] xl:px-[58px] py-[54px] lg:py-[25px] xl:py-[54px] rounded-[30px]">
                        <img src={review1} alt="" />
                        <p className='font-inter font-normal leading-[26px] text-[#7B7B7B] text-[16px] pt-5'>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                        <div className='pt-5 flex gap-[5px]'>
                            <FaStar className='text-[#F9BD2C] text-[20px]' />
                            <FaStar className='text-[#F9BD2C] text-[20px]' />
                            <FaStar className='text-[#F9BD2C] text-[20px]' />
                            <FaStar className='text-[#F9BD2C] text-[20px]' />
                            <FaStar className='text-[#F9BD2C] text-[20px]' />
                        </div>
                        <div className='flex pt-8 gap-5 items-center'>
                            <div>
                                <img src={review2} alt="" />
                            </div>
                            <div>
                                <h3 className='font-inter font-semibold text-[20px] text-[#232323] leading-[120%]'>Eric Drake</h3>
                                <p className='font-inter font-normal leading-[26px] text-[#7B7B7B] text-[16px]'>Digital Marketor</p>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                     
                   
                    </Swiper>
                </div>
            </div>
         </section>
       
        </>
    )
}

export default Review