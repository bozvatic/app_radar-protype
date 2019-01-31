/*
function toggleFunction() {
    let element = document.querySelector(".navigation__list");
    element.classList.toggle("active");
}
*/

var Appradar = {
	init: function(){
        var that = this;

        // bind click to element
        document.querySelector('.js-navicon').addEventListener('click', function(){
            that.navToggle(), that.changeColor()
            });
    },
    navToggle: function() {
        let element = document.querySelector(".navigation__list");
        element.classList.toggle("active");
    },
    changeColor: function(){
        let element2 = document.querySelectorAll(".footernav__link");
        element2.style.color = "red";
    }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', Appradar.init());
} else {
  Appradar.init();
}