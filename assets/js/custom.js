console.log("Hello from custom.js!");

function myIcon() {
    alert("Welcome!");
  }

  function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function sConsole(event) {
    event.preventDefault();
    var data = document.getElementById("data");
    console.log(data.value);
    
  }