const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.NEXT_PUBLIC_ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  output: 'export',
  distDir: 'build',
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  pageExtensions: ['ts', 'tsx'],
  eslint: {
    dirs: ['src'],
  },
  images: {
    unoptimized: true,
  },
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
});
