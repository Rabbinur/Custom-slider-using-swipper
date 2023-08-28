import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useRef, useState } from "react";

import team1 from "../../assets/heroes/Rumannar-Rashid-CEO.webp";
import team2 from "../../assets/heroes/Bipasha-Islam-hr-admin.webp";
import team3 from "../../assets/heroes/Muslima-Akhter-Creative-Assistant.webp";
import team4 from "../../assets/heroes/Aminur-Rahman-Assistant-Manager.webp";
import team5 from "../../assets/heroes/Neamuzzaman-Anik-client-service.webp";
import team6 from "../../assets/heroes/Nahiduzzaman-Nahid-Web-Developer-01.webp";
import team7 from "../../assets/heroes/Rabbinur-Web-Developer-01.webp";
import team8 from "../../assets/heroes/K-MD-Ariful-Haque-Web-Developer-01.webp";

import leftArrow from "../../assets/arrow-light.png";
import rightArrow from "../../assets/arrow-light-R.png";
import { Icon } from "@iconify/react";

const Team = () => {
  const swiperRefs = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const goPrevButton = (swiperIndex) => {
    if (swiperRefs[swiperIndex] && swiperRefs[swiperIndex].swiper) {
      swiperRefs[swiperIndex].swiper.slidePrev();
    }
  };

  const goNextButton = (swiperIndex) => {
    if (swiperRefs[swiperIndex] && swiperRefs[swiperIndex].swiper) {
      swiperRefs[swiperIndex].swiper.slideNext();
    }
  };

  useEffect(() => {
    if (swiperRefs.length > 0 && swiperRefs[0].swiper) {
      swiperRefs[0].swiper.autoplay.start();
    }

    return () => {
      if (swiperRefs.length > 0 && swiperRefs[0].swiper) {
        swiperRefs[0].swiper.autoplay.stop();
      }
    };
  }, []);

  const onSwiperSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const handleMouseEnter = () => {
    if (swiperRefs.current) {
      swiperRefs.current.swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRefs.current) {
      swiperRefs.current.swiper.autoplay.start();
    }
  };

  return (
    <div className="py-20 max-w-screen-xl mx-auto lg:mt-20 xl:mt-0" id="team">
      <div className="grid grid-cols-1 lg:grid-cols-5 justify-center items-center">
        <div
          className="col-span-4 justify-end lg:order-1 order-2"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* team swiper slider */}
          <Swiper
            ref={swiperRefs}
            slidesPerView={1} // Set to 1 to show one slide at a time
            spaceBetween={20}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => {
              onSwiperSlideChange(swiper);

              swiper.on("slideChange", () => onSwiperSlideChange(swiper));
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
            navigation={{
              prevEl: ".prev-button",
              nextEl: ".next-button",
            }}
            // loop={true}
            modules={[Navigation]}
            className="mySwiper w-[80%] mx-auto mt-16 relative"
          >
            <SwiperSlide>
              <div className="drop-shadow-2xl text-center relative">
                <div className="">
                  <img src={team1} alt="" className="w-full" />
                  <div className="team-item border-t-4 border-[#0D4D98]">
                    <article className="px-4 py-4">
                      <h1 className="text-2xl font-bold tracking-wider">
                        MD. Rumanur Rashid
                      </h1>
                      <p className="text-base font-thin mt-1">Founder, CEO</p>
                    </article>
                  </div>
                </div>
                <a
                  href="https://www.linkedin.com/in/rumanur-rashid-00712595/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon
                    icon="mdi:linkedin"
                    className="mx-auto mb-3 text-gray-600 hover:text-[#0A66C2] hover:scale-110 duration-300 cursor-pointer"
                    width={25}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="drop-shadow-2xl text-center relative">
                <div className="overflow-hidden">
                  <img src={team2} alt="" className="w-full" />
                  <div className="team-item border-t-4 border-[#0D4D98]">
                    <article className="px-4 py-4">
                      <h1 className="text-2xl font-bold tracking-wider">
                        Bipasha Islam
                      </h1>
                      <p className="text-base font-thin mt-1 ">HR Head</p>
                    </article>
                  </div>
                </div>
                <a href="#" target="_blank" rel="noreferrer">
                  <Icon
                    icon="mdi:linkedin"
                    className="mx-auto mb-3 text-gray-600 hover:text-[#0A66C2] hover:scale-110 duration-300 cursor-pointer"
                    width={25}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="drop-shadow-2xl text-center relative">
                <div className="">
                  <img src={team3} alt="" className="w-full " />
                  <div className="team-item border-t-4 border-[#0D4D98]">
                    <article className="px-4 py-4">
                      <h1 className="text-2xl font-bold tracking-wider">
                        Muslima Akter
                      </h1>
                      <p className="text-base font-thin mt-1">
                        Creative Supervisor{" "}
                      </p>
                    </article>
                  </div>
                </div>
                <a
                  href="https://www.linkedin.com/in/muslima-eati-49026a1b8/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon
                    icon="mdi:linkedin"
                    className="mx-auto mb-3 text-gray-600 hover:text-[#0A66C2] hover:scale-110 duration-300 cursor-pointer"
                    width={25}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="drop-shadow-2xl text-center relative">
                <div className="">
                  <img src={team4} alt="" className="w-full" />
                  <div className="team-item border-t-4 border-[#0D4D98]">
                    <article className="px-4 py-4">
                      <h1 className="text-2xl font-bold tracking-wider">
                        Aminur Rahman
                      </h1>
                      <p className="text-base font-thin mt-1">
                        Assistant Manager
                      </p>
                    </article>
                  </div>
                </div>
                <div className="flex justify-center gap-2">
                  <a
                    href="https://www.linkedin.com/in/aminurrmn/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon
                      icon="mdi:linkedin"
                      className="mx-auto mb-3 text-gray-600 hover:text-[#0A66C2] hover:scale-110 duration-300 cursor-pointer"
                      width={25}
                    />
                  </a>
                  <a
                    href="mailto: aminur.weero@gmail.com "
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon
                      icon="entypo:email"
                      className="mx-auto mb-3 text-gray-600 hover:text-[#E34133] hover:scale-110 duration-300 cursor-pointer"
                      width={25}
                    />
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="drop-shadow-2xl text-center relative">
                <div className="">
                  <img src={team5} alt="" className="w-full" />
                  <div className="team-item border-t-4 border-[#0D4D98]">
                    <article className="px-4 py-4">
                      <h1 className="text-2xl font-bold tracking-wider">
                        MD. Naeemuzzaman
                      </h1>
                      <p className="text-base font-thin mt-1">
                        Executive, Client Service
                      </p>
                    </article>
                  </div>
                </div>
                <a
                  href="https://www.linkedin.com/in/naeemujjaman-anik-756a9a26a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon
                    icon="mdi:linkedin"
                    className="mx-auto mb-3 text-gray-600 hover:text-[#0A66C2] hover:scale-110 duration-300 cursor-pointer"
                    width={25}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="drop-shadow-2xl text-center relative">
                <div className="">
                  <img src={team6} alt="" className="w-full" />
                  <div className="team-item border-t-4 border-[#0D4D98]">
                    <article className="px-4 py-4">
                      <h1 className="text-2xl font-bold tracking-wider">
                        MD. Nahiduzzaman
                      </h1>
                      <p className="text-base font-thin mt-1">
                        {/* Senior Executive (Operation) */}
                        Project Manager
                      </p>
                    </article>
                  </div>
                </div>
                <div className="flex justify-center gap-2">
                  <a
                    href="https://www.linkedin.com/in/nahiduzzaman-web-developer/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon
                      icon="mdi:linkedin"
                      className="mx-auto mb-3 text-gray-600 hover:text-[#0A66C2] hover:scale-110 duration-300 cursor-pointer"
                      width={25}
                    />
                  </a>

                  <a
                    href="mailto: nahiduzzaman.weero@gmail.com "
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon
                      icon="entypo:email"
                      className="mx-auto mb-3 text-gray-600 hover:text-[#E34133] hover:scale-110 duration-300 cursor-pointer"
                      width={25}
                    />
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="drop-shadow-2xl text-center relative">
                <div className="">
                  <img src={team7} alt="" className="w-full" />
                  <div className="team-item border-t-4 border-[#0D4D98]">
                    <article className="px-4 py-4">
                      <h1 className="text-2xl font-bold tracking-wider">
                        Md. Rabbinur Muktar
                      </h1>
                      <p className="text-base font-thin mt-1">
                        Executive (Operation & Development)
                      </p>
                    </article>
                  </div>
                </div>
                <a
                  href="https://www.linkedin.com/in/md-rabbinur-muktar-89a364232/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon
                    icon="mdi:linkedin"
                    className="mx-auto mb-3 text-gray-600 hover:text-[#0A66C2] hover:scale-110 duration-300 cursor-pointer"
                    width={25}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="drop-shadow-2xl text-center relative">
                <div className="">
                  <img src={team8} alt="" className="w-full" />
                  <div className="team-item border-t-4 border-[#0D4D98]">
                    <article className="px-4 py-4">
                      <h1 className="text-2xl font-bold tracking-wider">
                        K Md. Ariful Haque
                      </h1>
                      <p className="text-base font-thin mt-1">
                        Executive (Research & Development)
                      </p>
                    </article>
                  </div>
                </div>
                <a
                  href="https://www.linkedin.com/in/kazi-arif/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon
                    icon="mdi:linkedin"
                    className="mx-auto mb-3 text-gray-600 hover:text-[#0A66C2] hover:scale-110 duration-300 cursor-pointer"
                    width={25}
                  />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="flex justify-center items-center gap-3 pt-12 text-center">
            {/* Swipper BUtton */}
            <div className="flex justify-center items-center gap-3 pt-12 text-center">
              <button
                className={`prev-button duration-500 ${
                  isBeginning ? "opacity-50" : ""
                }`}
                onClick={goPrevButton}
                disabled={isBeginning}
              >
                <img src={leftArrow} alt="" />
              </button>
              <button
                className={`next-button duration-500 ${
                  isEnd ? "opacity-50" : ""
                }`}
                onClick={goNextButton}
                disabled={isEnd}
              >
                <img src={rightArrow} alt="" />
              </button>
            </div>
          </div>
        </div>

        {/* Sub header */}
        <div className="order-1 lg:order-2 md:ml-40 lg:ml-0  md:pb-32 lg:pb-0">
          <div className="title absolute z-30 hidden md:block">
            <p className="text-base text-[#0D4D98] pt-8 font-medium">
              Our Talented
            </p>
            <h2 className="text-[50px] font-extrabold text-black -mt-3 ">
              <span className="text-base">Key</span> Team
            </h2>
          </div>

          <div className="text-center z-30 w-full block md:hidden">
            <p className="text-lg text-[#0D4D98] pt-8 ">Our Talented</p>
            <h2 className="text-[30px] text-black -mt-3">Team</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
