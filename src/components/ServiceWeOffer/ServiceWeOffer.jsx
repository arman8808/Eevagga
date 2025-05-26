import { FiCalendar, FiDroplet, FiHome } from "react-icons/fi";
import { ServiceOfferedCard } from "../Cards/ServiceOfferedCard";




const ServicesSection = () => {
  const services = [
    {
      icon: <FiCalendar className="w-6 h-6" />,
      title: "End-to-End Planning",
      description: "From the first idea to the final goodbye—we plan it all"
    },
    {
      icon: <FiDroplet className="w-6 h-6" />,
      title: "Decor",
      description: "A range of designs to suit every style & budget"
    },
    {
      icon: <FiHome className="w-6 h-6" />,
      title: "Venue",
      description: "Grand palaces, beachside resorts, or cozy gardens—your perfect match"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2  className="text-primary text-3xl md:text-4xl font-normal text-center mb-4">Our Services</h2>
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
