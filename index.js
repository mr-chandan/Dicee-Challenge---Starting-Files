var randomnumber1 = Math.floor((Math.random() * 6) + 1);console.log(randomnumber1);


switch (randomnumber1) {
    
    case 1: document.querySelector(".img1").setAttribute("src","dice1.png");
      break;
    case 2:
       day = document.querySelector(".img1").setAttribute("src","dice2.png");
      break;
    case 3:
      day = document.querySelector(".img1").setAttribute("src","dice3.png");
      break;
    case 4:
      day = document.querySelector(".img1").setAttribute("src","dice4.png");
      break;
    case 5:
      day = document.querySelector(".img1").setAttribute("src","dice5.png");
      break;
    case 6:
      day = document.querySelector(".img1").setAttribute("src","dice6.png");
  }

  var randomnumber2 = Math.floor((Math.random() * 6) + 1);console.log(randomnumber1);

  

switch (randomnumber2) {
    
    case 1: document.querySelector(".img2").setAttribute("src","dice1.png");
      break;
    case 2:
       day = document.querySelector(".img2").setAttribute("src","dice2.png");
      break;
    case 3:
      day = document.querySelector(".img2").setAttribute("src","dice3.png");
      break;
    case 4:
      day = document.querySelector(".img2").setAttribute("src","dice4.png");
      break;
    case 5:
      day = document.querySelector(".img2").setAttribute("src","dice5.png");
      break;
    case 6:
      day = document.querySelector(".img2").setAttribute("src","dice6.png");
  }

  if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (randomnumber2 > randomnumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }