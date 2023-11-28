import janeCooper from "../../../assets/JaneCooper.png";
import devonLane from "../../../assets/DevonLane.png";
import robertFox from "../../../assets/RobertFox.png";
import CarouselLeftNavigation from "./CarouselNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselNavigation/CarouselRightNavigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

const ClientReview = () => {
  return (
    <div className="relative">
      <div className="mt-32 mb-[-40px] justify-start items-start text-4xl font-medium w-64">
        What says our happy Clients
      </div>

      {/* Carousel part using swiper.js */}

      <div>
        <Swiper
          className="relative z-auto pt-28"
            modules={[Navigation]}
          slidesPerView={3}
          spaceBetween={30}
          allowTouchMove
        >
          <SwiperSlide>
            <div className="w-[100%] p-4 pt-5 border-[1px] border-neutral-700 rounded-xl">
              <img className=" w-16" src={janeCooper} alt="Jane-Cooper" />
              <div className="mt-5 text-2xl font-semibold">Jane Cooper</div>
              <p className="font-normal mt-2">Ceo of Hunt</p>
              <p className="mt-5 text-neutral-500 text-xs">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                sit aliqua dolor do amet sint. Velit officia
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[100%] p-4 pt-5 border-[1px] border-neutral-700 rounded-xl">
              <img className=" w-16" src={devonLane} alt="Devon-Lane" />
              <div className="mt-5 text-2xl font-semibold">Devon Lane</div>
              <p className="font-normal mt-2">Ceo of Hunt</p>
              <p className="mt-5 text-neutral-500 text-xs">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                sit aliqua dolor do amet sint. Velit officia
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[100%] p-4 pt-5 border-[1px] border-neutral-700 rounded-xl">
              <img className=" w-16" src={robertFox} alt="Rober-Fox" />
              <div className="mt-5 text-2xl font-semibold">Robert Fox</div>
              <p className="font-normal mt-2">Ceo of Hunt</p>
              <p className="mt-5 text-neutral-500 text-xs">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                sit aliqua dolor do amet sint. Velit officia
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[100%] p-4 pt-5 border-[1px] border-neutral-700 rounded-xl">
              <img className=" w-16" src={janeCooper} alt="Jane-Cooper" />
              <div className="mt-5 text-2xl font-semibold">Jane Cooper</div>
              <p className="font-normal mt-2">Ceo of Hunt</p>
              <p className="mt-5 text-neutral-500 text-xs">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                sit aliqua dolor do amet sint. Velit officia
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[100%] p-4 pt-5 border-[1px] border-neutral-700 rounded-xl">
              <img className=" w-16" src={devonLane} alt="Devon-Lane" />
              <div className="mt-5 text-2xl font-semibold">Devon Lane</div>
              <p className="font-normal mt-2">Ceo of Hunt</p>
              <p className="mt-5 text-neutral-500 text-xs">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                sit aliqua dolor do amet sint. Velit officia
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[100%] p-4 pt-5 border-[1px] border-neutral-700 rounded-xl">
              <img className=" w-16" src={robertFox} alt="Rober-Fox" />
              <div className="mt-5 text-2xl font-semibold">Robert Fox</div>
              <p className="font-normal mt-2">Ceo of Hunt</p>
              <p className="mt-5 text-neutral-500 text-xs">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                sit aliqua dolor do amet sint. Velit officia
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[100%] p-4 pt-5 border-[1px] border-neutral-700 rounded-xl">
              <img className=" w-16" src={devonLane} alt="Devon-Lane" />
              <div className="mt-5 text-2xl font-semibold">Devon Lane</div>
              <p className="font-normal mt-2">Ceo of Hunt</p>
              <p className="mt-5 text-neutral-500 text-xs">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                sit aliqua dolor do amet sint. Velit officia
              </p>
            </div>
          </SwiperSlide>
          <div className="absolute z-10 top-0 right-0">
            <div className="inline-block ml-3">
              <CarouselLeftNavigation className="custom-prev-button" />
            </div>
            <div className="inline-block ml-3">
              <CarouselRightNavigation className="custom-next-button" />
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default ClientReview;
