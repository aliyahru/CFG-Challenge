window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 200) {
    document.getElementById("stat1").className = "slide1";
  }
  if (document.documentElement.scrollTop > 485) {
    document.getElementById("stat2").className = "slide2";
  }
  if (document.documentElement.scrollTop > 650) {
    document.getElementById("stat3").className = "slide3";
  }
}