console.log('je suis dans factory')
function mediaFactory(data) {

      const { id, photographerId, title, image, video, likes, date, price, name} = data;
      
      console.log('dataFACTORYYYYYY============',id)

      const picture = `../assets/photographers/${photographerId}/${image}`;
      console.log("phorgrapherID=======",photographerId)
      console.log('picture=========', picture)
      const movie = `../assets/photographers/${photographerId}/${video}`;

      function getMediaCardDOM() {
            console.log('je suis dans getmediacarddom')
            // const main = document.querySelector('#main')
            // const sectionCard = document.querySelector('.gallery_card_section')
            // sectionCard.classList.add('card_section')
            // main.appendChild(sectionCard)
            
            // Créer une card
            const article = document.createElement('article');
            article.classList.add('mediaCard');
            article.setAttribute('role', 'img')
            // sectionCard.appendChild(article)

            // img
            const imgCard = document.createElement('div');
            imgCard.classList.add('mediaCard__img')
            // Si photo ou vidéo
            if (image == undefined) {
                  // faire une vidéo
                  const videoCard = document.createElement('video');
                  videoCard.setAttribute('src', movie);
                  videoCard.setAttribute("aria-label","Cliquez pour agrandir");
                  videoCard.setAttribute('poster', '');

                  imgCard.appendChild(videoCard);
                        imgCard.addEventListener('click', ()=>{
                              openLightBox(this.movie, this.title);
                        });
            } else {
                  const img = document.createElement( 'img' );
                  img.setAttribute("src", picture);
                  img.setAttribute("alt", title);
                  img.setAttribute("aria-label","cliquez pour agrandir");
                  imgCard.appendChild(img);
                  imgCard.addEventListener('click', ()=>{
                        openLightBox(this.picture, this.title);
                  });
            }

            // partie info
            const info = document.createElement('div');
            info.classList.add('mediaCard__info');
            //le nom de la photo
            const imgTitle = document.createElement( 'h3' );
            imgTitle.textContent = title;
            imgTitle.classList.add('mediaCard__info__title');
            //le like
            const like = document.createElement( 'div' );
            like.classList.add('mediaCard__info__like');
            let numberOfLikes = document.createElement( 'p' );
            numberOfLikes.textContent = `${likes}`;
            numberOfLikes.setAttribute("aria-label","likes");
            const heartLike = document.createElement('i');
            heartLike.setAttribute("class",'fa-solid fa-heart heartLike');
            heartLike.setAttribute("aria-label",'likes');
            like.appendChild(numberOfLikes);
            like.appendChild(heartLike);
            info.appendChild(imgTitle);
            info.appendChild(like);
            like.addEventListener('click', ()=>{
                  let nblike = parseInt(numberOfLikes.textContent, 10);
                  if(nblike == likes){
                        numberOfLikes.textContent = nblike + 1;
                        document.getElementById('totalLike').textContent = parseInt(document.getElementById('totalLike').textContent,10)+1;
                  } else {
                        numberOfLikes.textContent = likes;
                        document.getElementById('totalLike').textContent = parseInt(document.getElementById('totalLike').textContent,10)-1;
                  }
            });

            //link les deux parties
            // sectionCard.appendChild(article)
            article.appendChild(imgCard);
            article.appendChild(info);

            return (article);
      }
      if(image == undefined){
          return { id, photographerId, title, movie, likes, getMediaCardDOM }
      } else{
          return { id, photographerId, title, picture, likes, getMediaCardDOM }
      }
}

  
    
    
    



