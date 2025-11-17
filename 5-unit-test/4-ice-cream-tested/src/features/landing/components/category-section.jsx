import { LayoutGrid, PanelsTopLeft, Rows } from "lucide-react";
import { useState } from "react";
import ErrorMessage from "./error-message";
import LoadingSkeleton from "./loading-skeleton";
import ProductCard from "./product-card";
import { viewOptions } from "../data/landing-data";

const iconMap = {
  grid: LayoutGrid,
  rows: Rows,
  showcase: PanelsTopLeft,
};

const CategorySection = ({ products = [], loading = false, error = null }) => {
  console.log(products);

  return (
    <section className="rounded-3xl bg-white/5 p-6 text-white shadow-2xl shadow-rose-900/20 ring-1 ring-white/10 md:p-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">
            Kategori Seçiniz
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Favori Lezzetlerimiz
          </h2>
        </div>

        <div className="flex items-center gap-3">
          {viewOptions.map((option) => {
            const Icon = iconMap[option.id] ?? LayoutGrid;

            return (
              <button
                key={option.id}
                type="button"
                tabIndex="0"
                aria-label={`${option.label} görünümünü seç`}
                className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 text-white/70 transition class:is-active:bg-white class:is-active:text-rose-600 class:is-active:border-transparent`}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </button>
            );
          })}
        </div>
      </div>

      {loading && <LoadingSkeleton />}

      {!loading && error && <ErrorMessage message={error} />}

      {!loading && !error && products.length > 0 && (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {!loading && !error && products.length === 0 && (
        <div className="mt-10 flex flex-col items-center justify-center gap-4 py-12">
          <p className="text-xl font-semibold text-white">
            Henüz ürün bulunmuyor
          </p>
          <p className="text-sm text-white/60">
            Yakında yeni lezzetler eklenecek
          </p>
        </div>
      )}
    </section>
  );
};

export default CategorySection;
