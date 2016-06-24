/*!
 * Start Bootstrap - WebriQ Bootstrap Theme
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */



(function($) {
    // "use strict"; // Start of use strict

    // // jQuery for page scrolling feature - requires jQuery Easing plugin
    // $('a.page-scroll').bind('click', function(event) {
    //     var $anchor = $(this);
    //     $('html, body').stop().animate({
    //         scrollTop: ($($anchor.attr('href')).offset().top - 50)
    //     }, 1250, 'easeInOutExpo');
    //     event.preventDefault();
    // });



    // // Closes the Responsive Menu on Menu Item Click
    // $('.navbar-collapse ul li a').click(function() {
    //     $('.navbar-toggle:visible').click();
    // });

    // // Fit Text Plugin for Main Header
    // $("h1").fitText(
    //     1.2, {
    //         minFontSize: '35px',
    //         maxFontSize: '65px'
    //     }
    // );


    // // Initialize WOW.js Scrolling Animations

    // new WOW().init();

  //    function stripTrailingSlash(str) {
  //   if(str.substr(-1) == '/') {
  //     return str.substr(0, str.length - 1);
  //   }
  //   return str;
  // }

  // var url = window.location.pathname;
  // var activePage = stripTrailingSlash(url);

  // $('.nav li a, .nav li ul li a').each(function(){
  //   var currentPage = stripTrailingSlash($(this).attr('href'));

  //   if (activePage == currentPage) {
  //     $(this, 'li').addClass('active');
  //   }
  // });


var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if( isMobile.iOS() ) {

  $('body').addClass('ios-mode');

}





})(jQuery); // End of use strict

