import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BasketDrawer from "./features/landing/components/basket-drawer";
import CategorySection from "./features/landing/components/category-section";
import HeroSection from "./features/landing/components/hero-section";
import LandingHeader from "./features/landing/components/landing-header";
import SiteFooter from "./features/landing/components/site-footer";
import {
  accentColors,
  heroContent,
  testimonialContent,
} from "./features/landing/data/landing-data";
import iceCreamService from "./services/ice-cream-service";

const App = () => {
  const [iceCreamProducts, setIceCreamProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const cartCount = useSelector((state) => state.basket.totalQuantity);

  const handleOpenBasket = () => {
    setIsBasketOpen(true);
  };

  const handleCloseBasket = () => {
    setIsBasketOpen(false);
  };

  useEffect(() => {
    const fetchIceCreams = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await iceCreamService.getAllIceCreams();

        // Transform API data to match expected format
        const transformedData = data.map((item, index) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          unit: "top",
          imageUrl: item.imageUrl,
          accent: accentColors[index % accentColors.length],
          description: item.description,
        }));

        setIceCreamProducts(transformedData);
      } catch (err) {
        setError("Dondurma verileri yüklenirken bir hata oluştu");
      } finally {
        setLoading(false);
      }
    };

    fetchIceCreams();
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-[#a11224] via-[#d43838] to-[#f06f3d] text-white">
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="pointer-events-none absolute -top-20 left-[-10%] h-72 w-72 rounded-full bg-white/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 right-[-5%] h-96 w-96 rounded-full bg-[#ffb347]/30 blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />

      <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-10 md:gap-16 md:py-16">
        <LandingHeader cartCount={cartCount} onOpenBasket={handleOpenBasket} />
        <HeroSection hero={heroContent} testimonial={testimonialContent} />
        <CategorySection
          products={iceCreamProducts}
          loading={loading}
          error={error}
        />
        <SiteFooter />
      </main>

      <BasketDrawer isOpen={isBasketOpen} onClose={handleCloseBasket} />
    </div>
  );
};

export default App;
