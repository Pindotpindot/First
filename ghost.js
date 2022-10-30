const toggleBtn = document.getElementById('nav-button');
const navLinks = document.getElementById('nav-menu');

toggleBtn.addEventListener('click', () =>{
     navLinks.classList.toggle('active');
})