/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export → fully prerendered HTML for every page (great for SEO + Netlify).
  output: 'export',
  // Clean URLs: /cost/kitchen/ instead of /cost/kitchen
  trailingSlash: true,
  // next/image optimization isn't available in static export
  images: { unoptimized: true },
};

export default nextConfig;
