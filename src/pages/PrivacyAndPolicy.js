// import React from "react";
// import { motion } from "framer-motion";
// function PrivacyAndPolicy() {
//   const containerVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//         when: "beforeChildren",
//         staggerChildren: 0.3,
//       },
//     },
//   };
//   return (
//     <motion.div
//       className="lg:max-w-[70%] mx-auto p-6 cursor-pointer"
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//     >
//       <h1 className="lg:text-3xl text-2xl font-semibold mb-6 text-primary">
//         Privacy Policy
//       </h1>
//       <p className="text-textGray font-semibold mb-2">
//        Effective Date: April 8th , 2024 | Last updated: May 25th , 2025
//       </p>{" "}
//       <p className="text-textGray font-medium mb-4">
//         <span className="text-textGray font-semibold">
//           {" "}
//           Evaga Entertainment Pvt Ltd
//         </span>{" "}
//         ("Eevagga," "we," "our," "us") respects your privacy and is committed to
//         protecting the personal information you share with us. This Privacy
//         Policy explains how we collect, use, disclose, and safeguard your
//         information when you visit our website, use our services, or interact
//         with us.
//       </p>
//       <div className="space-y-8 text-textGray">
//         <section className="border-b border-gray-400 pb-4 cursor-pointer">
//           <h2 className="text-xl font-semibold mb-4">
//             1. Information We Collect
//           </h2>{" "}
//           <h2 className="text-base font-medium mb-4">
//             1.1 Personal Information
//           </h2>
//           <p>
//             We may collect the following personal information when you register
//             on our platform, book services, or interact with us:
//           </p>
//           <ul className="list-disc pl-8">
//             <li>Name</li>
//             <li>Email address</li>
//             <li>Phone number</li>
//             <li>Billing and shipping address</li>{" "}
//             <li>Event details and preferences</li>
//           </ul>{" "}
//           <h2 className="text-base font-medium mt-3 mb-4">
//             1.2 Non-Personal Information
//           </h2>
//           <p>
//             We may collect non-personal data through cookies, web beacons, and
//             tracking technologies, including:
//           </p>
//           <ul className="list-disc pl-8">
//             <li>IP address</li>
//             <li>Browser type</li>
//             <li>Device information</li>
//             <li>Pages visited on our website</li>{" "}
//             <li>Interaction with our services</li>
//           </ul>
//         </section>

//         <section className="border-b border-gray-400 pb-4 cursor-pointer">
//           <h2 className="text-xl font-semibold mb-4">
//             2. How We Use Your Information
//           </h2>
//           <p>We use the information collected for the following purposes:</p>
//           <br />
//           <ul className="list-disc pl-8">
//             <li>To provide and improve our event planning services</li>
//             <li>To process transactions and payments</li>
//             <li>To send booking confirmations and service updates</li>
//             <li>To respond to customer inquiries and support requests</li>{" "}
//             <li>To personalize user experience and enhance our platform</li>
//             <li>
//               To send promotional emails and marketing updates (with user
//               consent)
//             </li>
//             <li>To comply with legal obligations and prevent fraud</li>
//           </ul>
//         </section>

//         <section className="border-b border-gray-400 pb-4 cursor-pointer">
//           <h2 className="text-xl font-semibold mb-4">3. Consent</h2>
//           <p>
//             By providing your personal information, you consent to its
//             collection and use for the specified purposes. If we request
//             additional information for marketing or other purposes, we will seek
//             your explicit consent.
//           </p>
//           <br />
//           <p>
//             You may withdraw your consent at any time by contacting us at
//             [info@evagaentertainment.com].
//           </p>
//         </section>

//         <section className="border-b border-gray-400 pb-4 cursor-pointer">
//           <h2 className="text-xl font-semibold mb-4">
//             4. Disclosure of Information
//           </h2>
//           <p>
//             We do not sell, rent, or trade your personal information. However,
//             we may disclose your information:
//           </p>
//           <br />
//           <ul className="list-disc pl-8">
//             <li>To comply with legal obligations</li>
//             <li>
//               To service providers and vendors who assist in operating our
//               platform
//             </li>
//             <li>
//               To payment gateways and financial institutions for processing
//               transactions
//             </li>
//             <li>
//               In the event of a merger, acquisition, or sale of company assets
//             </li>{" "}
//           </ul>
//         </section>

