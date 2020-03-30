//  fetch & flickrAPI
export default async function getImages(text){
    const apiKey = '19d3e6e0acfe9c438f368e2c2bab1c5d' 
    const baseUrl = 'https://api.flickr.com/services/rest'
    let method = 'flickr.photos.search'
    let perPage = document.querySelector(`#items`).value;
    let url = `${baseUrl}?api_key=${apiKey}&per_page=${perPage}&sort=relevance&method=${method}&text=${text}&format=json&nojsoncallback=1`

    let resp = await fetch(url)
    let data = await resp.json()
    return data.photos
    
}