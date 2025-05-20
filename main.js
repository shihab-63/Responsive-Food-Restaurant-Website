let menu = document.querySelector('#menu_icon');
let nav_list = document.querySelector('.nav_list');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav_list.classList.toggle('open')
}