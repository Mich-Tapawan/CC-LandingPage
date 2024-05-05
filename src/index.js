document.addEventListener('DOMContentLoaded', ()=>{

    // Navigation Bar Scrolling Effect
    var navbar = document.getElementById('fixed-nav');

    window.addEventListener('scroll', ()=>{
        if(window.scrollY > 0){
            navbar.style.backgroundColor = '#fff';
        }
        else{
            navbar.style.backgroundColor = 'transparent';
            navbar.style.paddingTop = '10px';
        }
    });

    //Navbar main logo and home links top scrolling
    var logo = document.querySelectorAll('.top');

    logo.forEach(link =>{
        link.addEventListener('click',()=>{
            window.scrollTo(0,0);
        })
    })
});