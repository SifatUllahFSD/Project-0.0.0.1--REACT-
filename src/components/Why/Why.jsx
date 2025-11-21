import why1 from '@images/why1.png'
import why2 from '@images/why2.png'
import why3 from '@images/why3.png'
function Why(){
    return(
        <>
         <section id='why' className="">
                    <div className="container pb-[30px] md:pb-[50px] xl:pb-[100px] 2xl:pb-[150px] pt-[50px] xl:pt-[90px] 2xl:pt-[106px]">
                        <div className="w-full sm:w-[440px] lg:w-[802px] mx-auto text-center ">
                            <h1 className=" lg:pl-[200px] lg:pr-[200px] text-[#151515] text-[25px] md:text-[45px] font-bold font-inter leading-aute ">Why You Should Choose Agenc</h1>
                            <p className=" pt-[20px] text-[#737373] text-[16px] leading-[26px] font-inter font-normal ">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        </div>
                        <div className="lg:flex items-center pt-[30px] md:pt-[60px] 2xl:pt-[130px] xl:gap-[70px] 2xl:gap-[105px]">
                             <div className=" pb-[30px] md:pb-[50px] lg:pb-0 px-[30px] md:px-[50px] 2xl:px-0 grid grid-cols-2 gap-[20px]  md:gap-[103px] lg:gap-[20px] xl-gap-[103px] w-full md:w-[790px] ">
                                            <div className="    bg-[#FFFFFF] ">
                                                <img src={why1} alt="" />                 
                                                 <h3 className="pt-[20px] text-[#151515] text-[20px] md:text-[25px] font-bold font-inter  ">Innovative Ideas</h3>
                                                <p className="  text-[#737373] text-[14px] md:text-[16px] leading-[26px] font-inter font-normal ">Because each project is different, we adapt to your business model. </p>
                                            </div>
                                            <div className=" bg-[#FFFFFF]">
                                                <img  src={why1} alt="" />
                                                <h3 className="pt-[20px] text-[#151515] ttext-[20px] md:text-[25px] font-bold font-inter leading-auto ">Innovative Ideas</h3>
                                                <p className="   text-[#737373] text-[14px] md:text-[16px] leading-[26px] font-inter font-normal ">Because each project is different, we adapt to your business model. </p>
                                            </div>
                        
                                            <div className=" bg-[#FFFFFF]">
                                                <img  src={why2} alt="" />
                                                <h3 className="pt-[20px] text-[#151515] text-[20px] md:text-[25px] font-bold font-inter leading-auto ">Dedicated Support</h3>
                                                <p className="  text-[#737373] text-[14px] md:text-[16px] leading-[26px] font-inter font-normal ">We provide 24/7 support for all our clients and serve them professionally.</p>
                                            </div>
                        
                                             <div className=" bg-[#FFFFFF] ">
                                                <img  src={why2} alt="" />
                                                <h3 className="pt-[20px] text-[#151515] text-[20px] md:text-[25px] font-bold font-inter leading-auto ">Dedicated Support</h3>
                                                <p className="  text-[#737373] text-[14px] md:text-[16px] leading-[26px] font-inter font-normal ">We provide 24/7 support for all our clients and serve them professionally. </p>
                                            </div>

                                        </div>
                                        <div className=" px-[20px] xl-px-0  w-full xl:w-[428px] h-full ">
                                            <img src={why3} alt="" className='w-full h-full' />
                                        </div>
                        </div>
                    </div>
                </section>
        
        </>
    )
}
export default Why