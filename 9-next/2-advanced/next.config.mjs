/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Url'leri güvenli hale getirmek ve next.js'in optimizasyonları yapmasını sağlamak için url ile ekrana bastığımız resimlerin host adreslerini bu dosyada tanımlarız */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },

      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
      },
    ],
  },
};

export default nextConfig;
