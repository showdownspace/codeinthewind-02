module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("challenges/**/*.jpg");
  eleventyConfig.addPassthroughCopy("challenges/**/*.svg");
  eleventyConfig.addPassthroughCopy("style/output.css");
};
