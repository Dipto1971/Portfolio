const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? "/dipto1971/portfolio/" : "",
  basePath: isProd ? "/dipto1971/portfolio/" : "",
  output: "export",
};

module.exports = nextConfig;
