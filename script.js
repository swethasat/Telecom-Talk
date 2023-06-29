document.addEventListener("DOMContentLoaded", function() {
  var heading = document.querySelector("h1.fade-in");
  var contents = document.querySelectorAll(".content.fade-in");

  function fadeInOnLoad() {
    setTimeout(function() {
      heading.classList.add("active");
    }, 500);
  }

  function fadeInOnScroll() {
    var windowHeight = window.innerHeight;

    for (var i = 0; i < contents.length; i++) {
      var content = contents[i];
      var offsetTop = content.offsetTop;

      if (window.pageYOffset > offsetTop - windowHeight + 200) {
        content.classList.add("active");
      }
    }
  }

  window.addEventListener("scroll", fadeInOnScroll);
  fadeInOnLoad();
  fadeInOnScroll(); // Trigger the fade-in initially if the content is already in the viewport
});