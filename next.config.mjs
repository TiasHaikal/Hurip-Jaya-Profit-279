/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: build jadi HTML/CSS/JS murni, tanpa Node.js server
  // maupun Vercel Serverless/Edge Function. Ini bikin footprint di
  // Vercel sekecil mungkin (murni "Static Deployment" / CDN).
  output: "export",
  images: {
    // next/image optimization butuh server function, jadi dimatikan.
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
