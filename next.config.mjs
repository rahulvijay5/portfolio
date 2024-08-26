/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups',
          },
        ],
      },
    ]
  },
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
      {
        protocol: "https",
        hostname: "imagedelivery.net",
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
