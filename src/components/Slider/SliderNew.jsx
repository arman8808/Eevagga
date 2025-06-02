import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import BannerImg from "../../assets/banner_imresizer.jpeg";
import BannerImg1 from "../../assets/Home1_imresizer.jpeg";
import BannerImg2 from "../../assets/Home2.jpeg";
import BannerImg3 from "../../assets/Home3.webp";
import BannerImg4 from "../../assets/Home4.jpeg";
import BannerImg5 from "../../assets/try.jpg";
import BannerImg6 from "../../assets/try1.jpg";
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
    BannerImg,
    BannerImg6,
    BannerImg3,
    BannerImg1,
    BannerImg5,
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
