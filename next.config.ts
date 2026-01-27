import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow placeholder images during development
    unoptimized: false,
    // Add any external image domains here if needed
    remotePatterns: [],
  },
  // Enable strict mode for better debugging
  reactStrictMode: true,
};

export default nextConfig;
