document.addEventListener('DOMContentLoaded', ()=>{

    // Navigation Bar Scrolling Effect
    var navbar = document.getElementById('fixed-nav');

    window.addEventListener('scroll', ()=>{
        if(window.scrollY > 0){
            navbar.style.backgroundColor = '#fff';
            navbar.style.marginTop = '0';
        }
        else{
            navbar.style.backgroundColor = 'transparent';
            navbar.style.paddingTop = '10px';
        }
    })
});