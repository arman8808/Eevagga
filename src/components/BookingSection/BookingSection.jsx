import React from "react";
import BookingForm from "../../pages/BookingForm";

function BookingSection() {
  return (
    <section id="booking-section" className=" relative py-16 md:py-28 bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Decorative Elements */}
      <div className="absolute inset-0  bg-center opacity-10" />
      <div className="absolute left-0 top-1/2 w-1/3 h-3/4 bg-gradient-to-r from-white/50 to-transparent -translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        <div className="flex flex-col lg:flex-row gap-14 xl:gap-28">
          {/* Left Content */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="relative space-y-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-4xl font-normal text-primary leading-tight tracking-tight">
                  Transform Your Vision into Reality
                </h2>
                
                <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                  Complete our simple booking form and our experts will 
                  contact you within <span className="font-semibold text-textYellow">24 hours </span> 
                    to discuss your project details.
                </p>

                {/* Key Benefits List */}
                <ul className="mt-8 space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="shrink-0 mt-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-700">No obligation consultation</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="shrink-0 mt-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-700">Personalized service guarantee</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:w-1/2">
           
              <BookingForm />
           
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingSection;