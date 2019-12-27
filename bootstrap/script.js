$(document).ready(function(){
    // navbar-toggler
    $('.navbar-toggler').click(function(){
        ('.navbar-toggler').toggleClass('change');
    })
    //adding background and fixed
        $(window).scroll(function(){
            let position = $(this).scrollTop();
            
            if (position>=190){
                $('.navbar').addClass('navbar-backgroubd');
                $('.navbar').addClass('fixed-top');
            }
            else{
                $('.navbar').removeClass('navbar-backgroubd');
                $('.navbar').addClass('fixed-top');
            }
        })
        // smooth scroll
        $('.nav-item a').click(function(Link){
            Link.preventDefault();
            let target= $(this).attr('href');
            $('html, body').stop().animate({
                scrollTop:$(target).offset().top
            }, 3000);
        })


});