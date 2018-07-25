const dateFilter = require('./filters/date-filter.js');
const videoShortCode = require('./shortcodes/video-shortcode.js');

module.exports = function(eleventyConfig) { 
    // Add shortcodes
    eleventyConfig.addShortcode('video', videoShortCode);
    
    // Filters 
    eleventyConfig.addFilter('date', dateFilter);

    // Return config settings
    return {
        markdownTemplateEngine: 'njk'
    }
};
