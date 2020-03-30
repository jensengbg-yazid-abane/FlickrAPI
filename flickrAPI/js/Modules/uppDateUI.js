// uppdateUI & bildfunktioner 
export default function uppdateUI(data){

    document.querySelector('#photos').innerHTML = ''
    data.photo.forEach(img =>{
       
        let el = document.createElement('img')
        el.setAttribute('src',imgUrl(img, 'q'))
        
         document.querySelector('#photos').appendChild(el)

         
         function imgUrl (img, size){
            return `https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}_${size}.jpg`
        }
          
        })
// Lightbox
        let lightbox = document.createElement('div')
        lightbox.id = 'lightbox'
        document.body.appendChild(lightbox)
        
        
         let images = document.querySelectorAll ('img')
            images.forEach(image => {
                image.addEventListener('click', e => {
                    lightbox.classList.add('active')
                    let img = document.createElement('img')
                    img.src =image.src
                    while (lightbox.firstChild) {
                        lightbox.removeChild(lightbox.firstChild)
                    }
                    lightbox.appendChild(img)
                    
                })
            })

        lightbox.addEventListener('click', e => {
            if (e.target !== e.currentTarget) return
            lightbox.classList.remove('active')
            }) 
    }      