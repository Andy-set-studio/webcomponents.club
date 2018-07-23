module.exports = function videoShortCode(embedUrl) {
    return `
        <div class="embed embed--wide">
            <iframe class="embed__content" src="${embedUrl}" allowfullscreen="true"></iframe>
        </div>
    `;
};
