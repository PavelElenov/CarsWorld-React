const menu = document.getElementsByClassName("menu")[0];
menu.addEventListener("click", () => {
    const navigationBar = document.querySelector(".navigation-bar");
    const menuIcon = document.querySelector(".menu i");

    if(navigationBar.style.display == "block"){
        navigationBar.style.display = "none";
        menuIcon.className = "fa-solid fa-bars";
    }else{
        navigationBar.style.display = "block";
        menuIcon.className = "fa-solid fa-xmark"
    }
})