const menu = document.getElementsByClassName("menu")[0];
menu.addEventListener("click", () => {
    const navigationBar = document.querySelector(".navigation-bar");
    const menuIcon = document.querySelector(".menu i");
    const isActive = navigationBar.className.includes("active-navigation-bar");

    if(isActive){
        navigationBar.className = navigationBar.className.replace(" active-navigation-bar", "");
        menuIcon.className = "fa-solid fa-bars";
    }else{
        navigationBar.className += " active-navigation-bar";
        menuIcon.className = "fa-solid fa-xmark"
    }
})