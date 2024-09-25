/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "s3.ap-southeast-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "lxcrm-qa.s3.ap-southeast-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "lxcrm-files.s3.ap-southeast-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
