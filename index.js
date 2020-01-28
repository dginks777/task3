const createUrlObject = (url = '') => {
    const [urlPath, search] = url.split('?');

    if (!search) {
        return;
    }

    const params = search.split('&');

    return params.reduce((accumulator, param) => {
        const [key, value] = param.split('=');
        accumulator[key] = value;
        return accumulator;
    }, {})
};

