//Consumir API de RandomUser

const listEl = document.querySelector('ul.users-info');

fetch('https://randomuser.me/api/')
    .then(respuesta => respuesta.json())
    .then(informacion => {
        console.log(informacion);
        informacion.results.forEach(elemento => {
        console.log(elemento);
        listEl.insertAdjacentHTML('beforeend', `<li> <img class="size-img" src="${elemento.picture.large}" alt=""> </li>
                                                <li class="users"> <p class="user"> <i class="fa-solid fa-user user-icon"></i> ${elemento.name.first} ${elemento.name.last} </p></li>
                                                <li class="users"> <p class="user"> <i class="fa-solid fa-envelope user-icon"></i> ${elemento.email}</p></li>
                                                <li class="users"> <p class="user"> <i class="fa-solid fa-phone user-icon"></i> ${elemento.phone}</p></li>
                                                <li class="users"> <p class="user"> <i class="fa-solid fa-mobile user-icon"></i> ${elemento.cell}</p></li>` );       
        });
    })

//Código para mostrar la galería de la sección Más
const moreEl = document.querySelector(".more");
const projectEl = document.querySelector(".grid");

let hasClicked = false;
  moreEl.addEventListener('click', () => {
    if (!hasClicked) {
      projectEl.style.display = 'grid';
      event.preventDefault();
      hasClicked = true;
    } else {
      projectEl.style.display = 'none';
      event.preventDefault();
      hasClicked = false;
    }
});
