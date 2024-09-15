module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css");

    eleventyConfig.addWatchTarget("src/css");

    return {
        dir: {
            input: "src",
            include: "_includes",
            output: "_site",
        },
        templateFormat: ["md", "njk", "html"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    };
};
