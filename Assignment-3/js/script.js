let team = $.getJSON("team.json").done(function(data){
  $.each(data.members,function(a,b){
      console.log("data a:",a,"and data b:",b);

      $('#team').append(`
      <h2>${b.name}</h2>
      <h5>${b.position}</h5>
      <p>${b.bio}</p>
      `);
  })  ;

});
console.log("the team :", team);

$(function usingAjax() {
	$.ajax({url: "team.json", 
	beforeSend: function() {
		var beforeText = $("<h2></h2>").text("Loading...");
		$(`div#team`).append(beforeText);
	},
	error: function(){
		
	},
	timeout: 5000,

	
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
	}
});
});


