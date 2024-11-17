/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable SWC completely for WebContainer
  swcMinify: false,
  transpilePackages: ['@next/swc-linux-x64-gnu', '@next/swc-linux-x64-musl'],
  
  // Use Babel instead
  compiler: {
    // Ensure we're not using SWC for compilation
    swc: false,
    // Disable optimization features that might cause issues
    removeConsole: false,
  },

  // WebContainer-specific settings
  experimental: {
    // Disable features that require native modules
    swcPlugins: false,
    serverComponentsExternalPackages: ['pg', '@node-rs/argon2', '@node-rs/bcrypt'],
  },

  // Configure webpack for WebContainer
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Don't attempt to load native modules on client-side
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
      }
    }

    // Disable native module loading
    config.module.rules.push({
      test: /\.node$/,
      use: 'null-loader'
    })

    return config
  },
}

module.exports = nextConfig