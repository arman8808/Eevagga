import { useState } from "react";
import { motion } from "framer-motion";
import AccordionCard from "../Cards/AccordionCard";

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const faqData = [
    {
      question: "What types of events does Eevagga cater to?",
      answer:
        "We specialize in a wide range of events including weddings, birthdays, baby showers, school and college functions, corporate events and more. Whether you want a full event package or standalone services, we have you covered.",
    },
    {
      question: "Can I customize my event package?",
      answer:
        "Yes! You can choose from ready-made event packages or build your own by selecting standalone services that suit your specific needs and budget.",
    },
    {
      question: "How do I book an event with Eevagga?",
      answer:
        "Booking is easy! You can explore our services online, select your preferred package or individual services, and book directly through our platform. Our team will then get in touch to assist you further.",
    },
    {
      question: "Do you provide services across India?",
      answer:
        "Currently, we primarily serve major cities and metro areas and few foreign countries with plans to expand. Please check availability for your location during the booking process.",
    },
    {
      question: "Are your vendors and service providers verified?",
      answer:
        "Absolutely. All our vendors and partners go through a rigorous verification process to ensure quality, reliability, and professionalism.",
    },
    {
      question: "What if I need help planning my event?",
      answer:
        "Our expert event planners are available to guide you through every step, from conceptualization to execution, making the entire process seamless and stress-free.",
    },
    {
      question: "Can I get a quote before booking?",
      answer:
        "Yes, detailed quotes are provided upfront based on your selected services or package, ensuring transparency with no hidden costs.",
    },
    {
      question: "What is your cancellation and refund policy?",
      answer:
        "Our cancellation and refund policies vary depending on the services booked. Please refer to the specific terms during booking or contact our support team for assistance.",
    },
    {
      question: "Do you offer last-minute bookings?",
      answer:
        "We understand that plans can change suddenly; we try to accommodate last-minute bookings whenever possible. Contact us directly to check availability.",
    },
    {
      question: "How can I contact Eevagga for support or queries?",
      answer:
        "You can reach us via the contact form on our website, email, or phone. Our dedicated support team is ready to assist you promptly.",
    },
  ];

  const handleToggle = (panelIndex) => (_, isExpanded) => {
    setExpandedIndex(isExpanded ? panelIndex : -1);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f1f8f5]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-primary text-4xl md:text-6xl font-normal  mb-6">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          {faqData.map((item, index) => (
            <AccordionCard
              key={index}
              sn={index + 1}
              title={item.question}
              summary={item.answer}
              panelId={`faq-${index}`}
              isExpanded={expandedIndex === index}
              onToggle={handleToggle(index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
