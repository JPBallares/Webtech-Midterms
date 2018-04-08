var sideMenuLinks = document.getElementById("side_nav_container");
var links = sideMenuLinks.querySelectorAll("a");

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", showContent);
}

var spLink_1 = document.getElementById("sp_1");
spLink_1.addEventListener("click", showContent);

function showContent() {
    var allContent = document.querySelectorAll("#lessons_container section");
    
    for (var i = 0; i < allContent.length; i++) {
        allContent[i].className = "hide";
    }
    
    var conId = this.attributes["data-con"].value;
    var con = document.getElementById(conId);
    if (con.className == "hide") {
        con.className = "";
    } else {
        con.className = "hide";        
    }
}