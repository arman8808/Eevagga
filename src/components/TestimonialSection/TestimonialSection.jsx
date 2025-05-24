import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestimonialCard from "../Cards/TestimonialCard";

const testimonials = [
  {
    id: 1,
    name: "Jaheer Hussein ",
    role: "Event Planner",
    text: "I've never seen such lovely decor for couples and family gatherings that everyone secretly enjoys. With extremely reasonable prices. ",
    image: "profile1.jpg",
        rating:5
  },
  {
    id: 2,
    name: "Namratha",
    role: "Corporate Client",
    text: "I have visited many Private theatre. I can definitely tell flicker fantasy is one of the best considering there prices very affordable decoration are too amazing, Do select there photography service the best part of there service. Thank you so much for the friendly environment team Flicker fantasy cant wait to come Back ",
    image: "profile2.jpg",
    rating:5
  },

];

export default function TestimonialSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-primary text-3xl md:text-4xl font-normal text-center mb-4">
            Testimonials That Make Us Smile 
          </h2>
          <p className="text-normal text-textGray leading-5 tracking-[.25em]">
           AND YOURS COULD BE NEXT-LET'S MAKE YOUR EVENT UNFORGETTABLE TOO. 
          </p>
        </motion.div>

        {/* Testimonial Slider */}
     <div className="px-4 md:px-8 lg:px-16 relative">
  <Swiper
    modules={[Navigation, Pagination]}
    spaceBetween={40}
    slidesPerView={1}
    navigation={{
      nextEl: '.custom-next',
      prevEl: '.custom-prev',
    }}
    pagination={{
      clickable: true,
      bulletClass: 'custom-bullet',
      bulletActiveClass: 'custom-bullet-active',
    }}
    breakpoints={{
      768: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 60,
      },
    }}
    className="relative"
  >
    {testimonials.map((testimonial) => (
      <SwiperSlide key={testimonial.id}>
        <TestimonialCard {...testimonial} />
      </SwiperSlide>
    ))}

    {/* Custom Navigation Arrows */}
    <div className="custom-next absolute top-1/2 -translate-y-1/2 right-4 z-10 cursor-pointer hover:scale-110 transition-transform">
      <svg className="w-8 h-8 text-[#FFE500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
    <div className="custom-prev absolute top-1/2 -translate-y-1/2 left-4 z-10 cursor-pointer hover:scale-110 transition-transform">
      <svg className="w-8 h-8 text-[#FFE500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  </Swiper>

  {/* Custom Pagination Styles */}
  <style jsx global>{`
    .custom-bullet {
      width: 12px;
      height: 12px;
      background: #6A1B9A;
      opacity: 0.3;
      margin: 0 6px !important;
      transition: all 0.3s ease;
    }

    .custom-bullet-active {
      background: #FFE500;
      opacity: 1;
      width: 24px;
      border-radius: 6px;
    }
  `}</style>
</div>
      </div>
    </section>
  );
}
