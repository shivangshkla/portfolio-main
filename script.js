var navbar = document.querySelector('.nav-menu');
var nav_button = document.querySelector('.nav-button');
var button_top = document.querySelector('.top');
var button_mid = document.querySelector('.mid');
var button_bottom = document.querySelector('.bottom');
function  showMenu(){
  navbar.classList.toggle('appear');
  button_top.classList.toggle('top-close');
  button_mid.classList.toggle('mid-close');
  button_bottom.classList.toggle('bottom-close');
  if(  $(window).width() > 739){
    nav_button.classList.toggle('button-move')
  }
}