/*global $,document ,window */
$(document).ready(function () {
    
    'use strict';
    
    //open navbar dropdown in hover
    
    $('ul.navbar-nav li.dropdown').hover(function () {
        
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
        
    }, function () {
        
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });

    // Nav Animation on Scroll
    
    var navbar = $('.nav-animation'),
        
        scrollButton = $('#scroll-top');
    
    $(window).on('scroll', function () {
        
        if ($(this).scrollTop() > 10) {
            
            if (!navbar.hasClass('expand')) {
            
                navbar.addClass('expand');
            
            }
            
        } else {
            
            if (navbar.hasClass('expand')) {
                
                navbar.removeClass('expand');
                
            }
        }
    });
    
    $('.carousel').carousel({
  interval: 7000
});
    
var leftArrow = '<i class="fa fa-chevron-left"></i>',
          rightArrow = '<i class="fa fa-chevron-right"></i>',
          options = {
              loop : true, //عدد لا نهائي من التكرارات
              margin : 0, // المسافة بين العناصر
              nav : true, // اظهار زرين للتحرك قبل وبعد (next & prev)
              navText : [leftArrow, rightArrow],
              items : 1,
              merge : true
          };
       $(".upcoming-events .owl-carousel").owlCarousel(options);
        
        $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
    // F&Q Section
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }
    /*pop up video in services section in home page*/
    
    $("#video1").videoPopup();
    
    $("#video1").videoPopup({

       // autoplay on open
        autoplay: true,

       // shows video controls
        showControls: true,

       // colors of controls
        controlsColor: null,

       // infinite loop
        loopVideo: false,

       // shows video information
        showVideoInformations: true,

       // width
        width: null
  
    });
    // caching the scroll top element 
    
    $(window).scroll(function () {
        
        if ($(this).scrollTop() >= 650) {
            
            scrollButton.show();
            
        } else {
            
            scrollButton.hide();
        }
        
    });
    
    scrollButton.click(function () {
        
        $('html,body').animate({
            
            scrollTop : 0
            
        }, 1000);
        
    });
    
    // loading page screen fade out
    
    $('.loading-overlay').fadeOut(1000);
    // trigger mixitup
    
    $(function () {
        
	    $('#Container').mixItUp();
        
    });
    $(".shuffle li").click(function () {
        
        $(this).addClass("selected").siblings().removeClass("selected");
        
    });
    
});