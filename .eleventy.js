const dateFilter = require('./filters/date-filter.js');
const videoPosterShortCode = require('./shortcodes/video-poster-shortcode.js');

module.exports = function(eleventyConfig) { 
    // Add shortcodes
    eleventyConfig.addShortcode('video_poster', videoPosterShortCode);
    
    // Filters 
    eleventyConfig.addFilter('date', dateFilter);

    // Return config settings
    return {
        markdownTemplateEngine: 'njk'
    }
};
