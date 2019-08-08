/*****Toggel****/
function toggleIcon(e) {
    jQuery(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
}
jQuery('.panel-group').on('hidden.bs.collapse', toggleIcon);
jQuery('.panel-group').on('shown.bs.collapse', toggleIcon);

function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);
	
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}
/****/
$(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
        $('nav').addClass('fixed-header');
        $('nav div').addClass('visible-title');
    }
    else {
        $('nav').removeClass('fixed-header');
        $('nav div').removeClass('visible-title');
    }
});

jQuery(document).ready(function($) {
    var slideCount = $('#slider2 ul li').length;
    var slideWidth = $('#slider2 ul li').width();
    var slideHeight = $('#slider2 ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
  
    $('#slider2').css({
      width: slideWidth,
      height: slideHeight
    });
    $('#slider2 ul').css({
      width: sliderUlWidth,
      marginLeft: -slideWidth
    });
    $('#slider2 ul li:last-child').prependTo('#slider2 ul');
  
    function moveLeft() {
      $('#slider2 ul').animate({
        left: +slideWidth
      }, 200, function() {
        $('#slider2 ul li:last-child').prependTo('#slider2 ul');
        $('#slider2 ul').css('left', '');
      });
    };
  
    function moveRight() {
      $('#slider2 ul').animate({
        left: -slideWidth
      }, 200, function() {
        $('#slider2 ul li:first-child').appendTo('#slider2 ul');
        $('#slider2 ul').css('left', '');
      });
    };
  
    // Slider Arrows
    $('#slider2 .prevarrow2').click(function() {
      moveLeft();
    });
    $('#slider2 .nextarrow2').click(function() {
      moveRight();
    });
  
    // auto play function
    setInterval(function() {
      moveRight();
    }, 6000);
  });

jQuery(document).ready(function($) {
    $('.counter').counterUp({

        delay: 50,
        time:6000
    });
});
jQuery(document).ready(function($) {
                
    $(document).ready(function() {
        var search_icon = $("#search-icon-0e7350d");
        search_icon.on('click', function() {
           $('#search-overlay-0e7350d').addClass('open');
        });
       
        $('.search-close').on('click', function() {
          $('#search-overlay-0e7350d').removeClass('open');
        });
      });

  });
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
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:9,
    loop:true,
    margin:10,
    autoPlay:true,
    autoPlaySpeed:1000,
    autoPlayTimeout:1000,
    autoPlayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

$(document).ready(function(){
    $('.categ-img').tilt({
        maxTilt:10,
        glare:true,
        maxGlare:.4,
    })
})

$(".two-menu").click(function(){
    $(".menu-vertical").toggleClass("open");
});



$(".menu-a").click(function(){
    $(this).addClass("active-menu").siblings().removeClass("active-menu");
})