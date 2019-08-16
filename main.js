window.onload = function() {
  alert('page loaded!');
  
  let changeColorButton = document.querySelector('#change-color-button');
  let body = document.querySelector("body");
  let clicked = false;
  
  //click handler for the button
  changeColorButton.addEventListener("click", (event) => {
    console.log('clicked');
    clicked = !clicked;
    
    //Changes the background color depending on what the current state of clicked is
    if (clicked) {
      body.style.backgroundColor = '#f48d8d';
    } else {
      body.style.backgroundColor = '#31b6e2';
    }
  });
  
};
