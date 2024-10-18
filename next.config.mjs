import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

/** @type {import('next').NextConfig} */

// Define __dirname for ES modules
const __dirname = dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      components: resolve(__dirname, 'src/components'),
      assets: resolve(__dirname, 'src/assets'),
    };
    return config;
  },
};

export default nextConfig;