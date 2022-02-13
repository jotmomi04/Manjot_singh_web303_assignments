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
    $.ajax({
      url: "team.json",
      beforeSend: function () {
        let loadText = $("<h2></h2>").text("Loading...");
        $(`#team`).append(loadText);
      },
      
      timeout: 3000,
  
      success: function (data) {
        $(`#team`).empty();
        $.each(data.members, function (a, b) {
          console.log("data a:", a, "and data b:", b);
  
          $("#team").append(
            `
              <h2>${b.name}</h2>
              <h5>${b.position}</h5>
              <p>${b.bio}</p>
              `
          );
        });
      }
    });
  });
  