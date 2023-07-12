export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=5mxc7zj14aUGvpomc7lnb8Qep6mSSNmf&q=${category}&limit=20`
    const response = await fetch(url);
    const { data = [] } = await response.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    console.log(gifs);
}