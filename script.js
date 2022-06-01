window.onload = function() {
    Particles.init({
      selector: '.background'
    });
  };

function myFunction() {
    var x = document.getElementById("enum");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function btnSoluc() {
    var x = document.getElementById("soluc");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
