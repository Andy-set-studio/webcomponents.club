module.exports = function videoPosterShortCode(shareUrl) {
    let id = shareUrl.substring(shareUrl.lastIndexOf('/')).replace('/', '');

    let response = `
        <a href="${shareUrl}" aria-label="Watch this video on Youtube">
            <img src="https://img.youtube.com/vi/${id}/hqdefault.jpg" srcset="https://img.youtube.com/vi/${id}/maxresdefault.jpg 1280w,https://img.youtube.com/vi/${id}/hqdefault.jpg 480w,https://img.youtube.com/vi/${id}/mqdefault.jpg 320w" sizes="100vw,min-width(55rem) 55rem" alt="A poster image from this video" />
        </a>
    `;
    
    // Strip any newlines, spaces and other gubbins to 'minify' this component
    return response.replace(/\s{2,}/g, '').replace(/\'/g, '"');
};
