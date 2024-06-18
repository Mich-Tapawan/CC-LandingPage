document.addEventListener('DOMContentLoaded', ()=>{

    // Navbar - Scrolling Effect
    var header = document.querySelector('header');
    var navLogo = document.querySelector('#nav-logo');
    var screenWidth = window.innerWidth;

    window.addEventListener('scroll', ()=>{
        if(window.scrollY > 0){
            header.style.backgroundColor = '#fff';
            header.style.boxShadow = '0px 0.5px 8px 1px #858585';
            header.style.paddingBottom = '10px';
            navLogo.style.paddingBottom = '5px';
        }
        else{
            header.style.backgroundColor = 'transparent';
            header.style.paddingTop = '10px';
            header.style.boxShadow = '0px 1px 2px 1px transparent';
            header.style.paddingBottom = '0px';
            navLogo.style.paddingBottom = '0px';
        }
    });

    // Navbar - main logo and home links top scrolling
    var logo = document.querySelectorAll('.top');

    logo.forEach(link =>{
        link.addEventListener('click',()=>{
            window.scrollTo(0,0);
        });
    });

    // Navbar - Burger icon display switching for mobile
    var burger = document.querySelector('#burger');
    var navLinks = document.querySelector('#nav-links');
    var navShown = false

    burger.addEventListener('click', ()=>{
        if (navShown === false){
            navLinks.style.display = 'flex';
            navShown = true;
        }
        else{
            navLinks.style.display = 'none';
            navShown = false;
        }
    });

    function foodSwap(){
        if(screenWidth <= 840){
            if (currentActive == 1){
                matcha.style.display = 'block';
                pie.style.display = 'none';
                donut.style.display = 'none';
                currentActive++;
            }

            else if (currentActive == 2){
                pie.style.display = 'block';
                matcha.style.display = 'none';
                donut.style.display = 'none'
                currentActive++;
            }
            else if (currentActive == 3){
                donut.style.display = 'block'
                matcha.style.display = 'none';
                pie.style.display = 'none';
                currentActive = 1;
            }
        }
    }
    
    let currentActive = 2;
    let matcha = document.querySelector('#matcha');
    let pie = document.querySelector('#pie');
    let donut = document.querySelector('#donut');
    let intervalID;
    
    intervalID = setInterval(()=>{
        foodSwap();
    }, 3000);
    
    if(screenWidth > 840){
        clearInterval(intervalID);
        matcha.style.display = 'block';
        pie.style.display = 'block';
        donut.style.display = 'block';
    }
    
    window.addEventListener('resize', ()=>{
        // Appropriate displaying and hiding of navbar during screen width resizing
        var screenWidth = window.innerWidth;
    
        if (screenWidth > 1095){
            navLinks.style.display = 'flex';
            navShown = false;
        }
        else{
            navLinks.style.display = 'none';
            navShown = false;
        }
        clearInterval(intervalID);
        if(screenWidth > 840){
            clearInterval(intervalID);
            matcha.style.display = 'block';
            pie.style.display = 'block';
            donut.style.display = 'block';
        }
        else{
            intervalID = setInterval(()=>{
                foodSwap();
            }, 3000);
            matcha.style.display = 'none';
            pie.style.display = 'block';
            donut.style.display = 'none';
        }
    });
});