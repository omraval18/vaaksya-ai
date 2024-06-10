/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '**'
      }, {
        protocol: 'https',
        hostname: 'api.dicebear.com',
        port: '',
        pathname: '**'
      }
    ]
  }
}