//         <section className="border-b border-gray-400 pb-4 cursor-pointer">
//           <h2 className="text-xl font-semibold mb-4">5. Payment Processing</h2>
//           <p>
//             We use secure third-party payment gateways like Razorpay. Payment
//             data is encrypted and handled per PCI-DSS standards. We do not store
//             your credit/debit card details on our servers.
//           </p>
//           <br />
//           <p>
//             For more details, please refer to the Razorpay Privacy Policy at
//             [https://razorpay.com].
//           </p>
//         </section>

//         <section className="border-b border-gray-400 pb-4 cursor-pointer">
//           <h2 className="text-xl font-semibold mb-4">
//             6. Third-Party Services
//           </h2>
//           <p>
//             Certain third-party service providers, such as payment processors,
//             have their own privacy policies. We encourage you to review their
//             policies before using their services.
//           </p>

//           <br />
//           <p>
//             Once you leave our platform or are redirected to a third-party
//             website, our Privacy Policy no longer applies.
//           </p>
//         </section>

//         <section className="border-b border-gray-400 pb-4 cursor-pointer">
//           <h2 className="text-xl font-semibold mb-4">7. Security Measures</h2>
//           <p>
//             We implement industry-standard security measures to protect your
//             personal information from unauthorized access, misuse, or
//             disclosure. However, no online data transmission can be guaranteed
//             100% secure.
//           </p>
//         </section>

//         <section className="border-b border-gray-400 pb-4 cursor-pointer">
//           <h2 className="text-xl font-semibold mb-4">
//             8. Cookies & Tracking Technologies
//           </h2>
//           <p>
//             We use cookies to enhance user experience, track preferences, and
//             improve site functionality. You can manage cookie settings in your
//             browser.
//           </p>
//           <br />
//         </section>

//         <section className="border-b border-gray-400 pb-4 cursor-pointer">
//           <h2 className="text-xl font-semibold mb-4">9. Age of Consent</h2>
//           <p>
//             By using our website, you confirm that you are at least the age of
//             majority in your jurisdiction or have parental consent.
//           </p>
//         </section>

//         <section className="border-b border-gray-400 pb-4 cursor-pointer">
//           <h2 className="text-xl font-semibold mb-4">
//             10. Changes to This Privacy Policy
//           </h2>
//           <p>
//             We reserve the right to update this Privacy Policy at any time.
//             Changes will take effect immediately upon posting. We encourage
//             users to review this policy periodically.
//           </p>
//         </section>

//         <section className="border-b border-gray-400 pb-4 flex flex-col gap-1 cursor-pointer">
//           <h2 className="text-xl font-semibold mb-4">11. Contact Us</h2>
//           <p>For any privacy-related inquiries, please contact us at:</p>
      
//           <p>Evaga Entertainment Pvt Ltd</p>

//           <p>
//             Email: info@evagaentertainment.com Address:No10/12, Prestige Atlanta
//             , 80 Feet Rd, Koramangala , 1 A Block Koramangala , Bengaluru,
//             560034
//           </p>
//           <p>
//             Address:No10/12, Prestige Atlanta , 80 Feet Rd, Koramangala , 1 A
//             Block Koramangala , Bengaluru, 560034
//           </p>
//         </section>
//       </div>
//     </motion.div>
//   );
// }

// export default PrivacyAndPolicy;
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion"; // Assume you have motion variants


// Define color constants for maintainability
const colors = {
  primary: '#6A1B9A',
  secondary: '#757575',
};

