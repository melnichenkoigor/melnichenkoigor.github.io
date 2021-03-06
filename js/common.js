$(document).ready(function() {

    $("#portfolio_grid").mixItUp();
    
        $(".s_portfolio li").click(function() {
            $(".s_portfolio li").removeClass("active");
            $(this).addClass("active");
        });
    
        $(".popup").magnificPopup({type:"image"});
        $(".popup_content").magnificPopup({
            type:"inline",
            midClick: true
        });
    

    function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
    });

    $(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass(":active");
	});

    $(".animation_left").animated("fadeInLeft", "fadeOutLeft");
    $(".animation_right").animated("fadeInRight", "fadeOutRight");
    $(".animation_center").animated("flipInX");

    $(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
        $(".sandwich").toggleClass("active");
        $(".top_text").css("opacity", ".8");
	}).append("<span>");
    
    $(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_mnu").fadeOut(600);
            $(".top_mnu li a").removeClass("fadeInUp animated");
            $(".top_text").css("opacity", ".8")
            $(".social_header_wrap li a").css("display", "block");
		} else {
			$(".top_text").css("opacity", ".4");
			$(".top_mnu").fadeIn(600);
            $(".top_mnu li a").addClass("fadeInUp animated");
            $(".social_header_wrap li a").css("display", "none");
		};
    });
    
    
    
    $("input, select, textarea").jqBootstrapValidation();

    $(".top_mnu ul a").mPageScroll2id();

        $(".toggle_mnu").click(function() {
        $(".sandwich").toggleClass("active");
      });
	
});
$(window).load(function() {
    
        $(".loader_inner").fadeOut();
        $(".loader").delay(400).fadeOut("slow");

        $(".top_text h1, .section_header, .right .resume_item").animated("fadeInRight", "fadeOutLeft");
        $(".top_text p, .social_header_wrap, .left .resume_item").animated("fadeInLeft", "fadeOutRight");
    });