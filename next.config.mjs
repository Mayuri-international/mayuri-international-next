/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**', // allow all (not recommended for production)
            },
        ],
    },
};

export default nextConfig;
