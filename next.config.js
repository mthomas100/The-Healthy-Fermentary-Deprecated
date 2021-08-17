module.exports = {
  images: {
    domains: ['res.cloudinary.com', 'cloudinary.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://ecommerce-frontend-orcin.vercel.app/:path*',
      },
    ];
  },
};
