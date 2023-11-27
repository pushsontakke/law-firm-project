// import { useEffect, useState } from "react";
import Leftarrow from "../../../../assets/leftA.svg?react";
// import PropTypes from "prop-types";
import { useSwiper } from "swiper/react";

const CarouselLeftNavigation = () => {
  const swiper = useSwiper();

  // const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  // useEffect(() => {
  //   swiper.on("slideChange", () => {
  //     setIsBeginning(swiper.isBeginning);
  //   });
  // }, [isBeginning, swiper]);

  const handleSlide = () => {
    swiper.slidePrev();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") return handleSlide();
  };

  return (
    <div
      onClick={handleSlide}
      onKeyDown={handleKeyDown}
      className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-white hover:border-4 hover:border-yellow-200 cursor-pointer absolute top-0 left-0"
    >
      <Leftarrow className="w-8 h-8" />
    </div>
  );
};

// CarouselLeftNavigation.propTypes = {
//   onClick: PropTypes.object,
// };

export default CarouselLeftNavigation;
