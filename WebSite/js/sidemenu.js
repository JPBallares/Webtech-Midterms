var c1 = document.getElementById("www");
var c2 = document.getElementById("int");
var c3 = document.getElementById("http");
var c4 = document.getElementById("message");
var c5 = document.getElementById("req_message");
var c6 = document.getElementById("res_message");
var c7 = document.getElementById("get");
var c8 = document.getElementById("head");
var c9 = document.getElementById("put");
var c10 = document.getElementById("delete");
var c11 = document.getElementById("options");
var c12 = document.getElementById("trace");
var c13 = document.getElementById("connect");
var c14 = document.getElementById("safe");
var c15 = document.getElementById("idempotent");
var c16 = document.getElementById("cacheable");
var c17 = document.getElementById("general");
var c18 = document.getElementById("request");
var c19 = document.getElementById("response");
var c20 = document.getElementById("entity");
var c21 = document.getElementById("content");
var c22 = document.getElementById("connection");
var c23 = document.getElementById("range");
var c24 = document.getElementById("authentication");
var c25 = document.getElementById("conditionals");
var c26 = document.getElementById("1xx");
var c27 = document.getElementById("2xx");
var c28 = document.getElementById("3xx");
var c29 = document.getElementById("4xx");
var c30 = document.getElementById("5xx");
var c31 = document.getElementById("html_con");
var c32 = document.getElementById("element");
var c33 = document.getElementById("status");



c1.addEventListener("click", showContent);
c2.addEventListener("click", showContent);
c3.addEventListener("click", showContent);
c4.addEventListener("click", showContent);
c5.addEventListener("click", showContent);
c6.addEventListener("click", showContent);
c7.addEventListener("click", showContent);
c8.addEventListener("click", showContent);
c9.addEventListener("click", showContent);
c10.addEventListener("click", showContent);
c11.addEventListener("click", showContent);
c12.addEventListener("click", showContent);
c13.addEventListener("click", showContent);
c14.addEventListener("click", showContent);
c15.addEventListener("click", showContent);
c16.addEventListener("click", showContent);
c17.addEventListener("click", showContent);
c18.addEventListener("click", showContent);
c19.addEventListener("click", showContent);
c20.addEventListener("click", showContent);
c21.addEventListener("click", showContent);
c22.addEventListener("click", showContent);
c23.addEventListener("click", showContent);
c24.addEventListener("click", showContent);
c25.addEventListener("click", showContent);
c26.addEventListener("click", showContent);
c27.addEventListener("click", showContent);
c28.addEventListener("click", showContent);
c29.addEventListener("click", showContent);
c30.addEventListener("click", showContent);
c31.addEventListener("click", showContent);
c32.addEventListener("click", showContent);
c33.addEventListener("click", showContent);


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