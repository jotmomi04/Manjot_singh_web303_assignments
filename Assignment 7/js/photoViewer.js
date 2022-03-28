$(function() {
    $.fn.photoViewer = function() {
            let request;    // last image request
            let $current;   // current image
            let cache = {   // caching image
                
            };
            let $frame = $('.photo-box');     // container 1
            let $thumbs = $('.thumbnail-anchor');          // container 2
            $frame.addClass('is-loading');      // adds the is-loading class on an image. 
    
            this.on('click', '.thumbnail-anchor', function(e) {
                let $img;
                let src = this.href;
                let request = src;
                
                e.preventDefault();
                $thumbs.removeClass('active');
                $(this).addClass('active');
                
                if(cache.hasOwnProperty(src)) {
                    if(cache[src].isLoading === false) {
                        crossfade(cache[src].$img);
                    }
                } else {
                    $img = $('<img/>');
                    cache[src] = {
                        $img: $img,
                        isLoading: true
                    };
                }
                
                $img.on('load', function() {
                $(this).hide();
                
                $frame.removeClass('is-loading').append($img);
            
                cache[src].isLoading = false;
            
                if (request === src) {
                    crossfade($(this));
                }
                });
                $frame.addClass('is-loading');
                $img.attr({
                    'src': src,
                    'alt': this.title || ''
                });
            });
        
        
        function crossfade($img) {
            if($current) {
                $current.stop().fadeOut('slow');
            }
    
            $img.css({
                marginLeft: -$img.width() / 2,
                marginTop: -$img.height() / 2,
            });
            $img.stop().fadeTo('slow', 2);
            $current = $img;
        }
        return this;
    };
    });