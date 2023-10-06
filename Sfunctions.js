// JavaScript file for Eduardo's Portfolio Website
document.addEventListener("DOMContentLoaded", function () {
    var Curr_style = document.getElementById("stylesheet");
    var selectedStyle = localStorage.getItem("style");

    // Function to rearrange elements for style-2.css
    if(selectedStyle === "style-2.css") {
        var service_title = document.getElementById("service-section");
        var menu = document.getElementById("div-menu");
        menu.parentNode.insertBefore(service_title, menu);
    }
});

function toggleStyleSheet() {
    var Curr_style = document.getElementById("stylesheet");
    if (Curr_style.getAttribute("href") === "style.css") {
        var service_title = document.getElementById("service-section");
        var menu = document.getElementById("div-menu");
        menu.parentNode.insertBefore(service_title, menu);

        Curr_style.setAttribute("href", "style-2.css");
    } else {
        var service_title = document.getElementById("service-section");
        var menu = document.getElementById("div-menu");
        service_title.parentNode.insertBefore(menu, service_title);

        Curr_style.setAttribute("href", "style.css");
    }
    // Saving stylesheet in local storage to keep after refreshing.
    localStorage.setItem("style", Curr_style.getAttribute("href"));
}


window.onload = function(){
    //get html style element by ID
    let stylesheetElem = document.getElementById("stylesheet");

    //get stylesheet name from local storage
    if(localStorage.getItem("style")){
        //replace href attribute of html element. 
        stylesheetElem.setAttribute("href", localStorage.getItem("style"));
    }
}