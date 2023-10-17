// console.log('je suis dans filterbox');

// Ajout du DOM
// const main = document.querySelector('#main');
// const filterBoxContainer = document.createElement('section');
// const filterSelect = document.createElement('div');
// filterSelect.classList.add('custom-select')

// main.appendChild(filterBoxContainer)
// filterBoxContainer.appendChild(filterSelect)
// 13mn
// Display sort

const datas = [];
const displaySortDatas = (photographermedia) => {
      console.log('sortdata===========',photographermedia)
      const gallery = document.querySelectorAll('.mediaCard');
      gallery.forEach((article) => {
            // return article
            console.log('article',article)
            return `
                   <article>
                         <div>
                               <img src="${article.datas}" alt="${article.title}">
                         </div>
                  </article>
             `;
      })
      // console.log('gallery', gallery)

};
displaySortDatas()
// ouvrir le dropdown
const btnDrop = document.querySelector('.btn__drop');
const showMenu = () => {
      const menu = document.querySelector('.drop__content');
      menu.classList.toggle('active')
      document.querySelector('.arrow').classList.toggle('rotate');
}
btnDrop.addEventListener('click', showMenu);

// Filter les datas
const filterData = Array.from(document.querySelectorAll('.drop__content li button'));
const currentSort = document.querySelector('#current__sort');

// const {title, likes, date} = datas;
// Cacher les options déjà sélectionneés
let optionSelectionned = filterData.find((filter )=> filter.textContent == currentSort.textContent);
optionSelectionned.style.display = "none";
const sortDatas = (sortType) => {
      switch (sortType) {
        case 'Popularité':
          datas.
         
    sort((a, b) => b.likes - a.likes);
          break;
        case 'Title':
          datas.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case 'Date':
          datas.sort((a, b) => new Date(b.date) - new Date(a.date));
          break;
      }
    };
// const sortDatas = sortType => {
//       switch (sortType) {
//             case "Popularité" :
//                   datas.concat((a,b) => b.likes - a.likes) 
//                   break;
//             case "Title" :
//                   datas.sort((a, b) => a.title.localeCompare(b.title))
//                   break;
//             case "Date" :
//                   datas.sort((a, b) => new Date(b.date) - new Date(a.date))
//                   break;
//       }
// };

filterData.forEach((filter )=> {
      filter.addEventListener('click', () => {
            const filterValue = filter.textContent;
            currentSort.textContent = filterValue;

            if(optionSelectionned) optionSelectionned.style.display = "block";
            filter.style.display = "none";
            optionSelectionned = filter

            // getListeMedias()
            sortDatas(filterValue);
      })
})
// console.log('data===========fin',datas)
// console.log(filterData,currentSort)