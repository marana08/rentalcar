import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ac.goit.global",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;