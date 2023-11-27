import janeCooper from "../../../assets/JaneCooper.png";
import devonLane from "../../../assets/DevonLane.png";
import robertFox from "../../../assets/RobertFox.png";
import CarouselLeftNavigation from "./CarouselNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselNavigation/CarouselRightNavigation";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

const ClientReview = () => {
  return (
    <div className="relative">
      <div className="mt-32 justify-start items-start text-4xl font-medium w-64">
        What says our happy Clients
      </div>

      {/* Carousel part using swiper.js */}

      <div className="relative mt-12">

        <Swiper
          className="carousel-container"
        //   modules={[Navigation]}
        navigation={{
            nextEl: '.custom-next-button',
            prevEl: '.custom-prev-button',
        }}
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
          <div
            className="navigation-container"
          >
            <div className="inline-block ml-3">
              <CarouselLeftNavigation />
            </div>
            <div className="inline-block ml-3">
              <CarouselRightNavigation />
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default ClientReview;
