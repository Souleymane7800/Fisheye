function mediaFactory(datas) {

      const { id, photographerId, title, image, video, likes, date, price, name} = datas;
      const mediaId = id
      const picture = `../assets/photographers/${photographerId}/${image}`;
      const movie = `../assets/photographers/${photographerId}/${video}`;

      function getMediaCardDOM() {
            
            // Créer une card
            const article = document.createElement('article');
            article.classList.add('mediaCard');
            article.setAttribute('role', 'img')
            article.setAttribute('data-id', `${id}`)

            // img
            const imgCard = document.createElement('div');
            imgCard.classList.add('mediaCard__img')
            imgCard.setAttribute('a', 'href', `${picture}`)
            // Si photo ou vidéo
            if (image == undefined) {
                  // faire une vidéo
                  const videoCard = document.createElement('video');
                  videoCard.setAttribute('src', movie);
                  videoCard.setAttribute("alt", title);
                  videoCard.setAttribute('data-title', `${title}`)//test
                  videoCard.setAttribute('class', 'media');
                  videoCard.setAttribute('controls', 'true');
                  videoCard.setAttribute('role', 'video');
                  videoCard.setAttribute('mediaID', `${mediaId}`);
                  videoCard.setAttribute("aria-label","Cliquez pour agrandir");
                  // videoCard.setAttribute('poster', '');

                  imgCard.appendChild(videoCard);
                        imgCard.addEventListener('click', (e)=>{
                              // // imgCard.onclick = function() {
                              //       console.log('ca clique')
                              // //     }
                              // let currentPath = e.target.src
                              // console.log('event',currentPath)
                              openLightBox(this.movie, this.title);
                        });
            } else {
                  const img = document.createElement( 'img' );
                  img.setAttribute("src", picture);
                  img.setAttribute("alt", title);
                  img.setAttribute('class', 'media');
                  img.setAttribute('data-title', `${title}`)//test
                  img.setAttribute('data', `${id}`)//test
                  img.setAttribute('role', 'img');
                  img.setAttribute('mediaID', `${mediaId}`);
                  //  console.log('mediaid',mediaId)
                  //  console.log('id======',id)
                  img.setAttribute("aria-label","cliquez pour agrandir");
                  imgCard.appendChild(img);
                  imgCard.addEventListener('click', (e)=>{
                        // imgCard.classList.add('active') //test
                        // let currentPath = e.target.src
                        // img.src = currentPath
                        // console.log('ca clique ',`${title}`)
                        // console.log('event',currentPath)
                        openLightBox(this.picture, this.title);
                  });
            };

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
            numberOfLikes.setAttribute("class","likes");
                  //console.log('numberoflikes', numberOfLikes)  //test
            const heartLike = document.createElement('i');
            heartLike.setAttribute("class",'fa-solid fa-heart heartLike');
            heartLike.setAttribute("aria-label",'likes');
            like.appendChild(numberOfLikes);
            like.appendChild(heartLike);
            info.appendChild(imgTitle);
            info.appendChild(like);
            // Nombre total de like / Tarif
            // =======================================
            // // Sélectionnez tous les éléments avec la classe "likes"
            const totalLikes = document.querySelectorAll(".likes");

            // // Initialisez une variable pour stocker la somme
            let sommeLikes = 0;
    
            // // Parcourez les éléments "likes" et additionnez leurs valeurs
            totalLikes.forEach((like) => {
                const likes = parseInt(like.textContent); // Convertissez le texte en nombre
                if (!isNaN(likes)) {
                    sommeLikes += likes;
                }
            });
    
            // // Affichez la somme des likes
            const sumElement = document.getElementById("totalLike");
            sumElement.textContent = sommeLikes;

            // ======================================================
            like.addEventListener('click', ()=>{
                  let nblike = parseInt(numberOfLikes.textContent, 10);

                  // console.log('nblike',nblike)
                  if(nblike == likes){
                        numberOfLikes.textContent = nblike + 1;
                        document.getElementById('totalLike').textContent = parseInt(document.getElementById('totalLike').textContent,10)+1;
                  } else {
                        numberOfLikes.textContent = likes;
                        document.getElementById('totalLike').textContent = parseInt(document.getElementById('totalLike').textContent,10)-1;
                  };
            });

            //link les deux parties
            article.appendChild(imgCard);
            article.appendChild(info);

            return (article);
      }


      // DOM lightbox

//       function lightboxTemplate(picture, movie, title) {
            
//             const typePicture = picture.slice(-4);
//             const typeMovie = movie.slice(-4);
          
//             const lightbox = document.querySelector('.lightbox__container');
//             lightbox.innerHTML = ''; // Supprime tout contenu précédent dans la lightbox.

//             const lightboxMedia = document.createElement('div');
//             lightboxMedia.setAttribute('class', 'lightbox__media');

//             const lightboxTitle = document.createElement('h3');
//             lightboxTitle.setAttribute('id', 'lightbox__info__title');
//             lightboxTitle.setAttribute('class', 'mediaCard__info__title');
//             lightboxTitle.textContent = title;
          
//             if (typePicture === '.jpg' || typePicture === '.jpeg' || typePicture === '.png' || typePicture === '.gif') {
//               const imgCard = document.createElement('img');
//               imgCard.setAttribute('src', picture);
//               imgCard.setAttribute('alt', title);
//               imgCard.addEventListener('click', function () {
//                   imgCard.classList.add('show');
//                 // Afficher l'image en plein écran ou dans la lightbox selon votre conception.
//                 // Vous devrez ajouter du CSS pour rendre l'image en plein écran ou créer une lightbox personnalisée.
//               });
          
//                   // const lightboxTitle = document.createElement('span');
//                   // lightboxTitle.setAttribute('id', 'lightbox__info__title');
//                   // lightboxTitle.setAttribute('class', 'mediaCard__info__title');
//                   // lightboxTitle.textContent = `${title}`;
                  
//                   lightbox.appendChild(imgCard);
//                   lightbox.appendChild(lightboxTitle)
//             } else if (typeMovie === '.mp4' || typeMovie === '.webm' || typeMovie === '.ogg') {
//               const videoCard = document.createElement('video');
//               videoCard.setAttribute('controls', 'true');
//               videoCard.addEventListener('click', function () {
//                   videoCard.classList.add('show');
//                 // Afficher la vidéo en plein écran ou dans la lightbox selon votre conception.
//                 // Vous devrez ajouter du CSS pour rendre la vidéo en plein écran ou créer une lightbox personnalisée.
//               });
          
//               const source = document.createElement('source');
//               source.setAttribute('src', movie);
//               videoCard.appendChild(source);
              
//               videoCard.appendChild(lightboxTitle)
//               lightbox.appendChild(videoCard);
//             }
//           }
          
//           // Appel de la fonction avec des exemples de données (image et vidéo).
//           lightboxTemplate(picture,movie,title);
      if(image == undefined){
            return { id, photographerId, title, movie, likes, getMediaCardDOM }
      } else{
            return { id, photographerId, title, picture, likes, getMediaCardDOM }
      };

};

    
    
    



