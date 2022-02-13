/*let team = $.getJSON("team.json").done(function(data){
  $.each(data.members,function(a,b){
      console.log("data a:",a,"and data b:",b);

      $('#team').append(`
      <h2>${b.name}</h2>
      <h5>${b.position}</h5>
      <p>${b.bio}</p>
      `);
  })  ;

});
console.log("the team :", team);*/
$(function teamB() {
	$.ajax({url: "team.json", 
	sendBefore:function() {
		$('#team').append('<h2>Loading...</h2>').show()
	},
    timeout:3000,	
	success: function(data){
		$(`div#team`).empty();
        $.each(data.members,function(a,b){
            console.log("data a:",a,"and data b:",b);
      
            $('#team').append(`
            <h2>${b.name}</h2>
            <h5>${b.position}</h5>
            <p>${b.bio}</p>
            `);
        })  
	},timeout:3000
});
});


