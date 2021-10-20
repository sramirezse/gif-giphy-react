export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=4lrQF3ryJ0lyRlm8vKohQ3QvmLbmEK3g&limit=10&q=`;
    const resp = await fetch(url + category);
    const { data } = await resp.json();

    console.log('identificador',data);
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
            giphyUrl: img.url

        }
    });

    return gifs;
}