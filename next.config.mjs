/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  transpilePackages: ["@radix-ui", "lucide-react", "recharts"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "brand.mastercard.com",
        port: "",
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
    ];
  },
  swcMinify: false,
};

export default nextConfig;
