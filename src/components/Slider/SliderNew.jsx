import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import BannerImg from "../../assets/banner_imresizer.jpeg";
import BannerImg1 from "../../assets/Home1_imresizer.jpeg";
import BannerImg2 from "../../assets/Home2.jpeg";
import BannerImg3 from "../../assets/Home3.webp";
import BannerImg4 from "../../assets/Home4.jpeg";
import BannerImg11 from "../../assets/banner 1.jpeg";
import BannerImg12 from "../../assets/banner 2.jpg";
import BannerImg13 from "../../assets/banner 3.jpeg";
import BannerImg14 from "../../assets/banner 4.jpeg";
import BannerImg15 from "../../assets/banner 5.jpg";
import BannerImg16 from "../../assets/banner 6.jpg";
import BannerImg17 from "../../assets/banner 7.jpg";
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
    BannerImg17,
    BannerImg16,
    BannerImg15,
    BannerImg14,
    BannerImg13,
    BannerImg12,
    BannerImg11,
    BannerImg,
    BannerImg3,
    BannerImg1,
    BannerImg2,
    BannerImg4,
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
