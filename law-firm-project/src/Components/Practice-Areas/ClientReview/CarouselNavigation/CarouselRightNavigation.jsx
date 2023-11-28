import Rightarrow from "../../../../assets/rightA.svg?react";
import { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";

const CarouselRightNavigation = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper? swiper.isEnd : false);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsEnd(swiper.isEnd);
    });
  }, [isEnd, swiper]);

  const handleSlide = () => {
    swiper.slideNext();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") return handleSlide();
  };

  return !isEnd ? (
    <div
      onClick={handleSlide}
      onKeyDown={handleKeyDown}
      className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#E3B748] hover:border-4 hover:border-yellow-200 cursor-pointer"
    >
      <Rightarrow className="w-8 h-8" />
    </div>
  ) : (
    <div
      onClick={handleSlide}
      onKeyDown={handleKeyDown}
      className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-white cursor-pointer"
    >
      <Rightarrow className="w-8 h-8" />
    </div>
  );
};

export default CarouselRightNavigation;