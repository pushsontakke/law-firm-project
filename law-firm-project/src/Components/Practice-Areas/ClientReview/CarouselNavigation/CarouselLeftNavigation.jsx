import { useEffect, useState } from "react";
import Leftarrow from "../../../../assets/leftA.svg?react";
import { useSwiper } from "swiper/react";

const CarouselLeftNavigation = () => {
  const swiper = useSwiper();

  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsBeginning(swiper.isBeginning);
    });
  }, [isBeginning, swiper]);

  const handleSlide = () => {
    swiper.slidePrev();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") return handleSlide();
  };

  return !isBeginning ? (
    <div
      onClick={handleSlide}
      onKeyDown={handleKeyDown}
      className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-yellow-300 hover:border-4 hover:border-yellow-200 cursor-pointer"
    >
      <Leftarrow className="w-8 h-8" />
    </div>
  ) : (
    <div
      onClick={handleSlide}
      onKeyDown={handleKeyDown}
      className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-white hover:border-4 hover:border-yellow-200 cursor-pointer"
    >
      <Leftarrow className="w-8 h-8" />
    </div>
  );
};

export default CarouselLeftNavigation;