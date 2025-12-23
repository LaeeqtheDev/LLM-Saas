import { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "img.clerk.com" }],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
} as any; // <<<<< bypass type check

export default nextConfig;