const PrivacyPolicy = () => {


  return (
    <motion.main
      initial="hidden"
      animate="show"
      variants={staggerContainer(0.1, 0.2)}
      className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12"
    >
      {/* Header Section */}
      <motion.header className="mb-12">
        <motion.h1 
          variants={fadeIn('up', 'tween', 0.1, 0.6)}
          className="text-3xl md:text-4xl font-bold mb-2"
          style={{ color: colors.primary }}
        >
          Privacy Policy
        </motion.h1>
        <motion.p
          variants={fadeIn('up', 'tween', 0.3, 0.6)}
          className="text-base md:text-lg"
          style={{ color: colors.secondary }}
        >
          Effective Date: April 8th, 2024 | Last updated: May 25th, 2025
        </motion.p>
      </motion.header>

      {/* Policy Sections */}
      <article className="space-y-12">
        {sections.map((section, index) => (
          <motion.section 
            key={section.title}
            variants={fadeIn('up', 'tween', 0.2 + index * 0.1, 0.6)}
            className="space-y-4"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            <h2 className="text-xl font-semibold" style={{ color: colors.secondary }}>
              {section.title}
            </h2>
            
            {section.content && (
              <motion.p 
                className="leading-relaxed"
                style={{ color: colors.secondary }}
                variants={fadeIn('up', 'tween', 0.1, 0.4)}
              >
                {section.content}
              </motion.p>
            )}

            {section.list && (
              <motion.ul 
                className="list-disc pl-6 space-y-2"
                variants={staggerContainer(0.1, 0.2)}
              >
                {section.list.map((item, i) => (
                  <motion.li 
                    key={i}
                    variants={fadeIn('up', 'tween', 0.1, 0.4)}
                    style={{ color: colors.secondary }}
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </motion.section>
        ))}
      </article>

      {/* Contact Section */}
      <motion.section
        variants={fadeIn('up', 'tween', 0.4, 0.6)}
        className="mt-12 pt-8 border-t border-gray-200"
        viewport={{ once: true }}
      >
        <h2 className="text-xl font-semibold mb-6" style={{ color: colors.secondary }}>
          12. Contact Us
        </h2>
        <div className="space-y-3 text-base" style={{ color: colors.secondary }}>
          <p>Evaga Entertainment Pvt. Ltd.</p>
          <p>
            Email: {' '}
            <a 
              href="mailto:info@evagaentertainment.com" 
              className="hover:text-purple-800 transition-colors"
            >
              info@evagaentertainment.com
            </a>
          </p>
          <p>
            Phone: {' '}
            <a 
              href="tel:+9198296157611" 
              className="hover:text-purple-800 transition-colors"
            >
              +91 98296157611
            </a>
          </p>
          <p>Address: Prestige Atlanta 1A Koramangala Bangalore 560034</p>
        </div>
      </motion.section>
    </motion.main>
  );
};


const sections = [
  {
    title: "1. General",
    content: "This website, www.eevagga.com, is operated by Evaga Entertainment Pvt. Ltd. ('We/Our/Us'). We are committed to protecting and respecting your privacy. We collect and process your personal data in accordance with the Information Technology Act, 2000 (21 of 2000) and other applicable national and state laws. Please read this policy carefully to understand our views and practices regarding your personal data."
  },
  {
    title: "2. How We Collect Information",
    content: "We collect information in the following ways:",
    list: [
      "Directly from You: When you visit our website, register, place an order, or communicate with us.",
      "Through Business Interactions: During our interactions with you or your representatives.",
      "From Other Sources: We may receive information from third parties such as public databases, joint marketing partners, or social media platforms."
    ]
  },
  {
    title: "3. Information We Collect",
    content: "We collect various types of information to provide and improve our services:",
    list: [
      "Personal Information: Name, contact details, payment information, and other details you provide.",
      "Technical Information: IP address, browser type, operating system, and usage data collected through cookies and similar technologies.",
      "Transactional Information: Purchase history, preferences, and feedback."
    ]
  },
  {
    title: "4. How We Use Your Information",
    content: "We use the information we collect to:",
    list: [
      "Provide, maintain, and improve our services.",
      "Process transactions and manage your orders.",
      "Personalize your experience and recommend products or services.",
      "Communicate with you about updates, promotions, and customer service matters.",
      "Comply with legal obligations and protect our rights."
    ]
  },
  {
    title: "5. Data Sharing and Transfer",
    content: "We may share your information with:",
    list: [
      "Service Providers: Third parties who perform services on our behalf, such as payment processors, delivery partners, and marketing agencies.",
      "Affiliates and Subsidiaries: Companies within our corporate group.",
      "Legal Authorities: When required to comply with legal obligations or protect our rights."
    ],
    additionalInfo: "We ensure that third parties adhere to data protection principles and process your information in accordance with applicable laws."
  },
  {
    title: "6. Data Security",
    content: "We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security."
  },
  {
    title: "7. Retention of Data",
    content: "We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy or as required by law."
  },
  {
    title: "8. Links to Third-Party Sites",
    content: "Our website may contain links to third-party websites. Please note that these sites have their own privacy policies, and we do not accept any responsibility or liability for their practices."
  },
  {
    title: "9. Your Rights and Choices",
    content: "You have the right to:",
    list: [
      "Access and correct your personal information.",
      "Request deletion of your data.",
      "Opt-out of marketing communications.",
      "Withdraw consent at any time, where applicable."
    ],
    additionalInfo: "To exercise these rights, please contact us using the details provided below."
  },
  {
    title: "10. Children's Privacy",
    content: "Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected such information, we will take steps to delete it."
  },
  {
    title: "11. Changes to This Policy",
    content: "We may update this privacy policy from time to time. Any changes will be posted on this page with an updated 'Effective Date.' We encourage you to review this policy periodically."
  }
];


export default PrivacyPolicy;