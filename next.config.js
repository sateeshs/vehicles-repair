/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    experimental: {
      appDir: true,
    }
}

module.exports = nextConfig


/**
import withBundleAnalyzer from "@next/bundle-analyzer"
import withPlugins from "next-compose-plugins"
import { env } from "./env.mjs"

// const nextConfig = {
//     reactStrictMode: true,

// }

const config = withPlugins([[withBundleAnalyzer({ enabled: env.ANALYZE })]], {
    reactStrictMode: true,
    experimental: { instrumentationHook: true },
    rewrites() {
      return [
        { source: "/healthz", destination: "/api/health" },
        { source: "/api/healthz", destination: "/api/health" },
        { source: "/health", destination: "/api/health" },
        { source: "/ping", destination: "/api/health" },
      ]
    },
  })

//module.exports = nextConfig
export default config

 */