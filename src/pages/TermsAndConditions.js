// import React from "react";
// import { motion } from "framer-motion";
// function TermsAndConditions() {
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
//       className="lg:max-w-[70%] mx-auto p-6"
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//     >
//       <h1 className="lg:text-3xl text-2xl font-semibold mb-6 text-primary">
//         Terms & Conditions
//       </h1>
//       <p className="text-textGray font-semibold mb-4">
//         Last updated on Feb 07th 2025
//       </p>

//       <div className="space-y-8 text-textGray">
//         <section className="border-b border-gray-400 pb-4">
//           <h2 className="text-xl font-semibold mb-4">1. DEFINITIONS</h2>
//           <ul className="list-disc pl-8">
//             <li>
//               "Platform" refers to Eevagga website and mobile
//               application.
//             </li>
//             <li>
//               "User" refers to any individual or entity accessing or using the
//               Platform.
//             </li>
//             <li>
//               "Vendor" refers to third-party service providers offering
//               event-related services on the Platform.
//             </li>
//             <li>
//               "We," "Us," or "Eevagga" refers to Evaga Entertainment Pvt Ltd.
//             </li>
//           </ul>
//         </section>

//         <section className="border-b border-gray-400 pb-4">
//           <h2 className="text-xl font-semibold mb-4">
//             2. SCOPE AND ACCEPTANCE
//           </h2>
//           <p>
//             2.1. These Terms constitute a legally binding agreement between you
//             and Eevagga. By accessing or using the Platform, you agree to comply
//             with all its terms, conditions, and applicable laws.
//           </p>
//           <br />
//           <p>
//             2.2. Eevagga reserves the right to modify, amend, or update these
//             Terms at its sole discretion without prior notice. Continued use of
//             the Platform after such modifications constitutes acceptance of the
//             revised Terms.
//           </p>
//           <br />
//           <p>
//             2.3. Any breach of these Terms shall result in the immediate
//             termination of your account, without prejudice to Eevagga’s rights to
//             seek damages and legal recourse.
//           </p>
//         </section>

//         <section className="border-b border-gray-400 pb-4">
//           <h2 className="text-xl font-semibold mb-4">
//             3. GOVERNING LAW & JURISDICTION
//           </h2>
//           <p>
//             3.1. These Terms shall be governed by and construed in accordance
//             with the laws of India.
//           </p>
//           <br />
//           <p>
//             3.2. Any disputes arising from or related to these Terms shall be
//             subject to the exclusive jurisdiction of the courts in Bangalore,
//             Karnataka.
//           </p>
//         </section>

//         <section className="border-b border-gray-400 pb-4">
//           <h2 className="text-xl font-semibold mb-4">
//             4. USER ELIGIBILITY AND ACCOUNT REGISTRATION
//           </h2>
//           <p>
//             4.1. You must be at least 18 years old and legally competent to
//             enter into a contract under the Indian Contract Act, 1872.
//           </p>
//           <br />
//           <p>
//             4.2. Users shall provide accurate and complete registration details.
//             Misrepresentation of identity, age, or other information shall
//             result in immediate termination of access to the Platform.
//           </p>
//           <br />
//           <p>
//             4.3. Users are solely responsible for maintaining the
//             confidentiality of their account credentials. Any unauthorized use
//             must be reported to Eevagga  immediately. Eevagga shall not be liable for
//             losses resulting from unauthorized access due to negligence.
//           </p>
//         </section>

