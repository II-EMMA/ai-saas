/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "codefa.st",
        pathname: "/assets/**", // This will match any path within /assets/
      },
    ],
  },
};

export default nextConfig;
