let vue
var width = window.innerWidth
$(".deroul h2").on("click", function(){
    if($(this).find("i").hasClass("fa-minus")){
        $(this).find("i").addClass("fa-plus").removeClass("fa-minus")
        $(".deroul h2").siblings("p").slideUp(400)
        console.log($(this).find("i").hasClass("fa-minus"))  
    }
    else if($(this).find("i").hasClass("fa-plus")){ 
        $(".deroul h2").find("i.fa-minus").removeClass("fa-minus").addClass("fa-plus")
        $(".deroul h2").siblings("p").slideUp(400)
        $(this).find("i").addClass("fa-minus").removeClass("fa-plus")
        $(this).siblings("p").slideDown(400)
    }
    
})

// jQuery('.html5-video-container',jQuery('[id="iframe"]')[0].contentWindow.document.body).on('click',function(){	
// 	console.log("triggered !!")
// });



$(".img_gal").on("click",function(){ 
    vue = $(this).index()
    let modal = $(this).find("img").attr('src')
    console.log( $(this).find("img").attr('src'))   
    if(modal){
        $(".modal").toggleClass("hide")
        setTimeout(function(){
             $("#modal_img").attr('src',modal).toggleClass("transform-active")
        },500) 
    }
    else{
        $(".modal1").toggleClass("hide")
        let modal = $(this).find("iframe").attr('src')
        $("#iframe").attr('src',modal).toggleClass("transform-active")
        console.log(modal)
       
    }
})


$(".carousel").on("click",function(){ 
    let direction = $(this).data("direction")
    if(direction == "next"){
        vue++
    }
    else{
        vue--
    }
    listItem = $(".img_gal")
    let modal = $("center_modal").find("img")
    if(listItem.length == vue){
        vue = 0
    }
    let change_img = listItem[vue]
   change_img = $(change_img).find("img").attr("src")
   console.log(change_img)

    $("#modal_img").attr('src',change_img)
       
})



$(".close").on("click",function(){
    var classList = $(this)
    if(jQuery.inArray("modal",classList.prop("classList"))==0){
        $(".modal").toggleClass("hide")
    }
    else{
       $(".modal1").toggleClass("hide")
       $("affich1 iframe").attr("src","")
       $("affich1 iframe").empty()
   }
    $("#modal_img").attr('src',"").toggleClass("transform-active")
    // $(".center_modal").toggleClass("transform-active").html("")
})

$(".carousel").on('click', function(e){
    e.stopPropagation()
})
$(".change").on("click",function(){
    $("#choix").click();
})
var c = document.getElementById("choix")
    
    t = document.getElementById("time")
    res2 = document.getElementById("result2")

c.addEventListener("input", function() {
    color = c.value
    document.documentElement.style.setProperty('--pink', color)
    document.documentElement.style.setProperty('--theme', color)
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
tab = ['#header','#info','#gallery','#testimonials','#buy','#contact','#footer']
window.addEventListener('scroll', function() {
    tab.forEach(element => {
        var test = document.querySelector(element)
        el =document.getElementById("title")
        el1 =document.getElementById("header")
        if(isInViewport(el) && !isInViewport(el1)){
            if(width>770){
                $('header').addClass('color_head')
            }
        }
        else if(isInViewport(el1) && isInViewport(el)){
            $('header').attr('class','')
        }
        if(isInViewport(test)||isInViewport(el1)){
            $('a').css("border","0")
            $('.'+$(test).attr('id')).css("border-bottom","1px solid var(--pink)")
        }
        
    });
    
});
console.log(window.innerWidth)
if(window.innerWidth<=770 ){
    $(".nav_menu").toggleClass("hide")
    $(".nav_menu").toggleClass("flex")
    $(".port").on("click",function(){
        $(".nav_menu").toggleClass("hide")
        console.log('toto')
        $(".nav_menu").toggleClass("flex")
        $(".nav_menu").toggleClass("transform-active")
    })

}
if(window.innerWidth<=770 && window.innerWidth>360 ){
    
    console.log(typeof(width))
    width=width
    var styles = {'width':width}
    $(".nav_menu").css(styles)
    $('#tab_logo').attr('src','public/images/logo.png')
}
$(".bars_menu").on("click",function(){
    $(".nav_menu").toggleClass("flex")
    $(".nav_menu").toggleClass("hide").toggleClass("transform-active")
})
$(".tri span").on('click',function(){
    $data = $(this).data('tri')
    // $(this).addClass('color');
    $(".color").attr('class','color_span')
    $(this).attr('class','color');
    $(".img_gal").each(function(){        
        if(!$(this).hasClass($data)){
            $(this).addClass('hide');
        }
        else{
            $(this).removeClass('hide');
           
        }
    })
})