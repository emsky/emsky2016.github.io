// Note: See http://blog.garstasio.com/you-dont-need-jquery/ and http://youmightnotneedjquery.com/ for JS commands that don't require jQuery

  // Dealing with SVG images
$(function(){
  jQuery('img.svg').each(function(){
      var $img = jQuery(this);
      var imgID = $img.attr('id');
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');

      jQuery.get(imgURL, function(data) {
          // Get the SVG tag, ignore the rest
          var $svg = jQuery(data).find('svg');

          // Add replaced image's ID to the new SVG
          if(typeof imgID !== 'undefined') {
              $svg = $svg.attr('id', imgID);
          }
          // Add replaced image's classes to the new SVG
          if(typeof imgClass !== 'undefined') {
              $svg = $svg.attr('class', imgClass+' replaced-svg');
          }

          // Remove any invalid XML tags as per http://validator.w3.org
          $svg = $svg.removeAttr('xmlns:a');

          // Check if the viewport is set, else we gonna set it if we can.
          if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
              $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
          }

          // Replace image with new SVG
          $img.replaceWith($svg);

      }, 'xml');

      });
  });


    jQuery(document).ready(function($) {
      // SIMPLE PRELOADER FUNCTION
      $(window).load(function(){
        setTimeout(function(){
          $('.preloader').addClass('animated slideOutRight');
          $('.preloader').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){$(this).remove();});
          //$('.preloader').fadeOut(500,function(){$(this).remove();});
        },500);
      });

      // TECH ICON TEXT REVEALER
      $('.tech-experience__icon').on('mouseenter click', function(){
        var techName = $(this).attr('title');
        $('.tech-name').fadeOut('fast', function(){
          $(this).html(techName).fadeIn('fast');
        });
      });




    });
