import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import BannerImg from "../../assets/banner_imresizer.jpeg";
import BannerImg1 from "../../assets/Home1_imresizer.jpeg";
import BannerImg2 from "../../assets/Home2.jpeg";
import BannerImg3 from "../../assets/Home3.webp";
import BannerImg4 from "../../assets/Home4.jpeg";
import BannerImg5 from "../../assets/try.jpg";
import BannerImg6 from "../../assets/try1.jpg";
import BannerImg7 from "../../assets/banner_new4.webp";
import BannerImg8 from "../../assets/banner_new1.webp";
import BannerImg9 from "../../assets/banner_new2.webp";
import BannerImg10 from "../../assets/banner_new3.webp";
import BannerImg11 from "../../assets/banner 1.jpeg";
import BannerImg12 from "../../assets/banner 2.jpg";
import BannerImg13 from "../../assets/banner 3.jpeg";
import BannerImg14 from "../../assets/banner 4.jpeg";
import BannerImg15 from "../../assets/banner 5.jpg";
import BannerImg16 from "../../assets/banner 6.jpg";
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
 
    BannerImg16,
    BannerImg15,
    BannerImg14,
    BannerImg13,
    BannerImg12,
    BannerImg11,
    BannerImg10,
    BannerImg9,
    BannerImg8,
    BannerImg7,
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
