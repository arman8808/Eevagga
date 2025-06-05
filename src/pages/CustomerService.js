import React, { useEffect, useState } from "react";
import AccordionCard from "../components/Cards/AccordionCard";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NonOrderRelatedQuery from "../components/Cards/NonOrderRelatedQuery";
import useServices from "../hooks/useServices";
import commonApis from "../services/commonApis";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { internalRoutes } from "../utils/internalRoutes";
function CustomerService() {
  const [activeTab, setActiveTab] = useState("faq");
  const [expanded, setExpanded] = useState(null);
  const userId = Cookies.get("userId");
  const location = useLocation();
  const navigate = useNavigate();
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };
  const email = "info@evagaentertainment.com";
  const subject = "Support Request";
  const body = "Hello Support Team,\n\nI need assistance with...";

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

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

  const CreateQueryApi = useServices(commonApis.CreateQuery);
  const CreateQueryApiHandle = async (data) => {
    if (!userId) {
      localStorage.setItem(
        "pendingQuery",
        JSON.stringify({
          subject: data?.subject,
          query: data?.query,
          redirectPath: location.pathname + (location.search || ""),
        })
      );
  
      navigate(
        `${internalRoutes.userLogin}?redirect=${encodeURIComponent(
          location.pathname + (location.search || "")
        )}`
      );
      return;
    }
  
    try {
      const formData = new FormData();
      formData.append("userId", userId);
      formData.append("role", "User");
      formData.append("subject", data?.subject);
      formData.append("query", data?.query);
  
      const response = await CreateQueryApi.callApi(formData);
  
      if (response) {
        toast.success("Query Submitted successfully!");
      } else {
        toast.error("Failed to create query. Please try again later.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };
  
  useEffect(() => {
    const pendingQuery = localStorage.getItem("pendingQuery");
  
    if (userId && pendingQuery) {
      const queryData = JSON.parse(pendingQuery);
  
      // Add a submission flag to prevent multiple submissions
      if (!queryData.submitted) {
        queryData.submitted = true; // Mark as submitted
        localStorage.setItem("pendingQuery", JSON.stringify(queryData));
  
        // Automatically submit the stored query
        (async () => {
          try {
            const formData = new FormData();
            formData.append("userId", userId);
            formData.append("role", "User");
            formData.append("subject", queryData.subject);
            formData.append("query", queryData.query);
  
            const response = await CreateQueryApi.callApi(formData);
  
            if (response) {
              toast.success("Query Submitted successfully!");
              localStorage.removeItem("pendingQuery"); // Clear localStorage after successful submission
              navigate(queryData.redirectPath || "/");
            } else {
              toast.error("Failed to create query. Please try again later.");
            }
          } catch (error) {
            toast.error("An error occurred while submitting the query.");
          }
        })();
      }
    }
  }, [userId]); 

  return (
    <div className="flex flex-col md:flex-row items-start justify-between gap-5 px-5 py-5 md:px-[2%] md:py-[2%] w-full">
      <div className="flex-[0.28] flex flex-col gap-2">
        <h3 className="text-primary text-xl font-semibold">Eevagga Support</h3>
        <hr />
        {/* <p
          className={
            activeTab === "orderRelQry"
              ? "text-primary cursor-pointer font-medium"
              : "text-textGray cursor-pointer font-medium"
          }
          onClick={() => setActiveTab("orderRelQry")}
        >
          Order Related Query
        </p>{" "} */}
        <p
          className={"text-textGray cursor-pointer font-medium"}
          // onClick={() => setActiveTab("orderRelQry")}
        >
          <Link
            to={"https://whatsapp.com/channel/0029VaWXX585fM5adzGAzC1C"}
            target="_blank"
          >
            Whatsapp Support
          </Link>
        </p>{" "}
        <p
          className={"text-textGray cursor-pointer font-medium"}
          onClick={() => window.open(gmailLink, "_blank")}
        >
          Email Support
        </p>{" "}
        <p
          className={"text-textGray cursor-pointer font-medium"}
          onClick={() => (window.location.href = "tel:+918296157611")}
        >
          Click To Call
        </p>
        <p
          className={
            activeTab === "nonOrderRelQry"
              ? "text-primary cursor-pointer font-medium"
              : "text-textGray cursor-pointer font-medium"
          }
          onClick={() => setActiveTab("nonOrderRelQry")}
        >
          Send Your Query
        </p>
        <p
          className={
            activeTab === "faq"
              ? "text-primary cursor-pointer font-medium"
              : "text-textGray cursor-pointer font-medium"
          }
          onClick={() => setActiveTab("faq")}
        >
          Frequently Asked Questions(FAQs)
        </p>
        <p className={"text-textGray cursor-pointer font-medium"}>
          Call Us : +91 82961 57611
        </p>{" "}
        <p className={"text-textGray cursor-pointer font-medium"}>
          Email Us : info@evagaentertainment.com
        </p>
        <hr />
      </div>
      <div className=" flex-1 md:flex-[0.67] w-full">
        {activeTab === "nonOrderRelQry" && (
          <NonOrderRelatedQuery saveForm={CreateQueryApiHandle} />
        )}
        {activeTab === "faq" &&
          faqData?.map((item, index) => (
            <AccordionCard
              key={index}
              title={item.question}
              summary={item.answer}
              isExpanded={expanded === index}
              onToggle={handleChange(index)}
              panelId={index}
              sn={index + 1}
            />
          ))}
      </div>
    </div>
  );
}

export default CustomerService;
