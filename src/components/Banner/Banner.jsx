import banner from '@images/banner.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Banner(){

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 1500,
         fade: true,
  };
    return(
        <>
        <section id='banner' className=' relative '>
            <img className='w-full h-screen ' src={banner} alt="" />
            <div className=" absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)] ">
                <div className="container  h-full">
                    <div className=" w-full md:max-w-[950px] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 ">
                        
                        <Slider {...settings}>
                            <div className="slider-item text-center mb-[15px]  px-[20px]  md:px-0">
                            <h2 className='mx-auto text-[#FFFFFF] font-inter font-bold text-[30px] sm:text-[45px] lg:text-[75px] leading-[120%] '>We Help brands with high quality services</h2>
                            <p className=' pt-[20px] md:pt-[51px]  pb-[55px] max-w-[621px] mx-auto text-[#ffffff] text-[14px] sm:text-[16px] font-inter font-medium leading-[26px] '>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                            <a href="" className=' text-[16px] md:text-[20px] text-white font-inter font-semibold leading-[26px] bg-[#6A4DF4] px-[24px] md:px-[42px] py-[12px] md:py-[15px] rounded-[10px]'>Get Started</a>
                            </div>

                             <div className="slider-item text-center  mb-[15px] px-[20px] lg:px-0 ">
                            <h2 className='mx-auto text-[#FFFFFF] font-inter font-bold text-[30px] sm:text-[45px] lg:text-[75px] leading-[120%] '>We Help customers with high quality services</h2>
                            <p className=' pt-[20px] md:pt-[51px]  pb-[55px] max-w-[621px] mx-auto text-[#ffffff] text-[14px] sm:text-[16px] font-inter font-medium leading-[26px] '>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                            <a href="" className=' text-[16px] md:text-[20px] text-white font-inter font-semibold leading-[26px] bg-[#6A4DF4] px-[24px] md:px-[42px] py-[12px] md:py-[15px] rounded-[10px]'>Get Started</a>
                            </div>

                             <div className="slider-item text-center  mb-[15px] px-[20px] md:px-0 ">
                            <h2 className='mx-auto text-[#FFFFFF] font-inter font-bold text-[30px] sm:text-[45px] lg:text-[75px] leading-[120%] '>We Help people with high quality services</h2>
                            <p className='pt-[20px] md:pt-[51px]  pb-[55px] max-w-[621px] mx-auto text-[#ffffff] text-[14px] sm:text-[16px] font-inter font-medium leading-[26px] '>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                            <a href="" className=' text-[16px] md:text-[20px] text-white font-inter font-semibold leading-[26px] bg-[#6A4DF4] px-[24px] md:px-[42px] py-[12px] md:py-[15px] rounded-[10px]'>Get Started</a>
                            </div>
   
                        </Slider>
                    </div>
                </div>
            </div>
            
        </section>
        </>
    )
}
export default Banner