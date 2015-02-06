/*
 *
 * Scripts de tu tienda
 *
 */

function themeScripts( jQuery ) {
    
    $('.add_to_cart input.submit').addClass('btn btn-success');
    
   
    
    /*
    $('.thumbnails').masonry({
      //columnWidth: 200,
      itemSelector: '.product_column'
    });
    */
    
    // or with jQuery
    var $container = $('.thumbnails');
    // initialize Masonry after all images have loaded  
        $container.imagesLoaded( function() {
          $container.masonry({
          //columnWidth: 200,
          itemSelector: '.product_column'
        });
    });
    


    
}
$( document ).ready( themeScripts );

$( window ).load(function() {
    // Run code
    /*
    $(function() {
        $('.thumbnail .product_column').matchHeight();
    });
    */
    
});

