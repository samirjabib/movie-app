const { config } = require("../../config");

const baseUrl = config.TMBD_URL;
const key = config.TMDB_KEY;




 const getUrl = (endpoint, params) => {
  const qs = new URLSearchParams(params);

  return `${baseUrl}${endpoint}?api_key=${key}&${qs}`;
};

module.exports = { getUrl }