//         <section className="border-b border-gray-400 pb-4">
//           <h2 className="text-xl font-semibold mb-4">
//             5. ROLE OF Eevagga – MARKETPLACE DISCLAIMER
//           </h2>
//           <p>
//             5.1. Eevagga operates as an intermediary marketplace connecting Users
//             with independent third-party vendors for event-related services.
//           </p>
//           <br />
//           <p>
//             5.2. Eevagga  does not own, control, endorse, or guarantee the quality,
//             availability, legality, or performance of services offered by
//             vendors. The contract for services is strictly between the User and
//             Vendor, and Eevagga bears no liability for any disputes, damages, or
//             non-performance.
//           </p>
//           <br />
//           <p>5.3. Eevagga shall not be liable for:</p>
//           <ul className="list-disc pl-8">
//             <li>Service deficiencies, negligence, or breaches by vendors.</li>
//             <li>Cancellations, rescheduling, or delays caused by vendors.</li>
//             <li>Personal injury, loss, or damage caused by vendor services.</li>
//           </ul>
//         </section>

//         <section className="border-b border-gray-400 pb-4">
//           <h2 className="text-xl font-semibold mb-4">6. FORCE MAJEURE</h2>
//           <p>
//             6.1. Eevagga and its vendors shall not be held liable for any failure
//             or delay in performance caused by events beyond their reasonable
//             control, including but not limited to:
//           </p>
//           <ul className="list-disc pl-8">
//             <li>Acts of God (floods, earthquakes, natural disasters).</li>
//             <li>Government actions, laws, or regulations.</li>
//             <li>War, terrorism, riots, civil unrest.</li>
//             <li>Cyberattacks, data breaches, or internet failures.</li>
//             <li>Pandemics, epidemics, or health crises.</li>
//           </ul>
//           <br />
//           <p>
//             6.2. If a Force Majeure event prevents service delivery for more
//             than 30 days, either party may terminate the agreement without
//             liability, subject to applicable refund and cancellation policies.
//           </p>
//         </section>

//         <section className="border-b border-gray-400 pb-4">
//           <h2 className="text-xl font-semibold mb-4">
//             7. SPECIFIC PENALTIES FOR MISCONDUCT
//           </h2>
//           <p>
//             7.1. Users engaging in fraudulent transactions, misrepresentation,
//             abuse of refund policies, or chargebacks shall be subject to:
//           </p>
//           <ul className="list-disc pl-8">
//             <li>Immediate account termination without refund.</li>
//             <li>
//               Legal action for damages, including financial losses and
//               reputation harm.
//             </li>
//             <li>
//               A penalty of the transaction value, for misuse of Eevagga's payment
//               system.
//             </li>
//           </ul>
//           <br />
//           <p>
//             7.2. Eevagga reserves the right to report fraudulent activities to
//             relevant law enforcement authorities.
//           </p>
//         </section>

//         <section className="border-b border-gray-400 pb-4">
//           <h2 className="text-xl font-semibold mb-4">
//             8. VENDOR LIABILITY CLAUSE
//           </h2>
//           <p>
//             8.1. Vendors listed on the Eevagga platform are independent entities
//             and bear full legal responsibility for their services, including
//             compliance with consumer protection laws.
//           </p>
//           <br />
//           <p>8.2. Users acknowledge that:</p>
//           <ul className="list-disc pl-8">
//             <li>
//               Eevagga is not liable for any vendor’s failure to deliver services.
//             </li>
//             <li>
//               Vendors are solely responsible for service quality, fulfillment,
//               and any resulting disputes.
//             </li>
//             <li>
//               Any legal claims must be directed towards the vendor, and Eevagga
//               shall not be named as a party in such disputes.
//             </li>
//           </ul>
//           <br />
//           <p>
//             8.3. Vendors must ensure compliance with all applicable laws, and
//             failure to do so may result in de-listing, penalties, or legal
//             action by Eevagga.
//           </p>
//         </section>

//         <section className="border-b border-gray-400 pb-4">
//           <h2 className="text-xl font-semibold mb-4">
//             9. PAYMENT TERMS & TRANSACTIONS
//           </h2>
//           <p>
//             9.1. All payments must be processed through the Platform’s
//             designated third-party payment gateways. Users agree to abide by
//             their respective terms and policies.
//           </p>
//           <br />
//           <p>
//             9.2. Eevagga reserves the right to impose service fees, commissions,
//             or transactional charges on bookings, which shall be disclosed at
//             the time of payment.
//           </p>
//           <br />
//           <p>
//             9.3. Eevagga is not liable for technical failures, payment processing
//             delays, chargebacks, or unauthorized transactions initiated by the
//             User’s financial institution.
//           </p>
//         </section>

