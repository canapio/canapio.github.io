(function( $ ){
    $.fn.extend({
        Segment: function ( ) {
    			$(this).each(function (){
    				var self = $(this);
    				var onchange = self.attr('onchange');

    				var wrapper = $("<div>",{class: "ui-segment"});
    				$(this).find("option").each(function (){
    					var option = $("<span>",{class:'option' , text: $(this).text(), value:$(this).val()});
    					if ($(this).is(":selected")){
    						option.addClass("active");
    					}
    					wrapper.append(option);
    				});
    				wrapper.find("span.option").click(function (){
    					wrapper.find("span.option").removeClass("active");
    					$(this).addClass("active");
              var selectedvalue = $(this).attr('value')
              self.children("option[value="+ selectedvalue + "]").attr("selected", "selected");
              self.children().each(function() {
                if ($(this).val() == selectedvalue) {
                  $(this).attr("selected", "selected")
                } else {
                  $(this).removeAttr("selected")
                }
              })

              var onchangestringfunc = self.attr('onchange')
              if (onchangestringfunc.length > 0) {
                onchangestringfunc = onchangestringfunc.substring(0, onchangestringfunc.length-1)
                onchangestringfunc = onchangestringfunc + "\"" + selectedvalue + "\")"
              }

              eval(onchangestringfunc)

    				});
    				$(this).after(wrapper);
    				$(this).hide();
    			});
        }
    });

})(jQuery);
