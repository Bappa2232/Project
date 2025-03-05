//%%%%%%%%%%%%%%%%%%%%%%%%%%%%% Start Color Panel Area %%%%%%%%%%%%%%%%%%%
$("span.red-color").click(function(){
   $("body").addClass("red-color-bar").removeClass("green-color-bar yellow-color-bar purple-color-bar"); 
});
$("span.green-color").click(function(){
   $("body").addClass("green-color-bar").removeClass("red-color-bar yellow-color-bar purple-color-bar");
});
$("span.yellow-color").click(function(){
   $("body").addClass("yellow-color-bar").removeClass("red-color-bar green-color-bar purple-color-bar"); 
});
$("span.purple-color").click(function(){
   $("body").addClass("purple-color-bar").removeClass(" red-color-bar green-color-bar yellow-color-bar");
});

	$(".spainer-buttom").click( function(event){
	event.preventDefault();
	if ( $(this).hasClass("isOut") ) {
	$(".demo-panel-box").stop().animate({left:"-120"}, 500);
	} else {
	$(".demo-panel-box").stop().animate({left:"0px"}, 500);
	}
	$(this).toggleClass("isOut");
	return false;
        });

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% Start Auto typer area %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% End Auto Typer Area %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% Start Scroll Area%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $("#mainNav").css("background" , "#05121A");
            $("#mainNav").css("padding" , "8px");
            $("#brand").css("font-size" , "20px");  
	  }

	  else{
             $("#mainNav").css("background" , "none repeat scroll 0 0 rgba(0, 0, 0, 0.1)");  
             $("#mainNav").css("padding" , "20px");
             $("#brand").css("font-size" , "26px");
	  }
  })
})
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% Start Back Top Bottom Area %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% Start portfolio Work Area %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
$(document).ready(function(){
		$('.portfolios').filterData({
			aspectRatio: '8:5',		
			nOfRow : 3,
			itemDistance : 0
		});
		$('.portfolio-controllers button').on('click',function(){
			$('.portfolio-controllers button').removeClass('active-work');
			$(this).addClass('active-work');
		});
	});     
 //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% Start Clientes Area %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
$(document).ready(function() {
  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: true,
    interval: 4000,
  });
});       
//%%%%%%%%%%%%%%%%%%%%%%%%% Start Counter ARea %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%        
        
          // Counter 
            jQuery('.statistic-counter').counterUp({
                delay: 10,
                time: 2000
            });