//         <section className="border-b border-gray-400 pb-4">
//           <h2 className="text-xl font-semibold mb-4">
//             10. CANCELLATION AND REFUNDS
//           </h2>
//           <p>
//             10.1. For all cancellations and refunds, please refer to our
//             Cancellation and Refund Policy.
//           </p>
//         </section>

//         <section className="border-b border-gray-400 pb-4">
//           <h2 className="text-xl font-semibold mb-4">
//             11. INTELLECTUAL PROPERTY RIGHTS
//           </h2>
//           <p>
//             11.1. All content, trademarks, logos, text, images, and software on
//             the Platform are the intellectual property of Eevagga or its
//             licensors.
//           </p>
//           <br />
//           <p>
//             11.2. Users may not copy, reproduce, modify, distribute, or exploit
//             any content from the Platform without prior written consent from
//             Eevagga.
//           </p>
//           <br />
//           <p>
//             11.2. Users may not copy, reproduce, modify, distribute, or exploit
//             any content from the Platform without prior written consent from
//             Eevagga.
//           </p>
//         </section>

//         <section className="border-b border-gray-400 pb-4">
//           <h2 className="text-xl font-semibold mb-4">
//             12. USER-GENERATED CONTENT & REVIEWS
//           </h2>
//           <p>
//             12.1. Users may post reviews, ratings, and comments on the Platform,
//             subject to the following conditions:
//           </p>
//           <ul className="list-disc pl-8">
//             <li>Content must be truthful, lawful, and non-defamatory.</li>
//             <li>
//               Content must not contain hateful, obscene, or misleading
//               statements.
//             </li>
//             <li>
//               Eevagga reserves the right to remove or modify any content deemed
//               inappropriate.
//             </li>
//           </ul>
//           <br />
//           <p>
//             12.2. Users grant Eevagga a non-exclusive, worldwide, royalty-free
//             license to use, display, and distribute user-generated content for
//             marketing purposes.
//           </p>
//         </section>

//         <section className="border-b border-gray-400 pb-4">
//           <h2 className="text-xl font-semibold mb-4">
//             13. LIMITATION OF LIABILITY
//           </h2>
//           <p>
//             13.1. To the fullest extent permitted by law, Eevagga shall not be
//             liable for any:
//           </p>
//           <ul className="list-disc pl-8">
//             <li>Indirect, incidental, or consequential damages.</li>
//             <li>Losses due to vendor service failures.</li>
//             <li>Technical disruptions or system failures.</li>
//           </ul>
//         </section>

//         <section className="border-b border-gray-400 pb-4">
//           <h2 className="text-xl font-semibold mb-4">14. INDEMNIFICATION</h2>
//           <p>
//             14.1. Users agree to indemnify and hold Eevagga harmless from any
//             claims, damages, losses, or liabilities arising from:
//           </p>
//           <ul className="list-disc pl-8">
//             <li>Violation of these Terms.</li>
//             <li>Misuse of the Platform.</li>
//             <li>Third-party disputes.</li>
//           </ul>
//         </section>

//         <section className="border-b border-gray-400 pb-4">
//           <h2 className="text-xl font-semibold mb-4">
//             15. TERMINATION OF ACCESS
//           </h2>
//           <p>
//             15.1. Eevagga reserves the right to suspend or terminate user access
//             for any breach of these Terms, fraudulent activity, or misuse of the
//             Platform.
//           </p>
//           <br />
//           <p>
//             15.2. Termination shall not affect any accrued rights or obligations
//             prior to termination.
//           </p>
//         </section>

