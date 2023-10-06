// JavaScript file for Eduardo's Portfolio Website
document.addEventListener("DOMContentLoaded", function () {
    var Curr_style = document.getElementById("stylesheet");
    var selectedStyle = localStorage.getItem("style");

    // Function to rearrange elements for style-2.css
    if(selectedStyle === "style-2.css") {
        var technical_title = document.getElementById("technical-title");
        var technical_hr = document.getElementById("technical-hr");
        technical_hr.parentNode.insertBefore(technical_title,technical_hr);
        
        var image1 = document.getElementById("image1.1");
        var image2 = document.getElementById("image2.1");
        var image3 = document.getElementById("image3.1");
        var self_service = document.getElementById("id-service");
        var dragon_sword = document.getElementById("id-dragon");
        var hangman = document.getElementById("id-hangman");
        image1.appendChild(hangman);
        image2.appendChild(dragon_sword);
        image3.appendChild(self_service);
        var hangman_pic = document.getElementById("hangman");
        var dragon_pic = document.getElementById("dragon-sword");
        var service_pic = document.getElementById("self-service");
        hangman_pic.src = "hangman(1).jpg";
        dragon_pic.src = "technical portfolio3.jpg";
        service_pic.src = "technical portfolio 2.jpg";

        var hangman_div = document.getElementById("hangman-div");
        var image1_1 = document.getElementById("image1.1");
        image1_1.insertAdjacentElement('afterend', hangman_div);

        var dragon_div = document.getElementById("dragon-div");
        var image2_1 = document.getElementById("image2.1");
        image2_1.insertAdjacentElement('afterend', dragon_div);

        var service_div = document.getElementById("service-div");
        var image3_1 = document.getElementById("image3.1");
        image3_1.insertAdjacentElement('afterend', service_div);
    }
});

function toggleStyleSheet() {
    var Curr_style = document.getElementById("stylesheet");
    if (Curr_style.getAttribute("href") === "style.css") {
        var technical_title = document.getElementById("technical-title");
        var technical_hr = document.getElementById("technical-hr");
        technical_hr.parentNode.insertBefore(technical_title,technical_hr);
        
        var image1 = document.getElementById("image1.1");
        var image2 = document.getElementById("image2.1");
        var image3 = document.getElementById("image3.1");
        var self_service = document.getElementById("id-service");
        var dragon_sword = document.getElementById("id-dragon");
        var hangman = document.getElementById("id-hangman");
        image1.appendChild(hangman);
        image2.appendChild(dragon_sword);
        image3.appendChild(self_service);
        var hangman_pic = document.getElementById("hangman");
        var dragon_pic = document.getElementById("dragon-sword");
        var service_pic = document.getElementById("self-service");
        hangman_pic.src = "hangman(1).jpg";
        dragon_pic.src = "technical portfolio3.jpg";
        service_pic.src = "technical portfolio 2.jpg";

        var hangman_div = document.getElementById("hangman-div");
        var image1_1 = document.getElementById("image1.1");
        image1_1.insertAdjacentElement('afterend', hangman_div);

        var dragon_div = document.getElementById("dragon-div");
        var image2_1 = document.getElementById("image2.1");
        image2_1.insertAdjacentElement('afterend', dragon_div);

        var service_div = document.getElementById("service-div");
        var image3_1 = document.getElementById("image3.1");
        image3_1.insertAdjacentElement('afterend', service_div);

        Curr_style.setAttribute("href", "style-2.css");
    } else {
        var tech_images = document.getElementById("tech-images");
        var hangman = document.getElementById("id-hangman");
        var dragon_sword = document.getElementById("id-dragon");
        var self_service = document.getElementById("id-service");
        tech_images.appendChild(hangman);
        tech_images.appendChild(dragon_sword);
        tech_images.appendChild(self_service);
        var hangman_pic = document.getElementById("hangman");
        var dragon_pic = document.getElementById("dragon-sword");
        var service_pic = document.getElementById("self-service");
        hangman_pic.src = "hangman.jpg";
        dragon_pic.src = "dragon-sword.jpg";
        service_pic.src = "online-market.jpg";

        var service_div = document.getElementById("service-div");
        service_pic.insertAdjacentElement('afterend', service_div);

        var dragon_div = document.getElementById("dragon-div");
        dragon_pic.insertAdjacentElement('afterend', dragon_div);

        var hangman_div = document.getElementById("hangman-div");
        hangman_pic.insertAdjacentElement('afterend', hangman_div);

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