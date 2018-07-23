const videoShortCode = require('./shortcodes/video-shortcode.js');

module.exports = function(eleventyConfig) {  
    eleventyConfig.addNunjucksShortcode('video', videoShortCode);
};
