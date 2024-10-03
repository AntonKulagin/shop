/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/uploads/:path*",
        destination: `${process.env.CMS_URL}/uploads/:path*`,
      },
    ];
  },
};

export default nextConfig;
