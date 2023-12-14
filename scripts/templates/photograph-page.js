function photographTemplate(photographer) {

  const picture = `../assets/photographers/Photographers_ID_Photos/${photographer.portrait}`
  
  function getPhotographCardDOM() {
    // Div avec information name, location et tagline
    const photographDesc = document.createElement( 'div' );
    photographDesc.classList.add('photograph-desc');
    // photographDesc.setAttribute("tabindex",  0);
      
    // h1: name
    const photographerName = document.createElement( 'h1' );
    photographerName.classList.add('photographer-name');
    photographerName.textContent = photographer.name;

    // p city & country
    const localisation = document.createElement( 'p' );
    localisation.classList.add('localisation');
    localisation.textContent = photographer.city + ", " + photographer.country;
        
    // tagline
    const tagPhotographer = document.createElement( 'p' );
    tagPhotographer.classList.add('tagline');
    tagPhotographer.textContent = photographer.tagline;

    // img
    const divImg = document.createElement( 'div' )
    const img = document.createElement( 'img' );
    img.setAttribute("src", picture);
    img.setAttribute("alt", photographer.name);
    divImg.appendChild(img)

    // Price & total likes

    const counterLikes = document.createElement( 'div' );
    counterLikes.setAttribute('class', 'counter__likes');
    const photographerPrice = document.createElement( 'span' );
    photographerPrice.setAttribute('class', 'price_day');
    photographerPrice.textContent = photographer.price + "€ /jour";
    const photographerTotalLike = document.createElement( 'span' );
    photographerTotalLike.setAttribute('id', 'totalLike')
    // heart & total like
    const totalContainer = document.createElement( 'div' )
    totalContainer.setAttribute('class', 'total_container')
    const spanHeart = document.createElement( 'span' )
    const heartLike2 = document.createElement( 'i' );
    heartLike2.setAttribute("class",'fa-solid fa-heart heartLike');
    heartLike2.setAttribute("aria-label",'likes');
    counterLikes.appendChild(totalContainer)
    totalContainer.appendChild(photographerTotalLike)
    totalContainer.appendChild(heartLike2)
    counterLikes.appendChild(spanHeart)
    counterLikes.appendChild(photographerPrice);

    // Liaison au DOM
    document.querySelector('.photograph-header').prepend(divImg);
    photographDesc.appendChild(photographerName);
    photographDesc.appendChild(localisation); 
    photographDesc.appendChild(tagPhotographer);
    photographDesc.appendChild(counterLikes)


    //  window.addEventListener('keypress', (event) => {
    //   console.log('a key was pressed',event.key);
    //   console.log('a key was pressed',event.code);
    //  })


    return (photographDesc);
  }
  return { getPhotographCardDOM };
};