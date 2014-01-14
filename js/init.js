if(typeof String.prototype.trim !== 'function') {
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, '');
    };
}

$(document).ready(function () {
    initHome();
    $("#accordion > a").click(function () {
        $('#accordion div').slideUp(300);
        $(this).next().slideToggle(300);
    });

    $('ul#accordion > div:eq(0)').show();
    $(".region:first").click();
    
    $('body').jfontsize({
        btnMinusClasseId: '#jfontsize-m',
        btnDefaultClasseId: '#jfontsize-d',
        btnPlusClasseId: '#jfontsize-p',
        btnMinusMaxHits: 2,
        btnPlusMaxHits: 2,
        sizeChange: 1
    });

    // 9072 - track PDF downloads
    try {
        $('body').delegate('a[href$=".pdf"]', 'click', function(e) {
            var h = $(this).attr('href');
            _gaq.push(['_trackEvent', 'Downloads', 'PDF', h]);
        });
    }
    catch (e) { }

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
                    $('#slider2').parent().hide();
                    data.items.visible.filter(":eq(0)").addClass("selected");
                    //$('#slider2').parent().show();
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
    /*end*/
}

function DelayedDisplay() {
    $('#slider2').parent().fadeIn(200);
}



