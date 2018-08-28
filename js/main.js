var listfornav = document.getElementById("listfornavbar");
var navbarm = document.getElementById("navbarmore");
navbarm.onclick = function() {showlist()};
listfornav.onclick = function() {showlist(2)};
valuelist = 0;

  function showlist() {
    valuelist++;
    if (valuelist == 1) {
      listfornav.classList.remove("topnavbar");
      listfornav.classList.add("topnavbarbutton");
      navbarm.classList.add("rotateimg");
      navbarm.classList.remove("norotateimg");
    }
    if (valuelist == 2) {
      navbarm.classList.add("norotateimg");
      listfornav.classList.add("topnavbar");
      listfornav.classList.remove("topnavbarbutton");
      navbarm.classList.remove("rotateimg");
      valuelist = 0;
    }
  }

var bordermore = document.getElementById("bordermore");
var imgrotate = document.getElementById("rotatemore");
bordermore.onclick = function() {showmore()};
var counter = 0;

function showmore(){
  counter++;
  if (counter == 1) {
    for(cardal=1;cardal<=3;cardal++){
        var c = 'display'+cardal;
        d = document.getElementById(c).classList.remove("displaynoneanim");
        e = document.getElementById(c).classList.add("displayanim");
      }
      document.getElementById("seemore").innerHTML = "Voir Moins -";
  }
  if (counter == 2) {
    for(cardal=1;cardal<=3;cardal++){
        var c = 'display'+cardal;
        d = document.getElementById(c).classList.add("displaynoneanim");
        e = document.getElementById(c).classList.remove("displayanim");
      }
      document.getElementById("seemore").innerHTML = "Voir Plus +";
      counter = 0;
  }
}


/* SOURCE OF THE CODE SMOOTH SCROLL: https://wprock.fr/blog/smooth-scrolling-jquery/ */

$(function() {
    /**
    * Smooth scrolling to page anchor on click
    **/
    $("a[href*='#']:not([href='#'])").click(function() {
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top }, 1600);
            }
        }
    });
});
