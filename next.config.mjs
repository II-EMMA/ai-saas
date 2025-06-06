/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "codefa.st",
        pathname: "/assets/**",
      },
    ],
  },
};

export default nextConfig;
