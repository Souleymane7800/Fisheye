function photographTemplate(photographData) {
      
      // const { name, portrait, id } = data
      console.log("je rentre dans phototemplate============", photographData)

      const picture = `../assets/photographers/Photographers_ID_Photos/${photographData.portrait}`
  
      function getPhotographCardDOM() {
        // article
        const article = document.createElement( 'article' );
        article.setAttribute("tabindex",  0);
            console.log("je rentre dans getPhotographCardDOM==========",article)
      
         // h2
         const photographerName = document.createElement( 'h1' );
         photographerName.classList.add('photographer-name')
         photographerName.textContent = photographData.name;

        // p city & country
        const localisation = document.createElement( 'p' );
        localisation.classList.add('localisation')
        localisation.textContent = photographData.city + ", " + photographData.country;
        
        // tagline
        const tagPhotographer = document.createElement( 'p' );
        tagPhotographer.classList.add('tagline')
        tagPhotographer.textContent = photographData.tagline;

        // img
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt", photographData.name)
        
        // div link
        // const link = document.createElement('div')
        // link.setAttribute("href", `../photographer.html?id=${id}`)
        // link.classList.add('link')

      article.appendChild(img)
      article.appendChild(tagPhotographer)
      article.appendChild(localisation) 
      article.appendChild(photographerName)
      //article.appendChild(link); //ajout
      return (article);
      }
      return { getPhotographCardDOM }
  }