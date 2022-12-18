const axios = require("axios");
const cheerio = require("cheerio");

const url = `https://preowned.ferrari.com/en-US/r/asia-pacific/used-ferrari/japan/rfc`;

async function scrapImages(req, res) {
  try {
    const { data } = await axios({
      method: "get",
      url: url,
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    }).catch((err) => {
      throw err;
    });

    const $ = cheerio.load(data);

    const listItems = $(".search-result-listing div ol li");

    listItems.each((idx, el) => {
      const slug = $(el)
        .children("article")
        .children("div")
        .first()
        .children("a")
        .attr("href");
    });
    res.send("success");
  } catch (err) {
    console.error(err);
    res.send("err: main.js");
  }
}

module.exports = scrapImages;
