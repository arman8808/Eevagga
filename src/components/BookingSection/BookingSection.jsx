import React from "react";
import BookingForm from "../../pages/BookingForm";
import bg from "../../assets/background.webp";
function BookingSection() {
  return (
    <section
      id="booking-section"
      className="relative  py-4 bg-gradient-to-br from-gray-50 to-blue-50/30 overflow-hidden"
    >
      {/* Background Image Container */}
      <div className="absolute inset-y-0 left-0 w-2/3 z-0">
        {/* Replace with your actual image path */}
        <div
          className="w-full h-full bg-cover bg-center opacity-10"
          style={{
            backgroundImage: `url("${bg}")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        <div className="flex flex-col lg:flex-row gap-14 xl:gap-28">
          {/* Left Content */}
          <div className="lg:w-1/2 flex flex-col justify-start  z-10">
            <div className="relative ">
              <div className="max-w-2xl pt-20">
                <h2 className="text-3xl md:text-4xl font-bold text-purple-800 leading-tight tracking-tight">
                  Transform Your Vision into Reality
                </h2>

                <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
                  Complete our simple booking form and our experts will contact
                  you within{" "}
                  <span className="font-semibold text-yellow-500">
                    24 hours{" "}
                  </span>
                  to discuss your project details.
                </p>
                <ul className="mt-8 space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="shrink-0 mt-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-700">
                      No obligation consultation
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="shrink-0 mt-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-700">
                      Personalized service guarantee
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Form Placeholder */}
          <div className="lg:w-1/2 z-10">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingSection;
