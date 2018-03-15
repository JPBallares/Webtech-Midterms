$(function() {
   
    var navOffset = $("nav").offset().top;
    
    var newNavOffset = navOffset + 62;
    
    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop();
        
        if (scrollPos >= newNavOffset) {
            $("nav").addClass("fixed");
            $("#main_content_container").css({paddingTop: '2.8%'});
        } else {
            $("nav").removeClass("fixed");
            $("#main_content_container").css({paddingTop: '0%'});
        }
    })   
    
});