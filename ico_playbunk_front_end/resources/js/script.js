$(document).ready(function(){
    /*FOR on nav outside click close nav dropdown */
    var mobile_nav_modal = document.getElementById('mobile-nav-modal');
    var main_nav_container = document.querySelector(".main-nav-container");
     /*mobile nav*/
    $('.js--nav-icon').click(function(){
        navClick();
    });
    
    function navClick()
    {
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
        
            mobile_nav_modal.style.left = '0';
        }
        else
        {
            icon.removeClass('ion-close-round');
            icon.addClass('ion-navicon-round');
            $('nav').removeClass('nav-container');
            mobile_nav_modal.style.left = '100%';
           
        }
    }
    
    window.addEventListener("click", mobile_nav_modal_Click);
    window.addEventListener("click", main_nav_container_Click);
    
    function mobile_nav_modal_Click(e){
      if(e.target == mobile_nav_modal){
          mobile_nav_modal.style.left = '100%';
          navClick();
      }
    }
    function main_nav_container_Click(e){
      if(e.target == main_nav_container){
          navClick();
          mobile_nav_modal.style.left = '100%';
      }
    }
    
    
    /*----------------------------------------------------------------------------------------------*/
    /*MAIN-NAV smooth scrolling snippet from https://css-tricks.com/snippets/jquery/smooth-scrolling/
    /*--------------------------------------------------------------------------------------------*/
        $('a[href*="#"]')
          // Remove links that don't actually link to anything
          .not('[href="#"]')
          .not('[href="#0"]')
          .click(function(event) {
            // On-page links
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
              // Figure out element to scroll to
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              // Does a scroll target exist?
              if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000, function() {
                  // Callback after animation
                  // Must change focus!
                  var $target = $(target);
                  $target.focus();
                  if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                  } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                  };
                });
              }
            }
          });
});