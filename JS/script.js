window.onscroll = function() {
    if (window.scrollY > 10) {
      document.getElementById("ancre").style.display = "flex";
    } else {
      document.getElementById("ancre").style.display = "none";
    }
  };