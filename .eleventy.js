module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images/**/*");
  eleventyConfig.addPassthroughCopy("style/output.css");
};
