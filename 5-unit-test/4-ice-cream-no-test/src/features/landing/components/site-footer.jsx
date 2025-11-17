const SiteFooter = () => {
  return (
    <footer className="mt-16 flex flex-col items-center gap-2 text-sm text-white/70">
      <p>© {new Date().getFullYear()} Drop Cream. Tüm hakları saklıdır.</p>
      <p className="text-xs text-white/50">Sevgiyle hazırlanmış dondurma deneyimleri.</p>
    </footer>
  );
};

export default SiteFooter;

