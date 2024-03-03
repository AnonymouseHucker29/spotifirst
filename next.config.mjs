/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**i.scdn.co",
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
