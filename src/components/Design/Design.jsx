


function Design(){

    return(
        <>
         <section id="contact" className=" bg-[#F3F3F3]  ">
            <div className="container">
                <div className=" md:flex px-[20px] 2xl:px-0 gap-0 md:gap-5 lg:gap-[50px] xl:gap-[146px] py-[50px] 2xl:py-[150px] items-center ">
                    <div className=" pb-[50px] xl:pb-0 w-full xl:w-[526px] xl:pr-[10px]  ">
                        <h1 className=" sm:text-center md:text-left text-[20px] md:text-[35px] lg:text-[45px] text-[#151515] font-bold font-inter ">We Do design, Code & Development</h1>
                        <p className=" sm:text-center md:text-left pt-[20px] text-[14px] md:text-[16px] font-normal text-[#7B7B7B] font-inter leading-[26px] ">I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                        <p className=" sm:text-center md:text-left pt-[10px] text-[14px] md:text-[16px] font-normal text-[#7B7B7B] font-inter leading-[26px] ">There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.</p>
                    </div>
                    <div className=" bg-[#FFFFFF] rounded-[20px] w-full xl:w-[536px] px-[20px] lg:px-[30px] xl:px-[43px] py-[30px] lg:py-[61px] ">
                        <h1 className=" text-center text-[30px] md:text-[24px] lg:text-[30px] text-[#151515] font-inter font-bold ">Get a free quote now</h1>
                          <form id="con" action="">
                                <div className="mb-5">
                                    <label className="pb-[10px] block font-inter font-medium leading-[26px] text-[#151515] text-[16px]">Name</label>
                                    <input type="text" placeholder="Enter your name" className="border border-[#E8E8E8] px-[23px] py-[19px] w-full rounded-[10px] outline-0" />
                                </div>
                                <div className="mb-5">
                                    <label className="pb-[10px] block font-inter font-medium leading-[26px] text-[#151515] text-[16px]">Email</label>
                                    <input type="email" placeholder="Enter your email" className="border border-[#E8E8E8] px-[23px] py-[19px] w-full rounded-[10px] outline-0" />
                                </div>
                                <div className="mb-[30px]">
                                    <label className="pb-[10px] block font-inter font-medium leading-[26px] text-[#151515] text-[16px]">Phone</label>
                                    <input type="text" placeholder="Enter your phone number" className="border border-[#E8E8E8] px-[23px] py-[19px] w-full rounded-[10px] outline-0" />
                                </div>
                                <div>
                                    <button className="w-full bg-[#6A4DF4] py-[16px] lg:py-[19px] rounded-[10px] font-inter font-semibold text-[18px] lg:text-[20px] leading-[26px] text-white">Get Pricing Now</button>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Design