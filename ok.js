window.onload = function () {
    var spinner = document.getElementById("spinner");
    var main = document.getElementById("mainDiv");
    main.style.transition = "opacity 0.25s";
    main.style.opacity = "0";
  
    setTimeout(function () {
      spinner.style.display = "none";
      main.style.opacity = "1";
    }, 500);
  
  };