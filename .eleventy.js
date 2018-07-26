const dateFilter = require('./filters/date-filter.js');
const htmlmin = require('html-minifier');
const rssPlugin = require('@11ty/eleventy-plugin-rss');
const videoPosterShortCode = require('./shortcodes/video-poster-shortcode.js');

module.exports = function(eleventyConfig) { 
    
    // Plugins
    eleventyConfig.addPlugin(rssPlugin);

    // Add shortcodes
    eleventyConfig.addShortcode('video_poster', videoPosterShortCode);
    
    // Filters 
    eleventyConfig.addFilter('date', dateFilter);
    
    // Minify
    eleventyConfig.addTransform('htmlmin', function(content, outputPath) {
        if(outputPath.indexOf('.html') > -1) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
                minifyCSS: true
            });
            return minified;
        }
        return content;
    });
    // Return config settings
    return {
        markdownTemplateEngine: 'njk'
    }
};
