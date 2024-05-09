/** @type {import('next').NextConfig} */
const nextConfig = {
 output: "export",
 images: {
  loader: "custom",
  loaderFile: "./loader-img.js",
 }
}

module.exports = nextConfig



