var c1 = document.getElementById("www");
var c2 = document.getElementById("int");

c1.addEventListener("click", showContent);
c2.addEventListener("click", showContent);

function showContent() {
    var allContent = document.querySelectorAll("#lessons_container div");
    
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