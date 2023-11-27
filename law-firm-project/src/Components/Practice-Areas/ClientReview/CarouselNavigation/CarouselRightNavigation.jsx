// import PropTypes from "prop-types";
import Rightarrow from "../../../../assets/rightA.svg?react";
// import { useState } from "react";
import { useSwiper } from "swiper/react";

const CarouselRightNavigation = () => {
  const swiper = useSwiper();
//   const [isEnd, setIsEnd] = useState(swiper? swiper.isEnd : false);

//   useEffect(() => {
    // swiper.on("slideChange", () => {
    //   setIsEnd(swiper.isEnd);
    // });
//   }, [isEnd, swiper]);

  const handleSlide = () => {
    swiper.slideNext();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") return handleSlide();
  };

  return (
    <div
      onClick={handleSlide}
      onKeyDown={handleKeyDown}
      className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-white hover:border-4 hover:border-yellow-200 cursor-pointer absolute top-0 right-0"
    >
      <Rightarrow className="w-8 h-8" />
    </div>
    
  );
};

// CarouselRightNavigation.propTypes = {
//   onClick: PropTypes.object,
// };

export default CarouselRightNavigation;
