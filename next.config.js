/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["github.com", "raw.githubusercontent.com", "i.imgur.com"],
  },

  //intenalization
  i18n: {
    locales: ["en", "fr", "pt"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
