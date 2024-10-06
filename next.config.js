module.exports = {
  async redirects() {
    return [
      {
        source: "/lineup/:slug*",
        destination: "/2023/lineup/:slug*",
        permanent: true,
      },
    ];
  },
};
