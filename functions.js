// JavaScript file for Eduardo's Portfolio Website
document.addEventListener("DOMContentLoaded", function () {
    var Curr_style = document.getElementById("stylesheet");
    var selectedStyle = localStorage.getItem("style");

    // Function to rearrange elements for style-2.css
    if(selectedStyle === "style-2.css") {
        var myImage = document.getElementById("div-image-index");
        var tabs = document.getElementById("tabs");
        tabs.parentNode.insertBefore(myImage, tabs);

        var hr = document.getElementById("landing-hr");
        tabs.parentNode.insertBefore(hr, tabs);

        var name = document.getElementById("Name");
        var school = document.getElementById("Student");

        tabs.parentNode.insertBefore(school, tabs);
        school.parentElement.insertBefore(name, school);

        var hr2 = document.getElementById("landing-hr-2");
        tabs.parentNode.insertBefore(hr2, tabs);
    }
});

function toggleStyleSheet() {
    var Curr_style = document.getElementById("stylesheet");
    if (Curr_style.getAttribute("href") === "style.css") {
        var myImage = document.getElementById("div-image-index");
        var tabs = document.getElementById("tabs");
        tabs.parentNode.insertBefore(myImage, tabs);

        var hr = document.getElementById("landing-hr");
        tabs.parentNode.insertBefore(hr, tabs);

        var name = document.getElementById("Name");
        var school = document.getElementById("Student");

        tabs.parentNode.insertBefore(school, tabs);
        school.parentElement.insertBefore(name, school);

        var hr2 = document.getElementById("landing-hr-2");
        tabs.parentNode.insertBefore(hr2, tabs);

        Curr_style.setAttribute("href", "style-2.css");
    } else {
        var myImage = document.getElementById("div-image-index");
        var landing_text = document.getElementById("div-text");
        landing_text.insertAdjacentElement('afterend', myImage); // Move sibling element

        var hr = document.getElementById("landing-hr");
        var breakline = document.getElementById("breakline");
        breakline.insertAdjacentElement('afterend', hr);

        var name = document.getElementById("Name");
        var school = document.getElementById("Student");
        hr.insertAdjacentElement('afterend', name);
        name.insertAdjacentElement('afterend', school);
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