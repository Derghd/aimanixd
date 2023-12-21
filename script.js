 /* Please ❤ this if you like it! */


(function($) { "use strict";
 
 	//Parallax            
              
	function scrollBanner() {
	  $(document).on('scroll', function(){
      var scrollPos = $(this).scrollTop();
        $('.parallax-fade-top').css({
          'top' : (scrollPos/2)+'px',
          'opacity' : 1-(scrollPos/700)
        });
        $('.parallax-00').css({
          'top' : (scrollPos/-3.5)+'px'
        });
        $('.parallax-01').css({
          'top' : (scrollPos/-2.8)+'px'
        });
        $('.parallax-top-shadow').css({
          'top' : (scrollPos/-2)+'px'
        });
      });    
	  }
	scrollBanner();	              

	//Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }              
              
  
//Scroll back to top
              
$(document).ready(function() {	
		var offset = 300;
		var duration = 400;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.scroll-to-top').addClass('active-arrow');
			} else {
				jQuery('.scroll-to-top').removeClass('active-arrow');
			}
		});				
		jQuery('.scroll-to-top').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
  
  		
		/* Hero Case study images */			
		
		$('.case-study-name:nth-child(1)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(1)').addClass("show");
			$('.case-study-name:nth-child(1)').addClass('active');
		})
		$('.case-study-name:nth-child(2)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(2)').addClass("show");
			$('.case-study-name:nth-child(2)').addClass('active');
		})
		$('.case-study-name:nth-child(3)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(3)').addClass("show");
			$('.case-study-name:nth-child(3)').addClass('active');
		})
		$('.case-study-name:nth-child(4)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(4)').addClass("show");
			$('.case-study-name:nth-child(4)').addClass('active');
		})
		$('.case-study-name:nth-child(1)').trigger('mouseenter')
  
  });            
              
})(jQuery);


document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
	t.style.left = n.clientX + "px", 
	  t.style.top = n.clientY + "px", 
	  e.style.left = n.clientX + "px", 
	  e.style.top = n.clientY + "px", 
	  i.style.left = n.clientX + "px", 
	  i.style.top = n.clientY + "px"
  });
  var t = document.getElementById("cursor"),
	  e = document.getElementById("cursor2"),
	  i = document.getElementById("cursor3");
  function n(t) {
	  e.classList.add("hover", "hover-2"), i.classList.add("hover", "hover-2")
  }
  function s(t) {
	  e.classList.remove("hover", "hover-2"), i.classList.remove("hover", "hover-2")
  }
  s();
  for (var r = document.querySelectorAll(".hover-target, .hover-target-2"), a = r.length - 1; a >= 0; a--) {
	  o(r[a])
  }
function o(t) {
	t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
}
document.addEventListener('DOMContentLoaded', function () {
	var hoverLink = document.querySelector('.logo');
	var bodychange = document.querySelector('body');

	hoverLink.addEventListener('mouseenter', function (e) {
		bodychange.classList.add('logo-wrap');
	});
	hoverLink.addEventListener('mouseleave', function () {
		bodychange.classList.remove('logo-wrap');
	})
})
document.addEventListener('DOMContentLoaded', function () {
	var hoverLink = document.querySelector('.img-1');
	var bodychange = document.querySelector('body');

	hoverLink.addEventListener('mouseenter', function (e) {
		bodychange.classList.add('img-1-wrap');
	});
	hoverLink.addEventListener('mouseleave', function () {
		bodychange.classList.remove('img-1-wrap');
	})
})
document.addEventListener('DOMContentLoaded', function () {
	var hoverLink = document.querySelector('.img-2');
	var bodychange = document.querySelector('body');

	hoverLink.addEventListener('mouseenter', function (e) {
		bodychange.classList.add('img-2-wrap');
	});
	hoverLink.addEventListener('mouseleave', function () {
		bodychange.classList.remove('img-2-wrap');
	})
})
document.addEventListener('DOMContentLoaded', function () {
	var hoverLink = document.querySelector('.img-3');
	var bodychange = document.querySelector('body');

	hoverLink.addEventListener('mouseenter', function (e) {
		bodychange.classList.add('img-3-wrap');
	});
	hoverLink.addEventListener('mouseleave', function () {
		bodychange.classList.remove('img-3-wrap');
	})
})
document.addEventListener('DOMContentLoaded', function () {
	var hoverLink = document.querySelector('.img-4');
	var bodychange = document.querySelector('body');

	hoverLink.addEventListener('mouseenter', function (e) {
		bodychange.classList.add('img-4-wrap');
	});
	hoverLink.addEventListener('mouseleave', function () {
		bodychange.classList.remove('img-4-wrap');
	})
})