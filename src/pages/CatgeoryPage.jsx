import BookingSection from "../components/BookingSection/BookingSection";
import FAQSection from "../components/FAQSection/FAQSection";
import HeroSection from "../components/HeroSection/HeroSectionCategoryPage";
import ProductSection from "../components/ProductSection/ProductSection";
import decor from "../assets/decor1.webp";
import decor1 from "../assets/decor2.webp";
import decor2 from "../assets/decor3.webp";
import Wedding from "../assets/wedding2.webp";
import Wedding2 from "../assets/wedding3.webp";
import Wedding3 from "../assets/wedding4.webp";
import bridal from "../assets/bridal.webp";
import bridal1 from "../assets/bridal1.webp";
import bridal2 from "../assets/bridal2.webp";
function CatgeoryPage() {
const sections = [
  {
    title: "Wedding Decor",
    backgroundColor: "#f8f3e7",
    cards: [
      {
        imageUrl: decor,
        title: "Royal Mandap Decoration Package",
        price: 15999.99,
      },
      {
        imageUrl: decor1,
        title: "Mehndi Stage Setup with Floral Backdrop",
        price: 18999.99,
      },
      {
        imageUrl: decor2,
        title: "Sangeet Night Lighting & Drapery",
        price: 21999.99,
      },
    ],
  },
  {
    title: "Wedding Photo and Video",
    backgroundColor: "#f7ead7",
    cards: [
      {
        imageUrl: Wedding,
        title: "Pre-Wedding Shoot at Heritage Palace",
        price: 24999.99,
      },
      {
        imageUrl: Wedding2,
        title: "Traditional Wedding Ceremony Coverage",
        price: 17999.99,
      },
      {
        imageUrl: Wedding3,
        title: "Bidaai Moments Cinematography",
        price: 19999.99,
      },
    ],
  },
  {
    title: "Bridal Ceremonies",
    backgroundColor: "#f9fafb",
    cards: [
      {
        imageUrl: bridal,
        title: "Mehndi Artist with Bridal Design",
        price: 12999.99,
      },
      {
        imageUrl: bridal1,
        title: "Haldi Ceremony Setup with Flowers",
        price: 14999.99,
      },
      {
        imageUrl: bridal2,
        title: "Sangeet Night Dance Floor Package",
        price: 13999.99,
      },
    ],
  },
];
  return (
    <div>
      <HeroSection />
      {sections?.map((item) => (
        <ProductSection
          title={item.title}
          backgroundColor={item.backgroundColor}
          cards={item.cards}
        />
      ))}
      <FAQSection />
      <BookingSection />
    </div>
  );
}

export default CatgeoryPage;
