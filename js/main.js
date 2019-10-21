const body = document.getElementsByTagName("BODY")[0];

const navbar = document.getElementsByClassName("navbar")[0];

const toggle = document.querySelector("#switch");

const icons = document.querySelectorAll(".contact-links li a");

body.setAttribute("id", "custom-scroll");


toggle.onchange = () => { 
if (toggle.checked == true){
  body.style.color = '#fff';
  body.style.backgroundImage = 'linear-gradient(#000000c7, #000000c7), url(../images/bgImg.jpg)';
  for(let i = 0; i < icons.length; i++){
    icons[i].style.color = '#fff';
  }
  
}
else{
  body.style.color = '#111'; 
  navbar.style.color = '#111'; 
  body.style.backgroundColor = '#fff';
  navbar.style.backgroundColor = '#fff'; 
  body.style.backgroundImage = 'none';
  for(let i = 0; i < icons.length; i++){
    icons[i].style.color = '#111';
  }

}

};




