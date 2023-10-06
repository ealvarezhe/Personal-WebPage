// JavaScript file for Eduardo's Portfolio Website
document.addEventListener("DOMContentLoaded", function () {
    var Curr_style = document.getElementById("stylesheet");
    var selectedStyle = localStorage.getItem("style");

    // Function to rearrange elements for style-2.css
    if(selectedStyle === "style-2.css") {
        var title = document.getElementById("qualification-title");
        var resume = document.getElementById("a-resume");
        resume.parentNode.insertBefore(title, resume);

        var technical_skills = document.getElementById("technical-skills");
        var div_division = document.getElementById("div1");
        div_division.parentNode.insertBefore(technical_skills, div_division);
        var interest_area = document.getElementById("interest-area");
        div_division.parentNode.insertBefore(interest_area, div_division);

        var image1 = document.getElementById("qual-image1");
        var image2 = document.getElementById("qual-image2");
        div_division.parentNode.insertBefore(image1, div_division);
        div_division.parentNode.insertBefore(image2, div_division);
        image1.src = "ciber (1).png"
        image2.src = "meeting.png"
    }
});

function toggleStyleSheet() {
    var Curr_style = document.getElementById("stylesheet");
    if (Curr_style.getAttribute("href") === "style.css") {
        var title = document.getElementById("qualification-title");
        var resume = document.getElementById("a-resume");
        resume.parentNode.insertBefore(title, resume);

        var technical_skills = document.getElementById("technical-skills");
        var div_division = document.getElementById("div1");
        div_division.parentNode.insertBefore(technical_skills, div_division);
        var interest_area = document.getElementById("interest-area");
        div_division.parentNode.insertBefore(interest_area, div_division);

        var image1 = document.getElementById("qual-image1");
        var image2 = document.getElementById("qual-image2");
        div_division.parentNode.insertBefore(image1, div_division);
        div_division.parentNode.insertBefore(image2, div_division);
        image1.src = "ciber (1).png"
        image2.src = "meeting.png"

        Curr_style.setAttribute("href", "style-2.css");
    } else {
        var div_division = document.getElementById("div1");
        var technical_skills = document.getElementById("technical-skills");
        var interest_area = document.getElementById("interest-area");
        div_division.appendChild(technical_skills);
        div_division.appendChild(interest_area);

        var image1 = document.getElementById("qual-image1");
        var image2 = document.getElementById("qual-image2");
        var div_img1 = document.getElementById("div-img1");
        var div_img2 = document.getElementById("div-img2");
        div_img1.appendChild(image1);
        div_img2.appendChild(image2);
        image1.src = "technical-skills.jpg";
        image2.src = "Cyber Security.jpg";
        
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