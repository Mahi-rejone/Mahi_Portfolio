import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets phones and other devices on the local network load the dev server.
  allowedDevOrigins: ["192.168.0.*", "localhost", "127.0.0.1"],
};

export default nextConfig;
