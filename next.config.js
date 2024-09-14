module.exports = {
  async redirects() {
    return [
      {
        source: "/lineup/:slug*",
        destination: "/2022/lineup/:slug*",
        permanent: true,
      },
      {
        source: "/sponsors/:slug*",
        destination: "/2022/sponsors/:slug*",
        permanent: true,
      },
    ];
  },
};
