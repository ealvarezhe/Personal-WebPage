// JavaScript file for Eduardo's Portfolio Website
document.addEventListener("DOMContentLoaded", function () {
    var Curr_style = document.getElementById("stylesheet");
    var selectedStyle = localStorage.getItem("style");

    // Function to rearrange elements for style-2.css
    if(selectedStyle === "style2AI.css") {
        var title = document.getElementById("title");
        var menu = document.getElementById("div-menu");
        menu.parentNode.insertBefore(title, menu);

        var subtitle = document.getElementById("subtitle");
        var sub_div = document.getElementById("ul-container");
        sub_div.parentNode.insertBefore(subtitle, sub_div);

    }
});

function toggleStyleSheet() {
    var Curr_style = document.getElementById("stylesheet");
    if (Curr_style.getAttribute("href") === "AI-styles.css") {
        var title = document.getElementById("title");
        var menu = document.getElementById("div-menu");
        menu.parentNode.insertBefore(title, menu);

        var subtitle = document.getElementById("subtitle");
        var sub_div = document.getElementById("ul-container");
        sub_div.parentNode.insertBefore(subtitle, sub_div);
        

        Curr_style.setAttribute("href", "style2AI.css");
    } else {
        var title = document.getElementById("title");
        var menu = document.getElementById("div-menu");
        title.parentNode.insertBefore(menu, title);
        
        var subtitle = document.getElementById("subtitle");
        var horizontal_list = document.getElementById("horizontal-list");
        horizontal_list.parentNode.insertBefore(subtitle, horizontal_list);

        Curr_style.setAttribute("href", "AI-styles.css");
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