import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import BannerImg from "../../assets/banner_imresizer.jpeg";
import BannerImg4 from "../../assets/Home4.jpeg";
import BannerImg11 from "../../assets/banner 1.webp";
import BannerImg13 from "../../assets/banner 3.webp";
import BannerImg14 from "../../assets/banner 4.webp";
import BannerImg15 from "../../assets/banner 5.webp";
import BannerImg16 from "../../assets/banner 6.webp";
import BannerImg17 from "../../assets/banner 7.webp";
import BannerImg23 from "../../assets/banner purchased small.webp";
import BannerImg24 from "../../assets/banner purchased1 small.webp";
import BannerNew from "../Banner/BannerNew";

function SliderNew({}) {
  const responsive = {
    0: {
      items: 1,
    },
    1024: {
      items: 1,
      itemsFit: "contain",
    },
  };
  const img = [
    BannerImg4,
    BannerImg16,
    BannerImg15,
    BannerImg14,
    BannerImg24,
    BannerImg13,
    BannerImg23,
    BannerImg11,
    BannerImg,
    BannerImg17,
  ];
  return (
    <AliceCarousel
      mouseTracking
      responsive={responsive}
      disableButtonsControls
      autoPlay
      infinite
      autoPlayInterval={3000}
      paddingRight={0}
      paddingLeft={0}
    >
      {img?.map((item) => (
        <BannerNew image={item} />
      ))}
    </AliceCarousel>
  );
}

export default SliderNew;
