/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { i18n } = require('./i18n.config');

const nextConfig = {
  reactStrictMode: true,
  i18n,
};

module.exports = nextConfig;
