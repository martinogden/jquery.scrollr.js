;(function($) {

    // Add exponential easing - taken from jquery.easing.js
    $.extend($.easing, {
        easeOutExpo: function (x, t, b, c, d) {
            return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
        }
    });

    $.scrollr = function (el) {
        var plugin = this;

        var init = function () {
            plugin.el = el;

            plugin.slides = plugin.el.children().get()
            plugin.slide_count = plugin.slides.length;
            plugin.width = document.width;
            plugin.is_sliding = false;
            plugin.x = null;
            plugin.start = null;
            plugin.start_x = null;

            $.each(plugin.el, function () {
                $(this).width(1024 * $(this).children().get().length);
                $(this).css({'display': 'block', 'padding': '0px', 'margin': '0px'});

                $.each($(this).children(), function () {
                    console.log($(this));
                    $(this).width(1024);
                    $(this).css({
                        'display': 'block',
                        'float': 'left',
                        'margin': 0,
                        'padding': 0});
                });
            });

            // prevent elastic scrolling
            document.body.addEventListener('touchmove', function(event){
                event.preventDefault();
            }, false);

            // attach the touch event listeners
            document.addEventListener('touchstart', handler, false);
            document.addEventListener('touchmove', handler, false);
            document.addEventListener('touchend', handler, false);
        }

        var is_animated = function () {
            return get_left() % plugin.width !== 0
        }

        var handler = function (event){
            var x = 0
            if (event.targetTouches.length) {
                x = event.targetTouches[0].pageX
            }
            switch (event.type) {
                case 'touchstart':
                    return touchstart(x);
                    break;
                case 'touchmove':
                    return touchmove(x);
                    break;
                case 'touchend':
                    return touchend();
                    break;
            }
        }

        var touchstart = function (x) {
            if (is_animated()) {
                return false;
            }
            plugin.x = x;
            plugin.start = +new Date();
            plugin.start_x = x;
            plugin.is_sliding = true;
        }

        var touchmove = function (x) {
            if (plugin.is_sliding) {
                var left = get_left(),
                    moved = plugin.x - x;

                if (left > 0 || slide(left) === -plugin.slide_count) {
                    // Move 1/3 speed into the void
                    moved /= Math.floor(3);
                }
                plugin.el.css({'margin-left':  left - moved + 'px'});
                plugin.x = x;
            }
        }

        var touchend = function (x) {
            plugin.is_sliding = false;
            var duration = +new Date() - plugin.start,
                delta = (plugin.start_x - plugin.x) / duration,
                left = get_left(),
                current_slide = slide(left),
                slide_left = current_slide * plugin.width;

            if (left > 0) {
                // Don't allow sliding before first slide
                slide_left = 0;
            } else if (left < -(plugin.slide_count - 1) * plugin.width) {
                // Don't allow sliding past last slide
                slide_left = -(plugin.slide_count - 1) * plugin.width;
            } else if (Math.abs(delta) > 1) {
                if (plugin.start_x < plugin.x) {
                    // If 'force' is strong enough, animated to next / prev slide
                    slide_left += plugin.width;
                }
            } else if (left > slide_left + (plugin.width / 2)) {
                slide_left += plugin.width;
            }
            plugin.el.animate({'margin-left': slide_left + 'px'}, 600, 'easeOutExpo');
        }

        var get_left = function () {
            return parseInt(plugin.el.css('margin-left'));
        }

        var slide = function (left) {
            return Math.floor(left / plugin.width);
        }

        var reset = function () {
            plugin.start_x = null;
            plugin.x = null;
            plugin.start = null;
        }

        init();
    }

})(jQuery);
