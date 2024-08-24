/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imagedelivery.net",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "pub-820e71ce4d574173a723b481ca8f19c7.r2.dev",
      },
    ],
    // domains: [
    //   "api.microlink.io", // Microlink Image Preview
    // ],
  },
  redirects: async () => {
    return [];
  },
};

export default nextConfig;
