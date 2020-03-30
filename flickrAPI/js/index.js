    document.querySelector('button').addEventListener('click',async () => {
    let text = document.querySelector('#search').value
    let data = await getImages (text)
    uppdateUI(data)
})


//  fetch & flickrAPI
import getImages from './Modules/getImages.js'

// uppdateUI & bildfunktioner & Lightbox
import uppdateUI from './Modules/uppDateUI.js'

