/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  images: {
    domains: ['www.google.com', 'firebasestorage.googleapis.com'],
  },

  env : {
    NEXT_PUBLIC_APIChave: process.env.NEXT_PUBLIC_CHAVE,
    NEXT_PUBLIC_AuDom: process.env.NEXT_PUBLIC_AUDO,
    NEXT_PUBLIC_Pd: process.env.NEXT_PUBLIC_PD,
    NEXT_PUBLIC_Balde: process.env.NEXT_PUBLIC_BALDE,
    NEXT_PUBLIC_msn: process.env.NEXT_PUBLIC_MSN,
    NEXT_PUBLIC_ai: process.env.NEXT_PUBLIC_AI,
  }

}