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
    $(".affich").append(modal).toggleClass("transform-active")
})
$(".close").on("click",function(){
    $(".modal").toggleClass("hide")
    // $(".modal").toggleClass("transform-active")
    $(".affich").toggleClass("transform-active").html("")
})
$(".fa-tint").on("click",function(){
    $("#choix").click().removeClass("hide");
    console.log('toto')
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