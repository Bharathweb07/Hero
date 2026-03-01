/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";
const isProjectPage = isProd && repoName && !repoName.endsWith(".github.io");

const nextConfig = {
  output: "export",
  ...(isProjectPage
    ? {
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}/`,
      }
    : {}),
};

module.exports = nextConfig;
