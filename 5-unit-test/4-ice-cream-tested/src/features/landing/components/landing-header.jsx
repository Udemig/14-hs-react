import { IceCream, ShoppingCart } from "lucide-react";

const navItems = [
  { id: "home", label: "Anasayfa" },
  { id: "about", label: "Hakkımızda" },
  { id: "nearby", label: "Yakındakiler" },
];

const LandingHeader = ({ cartCount = 0, onOpenBasket }) => {
  const handleNav = () => {};

  const handleCart = () => {
    onOpenBasket();
  };

  return (
    <header className="flex flex-col gap-4 text-white md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-3 text-white">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
          <IceCream className="h-6 w-6 text-white" aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/70">
            Drop Cream
          </p>
          <p className="text-2xl font-bold">Karadutlu</p>
        </div>
      </div>

      <nav className="flex flex-wrap items-center gap-3">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            tabIndex="0"
            aria-label={`${item.label} bölümüne git`}
            onClick={handleNav}
            className="rounded-full px-4 py-2 text-sm font-semibold text-white/70 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/80"
          >
            {item.label}
          </button>
        ))}
      </nav>

      <button
        type="button"
        tabIndex="0"
        aria-label="Sepeti aç"
        onClick={handleCart}
        className="relative inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-rose-600 shadow-lg transition hover:translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
      >
        <ShoppingCart className="h-4 w-4" aria-hidden="true" />
        <span>Sepet</span>
        <span className="absolute -right-2 -top-2 min-w-6 rounded-full bg-amber-400 px-2 py-0.5 text-center text-xs font-bold text-rose-800">
          {cartCount}
        </span>
      </button>
    </header>
  );
};

export default LandingHeader;
