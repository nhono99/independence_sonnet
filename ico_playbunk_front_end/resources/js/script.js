$(document).ready(function(){
     /*mobile nav*/
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        nav.slideToggle(200);
        if(icon.hasClass('ion-navicon-round'))
           {
               icon.addClass('ion-close-round');
               icon.removeClass('ion-navicon-round');
               
               if(!$('nav').hasClass('sticky'))
               {
                   $('nav').addClass('nav-container');
               }
           }
        else
            {
                icon.removeClass('ion-close-round');
                icon.addClass('ion-navicon-round');
                $('nav').removeClass('nav-container');
            }
    });
});