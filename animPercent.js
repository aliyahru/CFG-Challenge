window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 300) {
    document.getElementById("stat1").className = "slide1";
  }
  if (document.documentElement.scrollTop > 585) {
    document.getElementById("stat2").className = "slide2";
  }
  if (document.documentElement.scrollTop > 750) {
    document.getElementById("stat3").className = "slide3";
  }
}
