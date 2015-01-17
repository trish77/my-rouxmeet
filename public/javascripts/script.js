/*(function($) {
    
  $.fn.pixgrid = function(prop){
	  var options;
	  options = $.extend({
		  height: "250",
		  width: "500",
		  title: "Gallery",
		  top: "50%",
		  left: "50%",
	  }, prop);
      
      return this.click(function(e){
          add_overlay();
          add_modal();
          add_styles();
          
          $('.pixgrid').fadeIn();
          
      function add_overlay(){
          var overlay = $('<div class="overlay"></div>');
          $(overlay).appendTo('body');                              
      }
      });


      
      function add_modal(){
		  var modal = $('<div class="pixgrid"><a href="#" class="modal_close"></a><img src="imageSrc"
		  $(modal).appendTo)('overlay'); </div>')
	  }
      
   
  };

})(jQuery);*/