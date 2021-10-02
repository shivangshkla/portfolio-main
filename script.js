const navmenu = document.querySelector('.nav-menu');
const faders = document.querySelectorAll('.text-container');
const projects = document.querySelectorAll('.project-links');
const header = document.querySelector('header');
const navheading = document.querySelector('.navhead');
const navbuttons = document.querySelectorAll('.nav-lines');
const navlinks = document.querySelectorAll('.nav-links');
function showMenu(){
    navmenu.classList.toggle('appear');
    navbuttons.forEach(navbutton =>{
        navbutton.classList.toggle('fades'); 
    })
}
const appearOptions = {};
const appearOnScroll = new IntersectionObserver
(function(entries,appearOnScroll) {
    entries.forEach (entry => {
      if(!entry.isIntersecting){
          return;
      }else{
          entry.target.classList.add('fades');
          appearOnScroll.unobserve(entry.target);
      }
    })
},appearOptions);
faders.forEach (fader => {
    appearOnScroll.observe(fader);
})
projects.forEach (project => {
    appearOnScroll.observe(project);
})
window.onscroll = () => {
    if (window.scrollY > 200) {
        navheading.classList.add('fades');
        header.classList.add('fades');
    } else {
        navheading.classList.remove('fades');
        header.classList.remove('fades');
    }
};