$(".deroul h4").on("click", function(){
         console.log('toto')  
    if($(this).find("i").hasClass("fa-plus")){ 
        $(".deroul h4").find("i.fa-minus").removeClass("fa-minus").addClass("fa-plus")
        $(".deroul h4").siblings("p").slideUp(400)
        $(this).find("i").addClass("fa-minus").removeClass("fa-plus")
        $(this).siblings("p").slideDown(400)
    }
    
})
$(".img_gal").on("click",function(){
    console.log(modal = $(this).find("img").clone())
    $(".modal").toggleClass("hide")
    $(".center_modal").append(modal).toggleClass("transform-active")
})
$(".close").on("click",function(){
    $(".modal").toggleClass("hide")
    $(".center_modal").toggleClass("transform-active").html("")
})
$(".change").on("click",function(){
    $("#choix").click();
})
var c = document.getElementById("choix")
    
    t = document.getElementById("time"),
    res2 = document.getElementById("result2");

c.addEventListener("input", function() {
    color = c.value
    document.documentElement.style.setProperty('--pink', color);
    document.documentElement.style.setProperty('--theme', color);
    $("#choix").click().addClass("hide");
    console.log(c.value)
}, false);


var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
// console.log(isInViewport(test))
tab = ['#title','#info','#gallery','#testimonials','#contact','#footer']
window.addEventListener('scroll', function() {
    // console.log(test);
    tab.forEach(element => {
        var test = document.querySelector(element)
        if(isInViewport(test)){
            console.log($("a[href='"+test+"'"))
            $("a[href='"+test+"'").css("border-bottom","1px solid white")
            test.style.border = "1px solid black"
            // console.log(isInViewport(test))
        }
        
    });
    
});