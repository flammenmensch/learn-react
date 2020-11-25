

export const search = (query: string, key: string = '') => {
    return fetch(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${encodeURIComponent(query)}`)
        .then(response => response.json());
}