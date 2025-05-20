import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    serverRuntimeConfig: {
        trustProxy: true,
    },
};

export default nextConfig;