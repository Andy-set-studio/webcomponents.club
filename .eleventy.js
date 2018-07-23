const videoShortCode = require('./shortcodes/video-shortcode.js');

module.exports = function(eleventyConfig) { 
    // Add shortcodes
    eleventyConfig.addShortcode('video', videoShortCode);

    // Return config settings
    return {
        markdownTemplateEngine: 'njk'
    }
};
