module.exports = function videoShortCode(embedUrl) {
    let response = `
        <div class="embed">
            <iframe src="${embedUrl}" allow="encrypted-media" allowfullscreen="true"></iframe>
        </div>
    `;
    
    // Strip any newlines, spaces and other gubbins to 'minify' this component
    return response.replace(/\s{2,}/g, '').replace(/\'/g, '"');
};
