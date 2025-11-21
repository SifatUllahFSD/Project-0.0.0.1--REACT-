import sv1 from '@images/sv1.png'
import sv2 from '@images/sv2.png'
import sv3 from '@images/sv3.png'
import sv4 from '@images/sv4.png'
import sv5 from '@images/sv5.png'
import sv6 from '@images/sv6.png'

function Services(){
    return(
        <>
        <section id='service' className=' pb-[50px] xl:pb-[103px]'>
            <div className="container">
                <div className="w-full sm:w-[400px] md:w-[609px] mx-auto text-center">
                    <h1 className="text-[#151515] text-[25px] md:text-[45px] font-bold font-inter leading-aute ">Our Provided Services</h1>
                    <p className=" pt-[20px] text-[#737373] text-[16px] leading-[26px] font-inter font-normal ">There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.</p>
                </div>

                <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-[40px] md:pt-[50px] px-[20px] gap-[20px] md:gap-[24px] ">
                    <div className=" service-item text-center hover:shadow-one px-[20px] py-[20px] md:px-0 md:py-0 md:pt-[50px] xl:pt-[80px] md:pb-[40px] md:pl-[25px] lg:pl-[15px]  xl:pl-[49px] md:pr-[25px] lg:pr-[15px]  xl:pr-[49px] xl:pb-[47px] rounded-[20px] ">
                        <img src={sv1} alt="" className='mx-auto'/>                 
                         <h3 className="pt-[40px] text-[#151515] text-[25px] font-bold font-inter leading-auto ">Web Design</h3>
                        <p className="pt-[20px] text-[#737373] text-[16px] leading-[26px] font-inter font-normal ">There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                    </div>
                    <div className="service-item text-center hover:shadow-one px-[20px] py-[20px] md:px-0 md:py-0 md:pt-[50px] xl:pt-[80px] md:pb-[40px] md:pl-[25px] lg:pl-[15px]  xl:pl-[49px] md:pr-[25px] lg:pr-[15px]  xl:pr-[49px] xl:pb-[47px] rounded-[20px]">
                        <img className='mx-auto' src={sv2} alt="" />
                        <h3 className="pt-[40px] text-[#151515] text-[25px] font-bold font-inter leading-auto ">UI/UX Design</h3>
                        <p className=" pt-[20px] text-[#737373] text-[16px] leading-[26px] font-inter font-normal ">There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                    </div>

                    <div className="service-item text-center hover:shadow-one px-[20px] py-[20px] md:px-0 md:py-0 md:pt-[50px] xl:pt-[80px] md:pb-[40px] md:pl-[25px] lg:pl-[15px]  xl:pl-[49px] md:pr-[25px] lg:pr-[15px]  xl:pr-[49px] xl:pb-[47px] rounded-[20px]">
                        <img className='mx-auto' src={sv3} alt="" />
                        <h3 className="pt-[40px] text-[#151515] text-[25px] font-bold font-inter leading-auto ">Web Development</h3>
                        <p className=" pt-[20px] text-[#737373] text-[16px] leading-[26px] font-inter font-normal ">There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                    </div>

                     <div className="service-item text-center hover:shadow-one px-[20px] py-[20px] md:px-0 md:py-0 md:pt-[50px] xl:pt-[80px] md:pb-[40px] md:pl-[25px] lg:pl-[15px]  xl:pl-[49px] md:pr-[25px] lg:pr-[15px]  xl:pr-[49px] xl:pb-[47px] rounded-[20px]">
                        <img className='mx-auto' src={sv4} alt="" />
                        <h3 className="pt-[40px] text-[#151515] text-[25px] font-bold font-inter leading-auto ">Motion Graphics</h3>
                        <p className=" pt-[20px] text-[#737373] text-[16px] leading-[26px] font-inter font-normal ">There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                    </div>

                     <div className="service-item text-center hover:shadow-one px-[20px] py-[20px] md:px-0 md:py-0 md:pt-[50px] xl:pt-[80px] md:pb-[40px] md:pl-[25px] lg:pl-[15px]  xl:pl-[49px] md:pr-[25px] lg:pr-[15px]  xl:pr-[49px] xl:pb-[47px] rounded-[20px]">
                        <img className='mx-auto' src={sv5} alt="" />
                        <h3 className="pt-[40px] text-[#151515] text-[25px] font-bold font-inter leading-auto ">3D Animation</h3>
                        <p className=" pt-[20px] text-[#737373] text-[16px] leading-[26px] font-inter font-normal ">There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                    </div>

                     <div className="service-item text-center hover:shadow-one px-[20px] py-[20px] md:px-0 md:py-0 md:pt-[50px] xl:pt-[80px] md:pb-[40px] md:pl-[25px] lg:pl-[15px]  xl:pl-[49px] md:pr-[25px] lg:pr-[15px]  xl:pr-[49px] xl:pb-[47px] rounded-[20px]">
                        <img className='mx-auto' src={sv6} alt="" />
                        <h3 className="pt-[40px] text-[#151515] text-[25px] font-bold font-inter leading-auto ">Digital Marketing</h3>
                        <p className=" pt-[20px] text-[#737373] text-[16px] leading-[26px] font-inter font-normal ">There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Services