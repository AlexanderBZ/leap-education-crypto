const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  //require("./pages/sitemap.xml");
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        development: "development",
      },
    };
  }

  return {
    reactStrictMode: true,
    env: {
      development: "production",
    },
  };
};
