import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  A11y,
  EffectFade,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/effect-fade/effect-fade.scss";

SwiperCore.use([Navigation, Pagination, Autoplay, A11y, EffectFade]);

function SwiperCarousel() {
  return (
    <Swiper
      spaceBetween={0}
      speed={800}
      slidesPerView={1}
      loop={true}
      effect={"fade"}
      autoplay={{ delay: 5000, disableOnInteraction: true }}
      pagination={{ clickable: true, dynamicBullets: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide
        style={{
          backgroundImage: `url("https://source.unsplash.com/2ShvY8Lf6l0/800x599")`,
        }}
      >
        Slide 1
      </SwiperSlide>
      <SwiperSlide
        style={{
          backgroundImage: `url("https://source.unsplash.com/PpOHJezOalU/800x599")`,
        }}
      >
        Slide 2
      </SwiperSlide>
      <SwiperSlide
        style={{
          backgroundImage: `url("https://source.unsplash.com/2ShvY8Lf6l0/800x599")`,
        }}
      >
        Slide 3
      </SwiperSlide>
      <SwiperSlide
        style={{
          backgroundImage: `url("https://source.unsplash.com/I1ASdgphUH4/800x599")`,
        }}
      >
        Slide 4
      </SwiperSlide>
      ...
    </Swiper>
  );
}

export default SwiperCarousel;
