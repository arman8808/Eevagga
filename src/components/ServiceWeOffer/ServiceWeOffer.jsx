import { ServiceOfferedCard } from "../Cards/ServiceOfferedCard";
import {
  FiCalendar,
  FiMusic,
  FiCamera,
  FiLayers,
  FiGift,
  FiSmile,
  FiScissors,
  FiCoffee,
  FiTruck,
  FiUsers,
  FiMonitor,
  FiPackage,
  FiActivity,
  FiBook,
  FiMapPin,
  FiDroplet,
  FiGrid,
  FiVolume2,
} from "react-icons/fi";

const ServicesSection = () => {
  const services = [
    {
      icon: <FiCalendar className="w-6 h-6" />,
      title: "End-to-End Planning",
      description:
        "From idea to execution, we handle everything for a stress-free event.",
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: "Venue & Locations",
      description:
        "From luxurious resorts to intimate gardens—find your ideal venue.",
    },
    {
      icon: <FiGrid className="w-6 h-6" />,
      title: "Decor & Design",
      description:
        "Stylish setups with floral, draping, backdrops & customized event themes.",
    },
    {
      icon: <FiMusic className="w-6 h-6" />,
      title: "Entertainment",
      description:
        "Bring your event to life with live music, dance, comedy & unique acts.",
    },
    {
      icon: <FiCamera className="w-6 h-6" />,
      title: "Photo & Video",
      description:
        "Capture timeless memories with professional photography and videography.",
    },

    {
      icon: <FiGift className="w-6 h-6" />,
      title: "Gifts & Memorabilia",
      description:
        "Curated keepsakes, event favors & personalized gift options.",
    },
    {
      icon: <FiSmile className="w-6 h-6" />,
      title: "Kids & Family Fun",
      description: "Clowns, games, face painting & carnival acts for all ages.",
    },
    {
      icon: <FiDroplet className="w-6 h-6" />,
      title: "Fashion & Beauty",
      description:
        "Bridal makeup, hairstyling, mehendi & rental jewelry for every occasion.",
    },
    {
      icon: <FiCoffee className="w-6 h-6" />,
      title: "Catering & Beverages",
      description:
        "Delicious spreads with bartending, food trucks, and specialty cuisines.",
    },
    {
      icon: <FiTruck className="w-6 h-6" />,
      title: "Transport & Logistics",
      description:
        "Guest shuttles, valet, VIP cars & logistical support for smooth execution.",
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Event Staffing",
      description:
        "Trained hosts, promoters, security, and crew for seamless on-ground operations.",
    },
    {
      icon: <FiVolume2 className="w-6 h-6" />,
      title: "Audio-Visual",
      description:
        "Lights, LED screens, sound, and tech riders for high-impact shows.",
    },
    {
      icon: <FiPackage className="w-6 h-6" />,
      title: "Essentials & Rentals",
      description:
        "Furniture, tents, restrooms, electronics & entertainment rentals.",
    },
    {
      icon: <FiActivity className="w-6 h-6" />,
      title: "Health & Wellness",
      description:
        "On-site spa, massage, yoga & wellness experts for rejuvenating experiences.",
    },
    {
      icon: <FiBook className="w-6 h-6" />,
      title: "Religious Services",
      description:
        "Priests, spiritual leaders & rituals across faiths for all ceremonies.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-primary text-3xl md:text-4xl font-normal text-center mb-4">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceOfferedCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
