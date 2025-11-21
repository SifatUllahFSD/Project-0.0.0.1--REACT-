
import { useEffect, useState } from "react";

function Success() {
  const [customers, setCustomers] = useState(0);
  const [rating, setRating] = useState(0);
  const [projects, setProjects] = useState(0);

  // Counter animation
  useEffect(() => {
    let custTarget = 200;
    let ratingTarget = 4.5;
    let projectTarget = 351;

    let custInterval = setInterval(() => {
      setCustomers((prev) => {
        if (prev < custTarget) return prev + 1; // প্রতি ধাপে ২ করে বাড়বে
        clearInterval(custInterval);
        return custTarget;
      });
    }, 27);

    let ratingInterval = setInterval(() => {
      setRating((prev) => {
        if (prev < ratingTarget) return parseFloat((prev + 0.1).toFixed(1));
        clearInterval(ratingInterval);
        return ratingTarget;
      });
    }, 115);

    let projInterval = setInterval(() => {
      setProjects((prev) => {
        if (prev < projectTarget) return prev + 1;
        clearInterval(projInterval);
        return projectTarget;
      });
    }, 15);

    return () => {
      clearInterval(custInterval);
      clearInterval(ratingInterval);
      clearInterval(projInterval);
    };
  }, []);

  return (
    <section id="about" className="pt-[60px] xl:pt-[100px] 2xl:pt-[171px] pb-[60px] xl:pb-[100px] 2xl:pb-[149px] px-[20px] 2xl:px-0">
      <div className="container bg-[#E0FFF9] rounded-[20px]">
        <div className="pt-[30px] md:pt-[85px] pr-[20px] md:pr-[37px] pb-[30px] md:pb-[86px] pl-[20px] md:pl-[50px] md:flex gap-0 md:gap-[30px] lg:gap-[85px] xl:gap-[124px] items-center">
          <div className="s-right xl:w-[387px]">
            <h4 className="text-[#6A4DF4] text-[22px] lg:text-[25px] font-inter font-medium leading-[120%]">
              Our Success
            </h4>
            <p className="text-[#151515] text-[18px] md:text-[30px] lg:text-[35px] font-inter font-semibold leading-auto">
              West cost Brand makers-Global Edge
            </p>
          </div>

          <div className="s-left pt-[30px] md:pt-[0px] grid grid-cols-3 text-center md:text-left gap-[25px] md:gap-[20px] lg:gap-[50px] xl:gap-[110px]">
            <div>
              <h2 className=" text-[30px] lg:text-[50px] text-[#151515] font-inter font-bold leading-auto">
                {customers}+
              </h2>
              <p className="text-[16px] lg:text-[20px] text-[#737373] font-inter font-medium leading-[120%]">
                Customer Satisfied
              </p>
            </div>

            <div>
              <h2 className="text-[30px] lg:text-[50px] text-[#151515] font-inter font-bold leading-auto">
                {rating}
              </h2>
              <p className="text-[16px] lg:text-[20px] text-[#737373] font-inter font-medium leading-[120%]">
                200+ Avg rating
              </p>
            </div>

            <div>
              <h2 className="text-[30px] lg:text-[50px] text-[#151515] font-inter font-bold leading-auto">
                {projects}+
              </h2>
              <p className="text-[16px] lg:text-[20px] text-[#737373] font-inter font-medium leading-[120%]">
                Project Delivered
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Success;
