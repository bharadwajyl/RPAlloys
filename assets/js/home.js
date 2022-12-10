//Jquery Slider
var instance = $(".hs__wrapper");
$.each( instance, function(key, value) {
    box = $(instance[key]).find(".hs"), 
    x = 0,
    mx = 0,
    maxScrollWidth = box[0].scrollWidth - (box[0].clientWidth / 2) - (box.width() / 2);
    $(box).on({
        mousemove: function(e) {
            var mx2 = e.pageX - this.offsetLeft;
            if(mx) this.scrollLeft = this.sx + mx - mx2;
        },
        mousedown: function(e) {
            this.sx = this.scrollLeft;
            mx = e.pageX - this.offsetLeft;
        },
        scroll: function() { toggleArrows(); }
    });
    $(document).on("mouseup", function(){ mx = 0; });
    function toggleArrows() {
        if(box.scrollLeft() > maxScrollWidth - 10) {
            nextArrow.addClass('disabled');
        } else if(box.scrollLeft() < 10) {
            prevArrow.addClass('disabled');
        } else{
            nextArrow.removeClass('disabled');
            prevArrow.removeClass('disabled');
        }
    }
});
