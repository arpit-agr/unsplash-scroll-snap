const directoryOutputPlugin = require("@11ty/eleventy-plugin-directory-output");
const htmlmin = require("html-minifier");
const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {
  eleventyConfig.setQuietMode(true);
  eleventyConfig.addPlugin(directoryOutputPlugin);

  //Transforms
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if( this.outputPath && this.outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true
      });
      return minified;
    }

    return content;
  });

  //Passthrough copy
  // eleventyConfig.addPassthroughCopy("./src/fonts");
	// eleventyConfig.addPassthroughCopy("./src/images");
	// eleventyConfig.addPassthroughCopy("./src/scripts");
  // eleventyConfig.addPassthroughCopy("./src/favicon.ico");
	// eleventyConfig.addPassthroughCopy("./src/icon.svg");
	// eleventyConfig.addPassthroughCopy("./src/apple-touch-icon.png");
	// eleventyConfig.addPassthroughCopy("./src/icon-192.png");
	// eleventyConfig.addPassthroughCopy("./src/icon-512.png");
	// eleventyConfig.addPassthroughCopy("./src/manifest.webmanifest");

  //Watch target
	// eleventyConfig.addWatchTarget("./src/_includes/css/");
	// eleventyConfig.addWatchTarget('./src/scripts/');

  //Filter
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  return {
    // dataTemplateEngine: "njk",
		markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
		dir: {
			input: 'src',
			output: 'public'
		}
	};
};