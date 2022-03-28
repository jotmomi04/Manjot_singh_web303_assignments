$.fn.photoViewer = function() {
    
    var request; 
    var $current; 
    var cache = {}; 
    var $frame = $('.photo-box'); 
    var $thumbs = $('.thumbnail-anchor');       
                   
    function crossfade($img) {                   
        if ($current) 
        {                              
            $current.stop().fadeOut('slow');             
        }
        $img.css({                                   
            marginLeft: -$img.width() / 2,              
            marginTop: -$img.height() / 2               
        });
        $img.stop().fadeTo('slow', 1);       
        $current = $img;       
    }
    
    this.on('click', '.thumbnail-anchor', function(e) {     
        var $img;                                          
        var src = this.href;                              
        var request = src;                                
        e.preventDefault();                               
        $thumbs.removeClass('active');                   
        $(this).addClass('active');                      
        if (cache.hasOwnProperty(src)) 
        {                 
            if (cache[src].isLoading === false) {           
            crossfade(cache[src].$img);                    
            }
        } else 
        {                                          
            $img = $('<img/>');                                 
            cache[src] = {                                  
            $img: $img,                                 
            isLoading: true                               
            };
        
            // When image has loaded this code runs
            $img.on('load', function() {            
                $img.hide();                            
                // Remove is-loading class & append image
                $frame.removeClass('is-loading').append($img);
                cache[src].isLoading = false;                   
                // If still most recently requested image then
                if (request === src) {
                crossfade($img);                            
                }                                           
            });
            $frame.addClass('is-loading');                      
            $img.attr({                                         
            'src': src,                                          
            'alt': this.title || ''                            
            });
        }
        
    });
        return this;
    }