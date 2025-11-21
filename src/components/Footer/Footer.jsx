import logolast from '@images/logolast.png'


function Footer(){

    return(
        <>
        <section id='footer'>
            <div className="container pt-[50px] xl:pt-[150px] px-[20px] 2xl:px-0">
            <div className=" md:flex gap-0 md:gap-[20px] lg:gap-[50px] xl:gap-[131px] px-[20px] lg:px-0">
                <div className=" w-full md:w-[40%] xl:w-[30%]  ">
                    <img src={logolast} alt="" />
                    <p className='font-inter font-normal text-[16px] md:text-[12px] lg:text-[16px] leading-[26px] text-[#7B7B7B] lg:pr-[30px] pt-[30px] '>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                </div>
              <div className="  w-full md:w-[60%] xl:w-[70%]   gap-y-7 md:gap-y-0 grid grid-cols-2 md:grid-cols-4 pt-6 md:pt-0">
                  <div className="">
                    <h1 className=' text-[#151515] text-[20px] md:text-[16px] lg:text-[20px] font-semibold font-inter '>About</h1>
                    <p className='pt-[40px]'><a className=' text-[#7B7B7B] text-[16px] md:text-[12px] lg:text-[16px] font-normal font-inter leading-[40px] '>About Us</a></p>
                    <p><a className=' text-[#7B7B7B] text-[16px] md:text-[12px] lg:text-[16px] font-normal font-inter leading-[40px] '>Features</a></p>
                    <p><a className=' text-[#7B7B7B] text-[16px] md:text-[12px] lg:text-[16px] font-normal font-inter leading-[40px] '>News</a></p>
                    <p><a className=' text-[#7B7B7B] text-[16px] md:text-[12px] lg:text-[16px] font-normal font-inter leading-[40px] '>Careers</a></p>
                </div>
                 <div className="">
                    <h1 className=' text-[#151515] text-[20px] md:text-[16px] lg:text-[20px] font-semibold font-inter '>Company</h1>
                    <p className='pt-[40px]'><a className=' text-[#7B7B7B] text-[16px] md:text-[12px] lg:text-[16px] font-normal font-inter leading-[40px] '>Our Team</a></p>
                    <p><a className=' text-[#7B7B7B] text-[16px] md:text-[12px] lg:text-[16px] font-normal font-inter leading-[40px] '>Partner With Us</a></p>
                    <p><a className=' text-[#7B7B7B] text-[16px] md:text-[12px] lg:text-[16px] font-normal font-inter leading-[40px] '>FAQ</a></p>
                    <p><a className=' text-[#7B7B7B] text-[16px] md:text-[12px] lg:text-[16px] font-normal font-inter leading-[40px] '>Blog</a></p>
                </div>
                 <div className="">
                    <h1 className=' text-[#151515] text-[20px] md:text-[16px] lg:text-[20px] font-semibold font-inter '>Support</h1>
                    <p className='pt-[40px]'><a className=' text-[#7B7B7B] text-[16px] md:text-[12px] lg:text-[16px] font-normal font-inter leading-[40px] '>About</a></p>
                    <p><a className=' text-[#7B7B7B] text-[16px] md:text-[12px] lg:text-[16px] font-normal font-inter leading-[40px] '>Support Center</a></p>
                    <p><a className=' text-[#7B7B7B] text-[16px] md:text-[12px] lg:text-[16px] font-normal font-inter leading-[40px] '>Feedback</a></p>
                    <p><a className=' text-[#7B7B7B] text-[16px] md:text-[12px] lg:text-[16px] font-normal font-inter leading-[40px] '>Contact Us</a></p>
                    <p><a className=' text-[#7B7B7B] text-[16px] md:text-[12px] lg:text-[16px] font-normal font-inter leading-[40px] '>Accesbility</a></p>
                </div>
                    <div className="">
                    <h1 className=' text-[#151515] text-[20px] md:text-[16px] lg:text-[20px] font-semibold font-inter '>Get in touch</h1>
                    <p className='pt-[40px]'><a className=' text-[#7B7B7B] text-[16px] md:text-[12px] lg:text-[16px] font-normal font-inter leading-[40px] '>info@gmail.com</a></p>
                    <p><a className=' text-[#7B7B7B] text-[16px] md:text-[12px] lg:text-[16px] font-normal font-inter leading-[40px] '>+88 0121 0212</a></p>
                </div>
              </div>
            </div>
        </div>
        <div className="container pt-[50px]">
           <div className=" border-t border-[#E8E8E8] ">
             <p className=' text-center pb-[33px] pt-[30px] text-[#D0D0D0] font-normal font-inter text-[16px] leading-[26px]  '>All credit goes to @agence.com</p>
           </div>
        </div>
        </section>
        </>
    )
}

export default Footer