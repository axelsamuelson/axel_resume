/** @type {import('next').NextConfig} */
const nextConfig = {
  // Dev: default is `npm run dev` (webpack) for stabler HMR than Turbopack. Use `npm run dev:turbopack` if you want Turbopack.
  // If the browser shows Internal Server Error on localhost:3000 but the terminal shows another port, an old Node process may still bind 3000 - run `npm run dev:restart` or use the exact URL printed in the terminal.
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
