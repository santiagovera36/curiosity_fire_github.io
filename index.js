var iconMenu = document.querySelector("#icon-menu");
var menu = document.querySelector("#menu");

iconMenu.addEventListener('click', () => {
     
    if (menu.style.display == "none") {
        menu.style.display = "flex";
    } else{
        menu.style.display = "none";
    }

});