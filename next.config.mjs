/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cbu01.alicdn.com',
            port: '',
        },
          {
            protocol: 'https',
            hostname: 'img.alicdn.com',
            port: '',
         },
        ],
      },
};

export default nextConfig;
