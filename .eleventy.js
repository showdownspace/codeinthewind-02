module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images/**/*");
  eleventyConfig.addPassthroughCopy("challenges/**/*.png");
  eleventyConfig.addPassthroughCopy("style/output.css");
};
