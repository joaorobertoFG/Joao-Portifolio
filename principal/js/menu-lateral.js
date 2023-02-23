const botaoMenu = document.querySelector('.cabecalho-menu');
const menu = document.querySelector(".menu-lateral");
const hideMenu = document.querySelector('.menu-link');

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral-ativo')
})

//Esconder menu lateral

const listaMenu = document.querySelectorAll('.menu-link');

listaMenu[0].addEventListener('click', () => {
    menu.classList.toggle('menu-lateral-ativo')
})

listaMenu[1].addEventListener('click', () => {
    menu.classList.toggle('menu-lateral-ativo')
})

listaMenu[2].addEventListener('click', () => {
    menu.classList.toggle('menu-lateral-ativo')
})

listaMenu[3].addEventListener('click', () => {
    menu.classList.toggle('menu-lateral-ativo')
})

//User Menu

const botaoUser = document.querySelector('.user-cabecalho');
const menuUser = document.querySelector(".user-lista");
const hideMenuUser = document.querySelector('.user-link');

botaoUser.addEventListener('click', () => {
    menuUser.classList.toggle('menu-user-ativo')
})
