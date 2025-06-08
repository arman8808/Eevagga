import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const CategoryNewCard = ({ imageUrl, title, text, link }) => {
  return (
    <a
      href={link}
      rel="noopener noreferrer"
      className="relative block h-[350px] w-full overflow-hidden rounded-[1.5rem] shadow-2xl"
    >
      {/* Background Image with Darker Blur */}
      <div className="absolute inset-0">
        <LazyLoadImage
          src={process.env.REACT_APP_API_Aws_Image_BASE_URL + imageUrl}
          alt="Background"
          className="w-full h-full object-cover"
          effect="blur"
          placeholderSrc={"UNIVERSAL_PLACEHOLDER"}
          wrapperClassName="lazy-load-blur-wrapper"
          beforeLoad={() => ({
            style: {
              filter: "blur(20px) brightness(0.9)",
            },
          })}
          afterLoad={() => ({
            style: {
              filter: "blur(0) brightness(1)",
              transition: "filter 0.4s ease-out",
            },
          })}
          onError={(e) => {
            e.target.style.display = "none";
          }}
          threshold={200}
        />
        <div className="absolute inset-0 bg-black/45" />{" "}
        {/* Increased opacity from 30% to 50% */}
      </div>

      {/* Centered Text Container */}
      <div className="absolute bottom-0 left-0 right-0 px-8 pb-8">
        <div className="space-y-4 text-center w-full">
          {/* Title */}
          <h3 className="text-3xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            {title}
          </h3>

          {/* Description */}
          <p className="text-white/90 leading-relaxed line-clamp-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] mx-auto max-w-2xl">
            {text}
          </p>
        </div>
      </div>
    </a>
  );
};

export default CategoryNewCard;
