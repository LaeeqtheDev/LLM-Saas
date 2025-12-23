const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ignore lint errors during build
  },
  images: {
    remotePatterns: [
      {
        hostname: "img.clerk.com", // allow Clerk images
      },
    ],
  },
};

export default nextConfig;
