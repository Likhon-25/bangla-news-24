import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ichef.bbci.co.uk'
      },
      {
        protocol: 'http', 
        hostname: 'admin3', 
      },
    ]
  }
};

export default nextConfig;
