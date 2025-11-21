import work1 from '@images/work1.png'
import work2 from '@images/work2.png'
import work3 from '@images/work3.png'
import work4 from '@images/work4.png'
import work5 from '@images/work5.png'
import work6 from '@images/work6.png'

function Work(){
    return(
        <>
        <section id='work' className="bg-[#F3F3F3]">
            <div className="container pb-[50px] xl:pb-[100px] 2xl:pb-[150px] pt-[50px] xl:pt-[100px] 2xl:pt-[150px]">
                <div className=" w-full sm:w-[400px] md:w-[609px] mx-auto text-center ">
                    <h1 className="text-[#151515] text-[25px] md:text-[45px] font-bold font-inter leading-aute ">Our Recent Work</h1>
                    <p className=" pt-[20px] text-[#737373] text-[16px] leading-[26px] font-inter font-normal ">There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.</p>
                </div>
                 <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-[50px] gap-[24px] px-[20px] 2xl:px-0  ">
                                    <div className=" service-item text-center  rounded-[20px] bg-[#FFFFFF] ">
                                        <img src={work1} alt="" className='mx-auto'/>                 
                                         <h3 className="pt-[30px] text-[#151515] text-[25px] font-bold font-inter leading-auto ">Task Management App</h3>
                                        <p className="pl-[42px] pr-[42px] pb-[30px] text-[#737373] text-[16px] leading-[26px] font-inter font-normal ">This is a task management application that can help you be more </p>
                                    </div>
                                    <div className="service-item text-center  rounded-[20px] bg-[#FFFFFF]">
                                        <img className='mx-auto' src={work2} alt="" />
                                        <h3 className="pt-[40px] text-[#151515] text-[25px] font-bold font-inter leading-auto ">Saas Landing Page Design</h3>
                                        <p className=" pl-[42px] pr-[42px] pb-[30px] text-[#737373] text-[16px] leading-[26px] font-inter font-normal ">This is a task management application that can help you be more </p>
                                    </div>
                
                                    <div className="service-item text-center  rounded-[20px] bg-[#FFFFFF]">
                                        <img className='mx-auto' src={work3} alt="" />
                                        <h3 className="pt-[40px] text-[#151515] text-[25px] font-bold font-inter leading-auto ">App Design</h3>
                                        <p className="pl-[42px] pr-[42px] pb-[30px] text-[#737373] text-[16px] leading-[26px] font-inter font-normal ">This is a task management application that can help you be more </p>
                                    </div>
                
                                     <div className="service-item text-center rounded-[20px] bg-[#FFFFFF] ">
                                        <img className='mx-auto' src={work4} alt="" />
                                        <h3 className="pt-[40px] text-[#151515] text-[25px] font-bold font-inter leading-auto ">Landing Page Design</h3>
                                        <p className="pl-[42px] pr-[42px] pb-[30px]  text-[#737373] text-[16px] leading-[26px] font-inter font-normal ">This is a task management application that can help you be more </p>
                                    </div>
                
                                     <div className="service-item text-center rounded-[20px] bg-[#FFFFFF]">
                                        <img className='mx-auto' src={work5} alt="" />
                                        <h3 className="pt-[40px] text-[#151515] text-[25px] font-bold font-inter leading-auto ">Dashboard Design</h3>
                                        <p className="pl-[42px] pr-[42px] pb-[30px]  text-[#737373] text-[16px] leading-[26px] font-inter font-normal ">This is a task management application that can help you be more </p>
                                    </div>
                
                                     <div className="service-item text-center rounded-[20px] bg-[#FFFFFF]">
                                        <img className='mx-auto' src={work6} alt="" />
                                        <h3 className="pt-[40px] text-[#151515] text-[25px] font-bold font-inter leading-auto ">Web App Design</h3>
                                        <p className="pl-[42px] pr-[42px] pb-[30px] text-[#737373] text-[16px] leading-[26px] font-inter font-normal ">This is a task management application that can help you be more </p>
                                    </div>
                                </div>
            </div>
        </section>
        
        </>
    )
}
export default Work