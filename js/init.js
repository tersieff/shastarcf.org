
$(document).ready(function () {
    initHome();
});

function initHome() {

	if ($("#slides").length) {
	    $('#slides').carouFredSel({
	        auto: {
	            timeoutDuration: 7000
	        },
	        items: 6,	        
	        scroll: {
	            items: 1,	            
	            onBefore: function (data) {
                    $(".imgHolder").removeClass("selected");
	                //$('#slider2').parent().hide();
	            },
                onAfter : function(data) {
                    //$('#slider2').parent().hide();
                    data.items.visible.filter(":eq(0)").addClass("selected");
                    $('#slider2').parent().show();
                    DelayedDisplay();
                }
	        },
	        
	        
	        height: 143,
	        wrapper: "parent",
	        synchronise: '#slider2'
	    }).find(".imgHolder").click(function () {	    
	        $("#slides").trigger("slideTo", [$(this), 0]);
	        $(".imgHolder").removeClass("selected");
	        $(this).addClass("selected");
	    });


        
		$("#sliderNext").click(function () {
		    console.log("go next");
		    $("#slides").trigger("next", 1);
		});
	    $("#sliderPrev").click(function() {
	        console.log("go prev");
	        $("#slides").trigger("prev", 1);
        });



		$('#slider2').carouFredSel({
		    auto: {
		        timeoutDuration : 7000
		    },
			items: {
				visible: 1,
				width: 290
			},
			height: 284,
			prev: "#sliderPrev",
			next: "#sliderNext"
		});
		
		
	}

}

function DelayedDisplay() {
    $('#slider2').parent().fadeIn(400);
}



