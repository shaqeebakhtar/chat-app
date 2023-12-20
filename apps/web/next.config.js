/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ['@repo/ui'],
  env: {
    API_URL: process.env.API_URL,
  },
};
