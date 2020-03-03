$(".deroul h4").on("click", function(){
         console.log('toto')  
    if($(this).find("i").hasClass("fa-plus")){ 
        $(".deroul h4").find("i.fa-minus").removeClass("fa-minus").addClass("fa-plus")
        $(".deroul h4").siblings("p").slideUp(400)
        $(this).find("i").addClass("fa-minus").removeClass("fa-plus")
        $(this).siblings("p").slideDown(400)
    }
    
})