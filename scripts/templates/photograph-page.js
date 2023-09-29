function photographTemplate(photographer) {
      
      console.log("je rentre dans phototemplate============", photographer)

      const picture = `../assets/photographers/Photographers_ID_Photos/${photographer.portrait}`
  
      function getPhotographCardDOM() {
        // Div avec information name, location et tagline
        const photographDesc = document.createElement( 'div' );
        photographDesc.classList.add('photograph-desc')
        photographDesc.setAttribute("tabindex",  0);
        //console.log("je rentre dans getPhotographCardDOM==========",photographDesc)
      
        // h1: name
        const photographerName = document.createElement( 'h1' );
        photographerName.classList.add('photographer-name')
        photographerName.textContent = photographer.name;

        // p city & country
        const localisation = document.createElement( 'p' );
        localisation.classList.add('localisation')
        localisation.textContent = photographer.city + ", " + photographer.country;
        
        // tagline
        const tagPhotographer = document.createElement( 'p' );
        tagPhotographer.classList.add('tagline')
        tagPhotographer.textContent = photographer.tagline;

        // img
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt", photographer.name)

        // Liaison au DOM
        document.querySelector('.photograph-header').prepend(img);
        photographDesc.appendChild(photographerName)
        photographDesc.appendChild(localisation) 
        photographDesc.appendChild(tagPhotographer)
      return (photographDesc);
      }
      return { getPhotographCardDOM }
  }