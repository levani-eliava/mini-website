const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

menu.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("title3").className = "slide";
    document.getElementById("title4").className = "slide";
    document.getElementById("title5").className = "slide";
    document.getElementById("title6").className = "slide";
    document.getElementById("title7").className = "slide";
    document.getElementById("title8").className = "slide";
    document.getElementById("title9").className = "slide";
    document.getElementById("title10").className = "slide";
    document.getElementById("title11").className = "slide";
    document.getElementById("title12").className = "slide";
    document.getElementById("title13").className = "slide";
    document.getElementById("title14").className = "slide";
    document.getElementById("title15").className = "slide";
    document.getElementById("title16").className = "slide";
    document.getElementById("title17").className = "slide";
    document.getElementById("title18").className = "slide";
    document.getElementById("title19").className = "slide";
    document.getElementById("title20").className = "slide";
    
   
  }
}



