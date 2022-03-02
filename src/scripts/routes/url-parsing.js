const UrlParsing = {
    parseActiveUrlWithCombiner() {
        const url = window.location.hash.slice(1).toLowerCase();
        const splitedUrl = this._urlSplitter(url);
        return this._urlCombiner(splitedUrl);
    },
    parseActiveUrlWithoutCombiner() {
        const url = window.location.hash.slice(1).toLowerCase();
        return this._urlSplitter(url);
    },
    _urlSplitter(url) {
        const urlsSplits = url.split('/');
        const storage = {
            resource: urlsSplits[1],
            id: urlsSplits[2],
        };
        return storage;
    },
    _urlCombiner(splitedUrl) {
        const urlsSplitsStorage = (splitedUrl.resource ? `/${splitedUrl.resource}` : '/') + (splitedUrl.id ? '/:id' : '');
        return urlsSplitsStorage;
    },
};

export default UrlParsing;
