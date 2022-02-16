$(document).ready(function () {
    $("#prospect").on("click", function () {
      let xhr = new XMLHttpRequest();
  
      xhr.open("GET", "prospect.html", true);
  
      xhr.onload = function () {
        if (xhr.status == 200) {
          let getProspect = document.getElementById("content");
          getProspect.style.display = "block";
          getProspect.innerHTML = xhr.responseText;
        }
      };
      xhr.send();
    });
    $("#convert").on("click", function () {
        let xhr = new XMLHttpRequest();
    
        xhr.open("GET", "convert.html", true);
    
        xhr.onload = function () {
          if (xhr.status == 200) {
            let getConvert = document.getElementById("content");
            getConvert.style.display = "block";
            getConvert.innerHTML = xhr.responseText;
          }
        };
        xhr.send();
      });
      $("#retain").on("click", function () {
        let xhr = new XMLHttpRequest();
    
        xhr.open("GET", "retain.html", true);
    
        xhr.onload = function () {
          if (xhr.status == 200) {
            let getRetain = document.getElementById("content");
            getRetain.style.display = "block";
            getRetain.innerHTML = xhr.responseText;
          }
        };
        xhr.send();
      });
  
    
  });