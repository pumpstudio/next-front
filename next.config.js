/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    formats: ['image/avif','image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pump-next-ecommerce.s3.amazonaws.com',
        port: '',
        pathname: '/**',
      },
      
    ],
  },
  compiler: {
    styledComponents: true,
  }
}

module.exports = nextConfig
