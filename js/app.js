(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // TOOLTIP
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })

})(jQuery);

$(".contact-form").on("submit", (e) => {
  sessionStorage.setItem("showmsg", "1");
})

if(sessionStorage.getItem("showmsg")=='1'){
  var toastExample = $("#contact-toast")
  var toast = new bootstrap.Toast(toastExample)
  toast.show()
  sessionStorage.removeItem("showmsg");
}