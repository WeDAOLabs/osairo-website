/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "app.happiairdrop.xyz",
      },
      {
        protocol: "https",
        hostname: "img.shields.io",
      },
      {
        protocol: "https",
        hostname: "osairo.xyz",
      },
    ],
    unoptimized: true,
  },
  reactStrictMode: false,
  // async headers() {
  //   return [
  //     {
  //       source: "/favicon.ico",
  //       headers: [
  //         {
  //           key: "Content-Type",
  //           value: "image/x-icon",
  //         },
  //       ],
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
