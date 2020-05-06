// By CSS class
anime({
    targets: '.txt',
    translateX: 10
});

//  By Element ID
let anyName = document.getElementById("id_1")
anime({
    targets: anyName,
    translateX: 100,
    easing: 'easeInOutQuad'
});

// by element Tag
let drawings = document.querySelectorAll("svg")
anime({
    targets: drawings,
    translateX: 100,
    easing: 'easeInQuad'
});

// By query selector
let rows = document.querySelectorAll(".txt2")
anime({
    targets: rows,
    translateX: 100,
    easing: 'easeOutQuad'
});

// By query selector
let myRows = document.querySelectorAll(".row1")
anime({
    targets: myRows,
    translateX: 100,
    easing: 'easeOutQuad'
});


// TRANSFORMATIONS
let transform = document.getElementById("boxPink")
anime({
  targets: transform,
  translateX: [100, 500], // from 100 to 500
  delay: 500,
  direction: 'alternate',
  loop: true
});

// PROPERTIES
let props = document.querySelectorAll(".image")
anime({
  targets: props,
  translateX: 500,
  direction: 'alternate',
  loop: true,
  delay: function(el, i, l) {
    return i * 100;
  },
  endDelay: function(el, i, l) {
    return (l - i) * 100;
  }
});