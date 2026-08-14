import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
     allowedDevOrigins: [
    '192.168.0.*',  // Allow all devices in 192.168.0.x subnet
    'localhost',
    '127.0.0.1'
  ],
};

export default nextConfig;
