let myPaths= document.querySelectorAll('path')


function randomValues() {
  anime({
    targets: myPaths,
    translateX: function() {
      return anime.random(0, 100);
    },
    easing: 'easeInOutQuad',
    duration: 750,
    complete: randomValues
  });
}

randomValues();
