

export const getGifs = async( category ) => {

    const urlApi = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=1FfTbKnMrWkZ9GPXut4SUSt1RjYjzCTp`;

    const respuesta = await fetch(urlApi);

    const {data} = await respuesta.json();

    const gifs = data.map (img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.original.url,
        }
    })

    return gifs;
}