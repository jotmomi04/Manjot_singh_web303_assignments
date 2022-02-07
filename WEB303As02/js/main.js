// WEB303 Assignment 2
//Manjot Singh,
//0779181
$(function(){
   $('#convert').click(function(){
        $('#content').load('convert.html #vconvert').hide().fadeIn("slow");
 }) 
     $('#prospect').click(function(){
        $('#content').load('prospect.html #prospect').hide().fadeIn("slow");
    
 }) 
     $('#retain').click(function(){
        $('#content').load('retain.html #vretain').hide().fadeIn("slow");
}) 
  
})

