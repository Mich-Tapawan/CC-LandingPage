document.addEventListener('DOMContentLoaded', ()=>{

    // Navbar - Scrolling Effect
    var header = document.querySelector('header');
    var navLogo = document.querySelector('#nav-logo');

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
        })

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
        });
        // Food Item - Food image swapping
        if(screenWidth <= 400){
            let imageSrc = ['src/images/matcha.png', 'src/images/pie.png', 'src/images/donut.png'];
            let imageHolder = document.getElementById('pie');
            let counter = 2;
                
            let intervalID = setInterval(()=>{
                imageHolder.src = imageSrc[counter];
                if (counter == (imageSrc.length - 1)){
                    counter = 0;
                }
                else{
                    counter++
                }
            }, 3000);
            }
        else{
            imageHolder.src = imageSrc[1];
            counter = 2;
        }
});