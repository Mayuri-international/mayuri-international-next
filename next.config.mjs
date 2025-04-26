/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**', // wildcard for development (tighten in prod)
        },
      ],
    },
    webpack(config) {
      config.module.rules.push({
        test: /pdf\.worker\.min\.js$/,
        type: 'asset/resource', // this makes ?url work for worker import
      });
  
      return config;
    },
  };
  
  export default nextConfig;
  