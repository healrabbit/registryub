module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles");


   eleventyConfig.addCollection("profilesByTrial", function(collectionApi) {
    return collectionApi.getFilteredByTag("profile")
      .sort((a, b) => b.data.trial - a.data.trial);  
  });

  return {
    dir: {
      input: ".",     // your source files
      output: "docs"  // GitHub Pages will serve from this
    }
  };

};