//         <section className="border-b border-gray-400 pb-4">
//           <h2 className="text-xl font-semibold mb-4">16. GENERAL PROVISIONS</h2>
//           <p>
//             16.1. Severability: If any provision of these Terms is found to be
//             unenforceable, the remaining provisions shall remain in full effect.
//           </p>
//           <br />
//           <p>
//             16.2. Non-Waiver: Failure to enforce any right under these Terms
//             shall not constitute a waiver of such rights.
//           </p>
//           <br />
//           <p>
//             16.3. Modifications: Eevagga may update these Terms from time to time.
//             Continued use of the Platform constitutes acceptance of the modified
//             Terms.
//           </p>
//         </section>

//         <section className="border-b border-gray-400 pb-4">
//           <p>
//             By using the Eevagga Platform, you acknowledge that you have read,
//             understood, and agreed to these Terms and Conditions. If you have
//             any questions, please contact us at info@evagaentertainment.com
//           </p>
//         </section>
//       </div>
//     </motion.div>
//   );
// }

// export default TermsAndConditions;


import React from "react";
import { motion } from "framer-motion";

function TermsAndConditions() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="lg:max-w-[70%] mx-auto p-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h1 className="lg:text-3xl text-2xl font-semibold mb-4 text-primary">
        TERMS AND CONDITIONS
      </h1>
      <p className="text-textGray font-semibold mb-2">Effective Date: 8th April 2024</p>
      <p className="text-textGray font-semibold mb-6">Website Covered: www.eevagga.com</p>
      <p className="text-textGray mb-6">
        Welcome to Eevagga by Evaga Entertainment Pvt. Ltd. (“Eevagga,” “we,” “us,” or “our"). These Terms and Conditions (“Terms") govern your use of our website https://www.eevagga.com and the services offered through it (collectively, the “Service"). By accessing or using our Service, you agree to be bound by these Terms. If you do not agree, please do not use our Service.
      </p>

      <div className="space-y-8 text-textGray">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Definitions</h2>
          <ul className="list-disc pl-8">
            <li>“User” means any individual or entity using the Service.</li>
            <li>“Content” refers to all information, data, text, graphics, images, audio, video, software, or other materials provided on the Service.</li>
            <li>“Service” means the platform, website, and any services provided by Eevagga.</li>
            <li>“Vendor” means any third party registered with Eevagga to provide event-related services.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. Eligibility</h2>
          <p>You confirm that you are at least 18 years old or have reached the age of majority in your jurisdiction, whichever is higher, and have full legal capacity to enter into these Terms.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. Use of Service</h2>
          <p>3.1 You agree to use the Service only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else’s use and enjoyment of the Service.</p>
          <p>3.2 You shall not:</p>
          <ul className="list-disc pl-8">
            <li>Use the Service in any way that causes, or may cause, damage to the Service or impairment of availability or accessibility.</li>
            <li>Use automated scripts to collect data or content from the Service without permission.</li>
            <li>Upload or transmit viruses, malware, or any code intended to disrupt or damage the Service.</li>
            <li>Attempt to gain unauthorized access to any part of the Service or related systems.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. Account Registration and Security</h2>
          <p>4.1 Some parts of the Service may require you to register and create an account. You agree to provide accurate, current, and complete information.</p>
          <p>4.2 You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</p>
          <p>4.3 You must notify Eevagga immediately of any unauthorized use or security breach.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">5. Intellectual Property Rights</h2>
          <p>5.1 All Content and materials on the Service, including text, graphics, logos, images, audio clips, video clips, data compilations, and software, are the property of Eevagga or its licensors and are protected by copyright, trademark, and other intellectual property laws.</p>
          <p>5.2 You agree not to copy, reproduce, distribute, modify, create derivative works from, publicly display, or exploit any Content without prior written permission from Eevagga.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">6. User Content</h2>
          <p>6.1 Users may post, upload, or submit content (“User Content”) on the Service, including reviews, feedback, and event details.</p>
          <p>6.2 By submitting User Content, you grant Eevagga a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform such content in connection with the Service.</p>
          <p>6.3 You represent and warrant that you own or have all necessary rights to submit the User Content and that it does not infringe or violate any third party rights.</p>
          <p>6.4 Eevagga reserves the right to remove or refuse to publish any User Content that it deems inappropriate, offensive, or violates these Terms.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">7. Vendor Services and Transactions</h2>
          <p>7.1 Eevagga acts as a platform connecting users with vendors providing event-related services.</p>
          <p>7.2 All contracts and transactions for services provided by vendors are solely between the user and the vendor.</p>
          <p>7.3 Eevagga is not responsible for the quality, legality, or delivery of vendor services.</p>
          <p>7.4 Payments made via Eevagga may be subject to terms provided by payment processors.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">8. Prohibited Activities</h2>
          <ul className="list-disc pl-8">
            <li>Engage in fraudulent, misleading, or deceptive conduct.</li>
            <li>Violate any applicable laws or regulations.</li>
            <li>Transmit unsolicited or unauthorized advertising or promotional materials (“spam”).</li>
            <li>Harvest or collect personal data of other users without their consent.</li>
            <li>Interfere with or disrupt the security or integrity of the Service.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">9. Privacy</h2>
          <p>Your use of the Service is also governed by our Privacy Policy, which is incorporated herein by reference. Please review it carefully to understand how we collect, use, and protect your information.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">10. Third-Party Links and Content</h2>
          <p>The Service may contain links to third-party websites, advertisements, or services. Eevagga does not endorse and is not responsible for such third-party content, products, or services.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">11. Disclaimers and Limitation of Liability</h2>
          <p>11.1 The Service is provided “as is” and “as available” without warranties of any kind, express or implied.</p>
          <p>11.2 Eevagga disclaims all warranties, including but not limited to merchantability, fitness for a particular purpose, and non-infringement.</p>
          <p>11.3 To the maximum extent permitted by law, Eevagga’s total liability for any claim arising from your use of the Service shall not exceed INR 1,000 or the amount paid by you in the past six months, whichever is lower.</p>
          <p>11.4 Eevagga shall not be liable for any indirect, incidental, special, consequential, or punitive damages.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">12. Indemnification</h2>
          <p>You agree to indemnify, defend, and hold harmless Eevagga and its officers, directors, employees, and agents from and against all claims, liabilities, damages, losses, and expenses arising from:</p>
          <ul className="list-disc pl-8">
            <li>Your violation of these Terms.</li>
            <li>Your infringement of any intellectual property or other rights.</li>
            <li>Your negligent or wrongful conduct.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">13. Termination</h2>
          <p>13.1 Eevagga may suspend or terminate your access to the Service at any time without prior notice if you violate these Terms or engage in conduct detrimental to Eevagga or other users.</p>
          <p>13.2 Upon termination, all rights granted to you under these Terms will immediately cease.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">14. Force Majeure</h2>
          <p>Eevagga shall not be liable for any delay or failure in performance due to events beyond its reasonable control, including but not limited to natural disasters, acts of government, war, terrorism, or technical failures.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">15. Governing Law and Jurisdiction</h2>
          <p>These Terms shall be governed by and construed under the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of courts located in Bangalore, Karnataka.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">16. Changes to Terms</h2>
          <p>We reserve the right to modify or update these Terms at any time without prior notice. Your continued use of the Service after such changes constitutes acceptance of the updated Terms. Please review these Terms periodically.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">17. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us:</p>
          <p>Eevagga by Evaga Entertainment Pvt. Ltd.</p>
          <p>Email: info@evagaentertainment.com</p>
          <p>Phone: +91 8296157611</p>
          <p>Address: Prestige Atlanta, 1A Koramangala, Bangalore, Karnataka - 560038, India</p>
        </section>
      </div>
    </motion.div>
  );
}

export default TermsAndConditions;
