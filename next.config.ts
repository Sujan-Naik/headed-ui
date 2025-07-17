import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    transpilePackages: ['headed-ui'],
    experimental: { cssChunking: 'strict' }
};



export default nextConfig;
