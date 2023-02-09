window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 500) {
    document.getElementById("stat1").className = "slide1";
  }
  if (document.documentElement.scrollTop > 785) {
    document.getElementById("stat2").className = "slide2";
  }
  if (document.documentElement.scrollTop > 950) {
    document.getElementById("stat3").className = "slide3";
  }
}
