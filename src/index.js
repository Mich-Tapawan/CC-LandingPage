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

    // Review Section - card toggling
    const reviews =[[{name:'Abel Lazaro', position:'LA Food Critic', main:'Exceptional food and service!', statement:''},
                     {name:'James Garcia', position:'Michelin Star Chef', main:'Right amount of sweetness.', statement:''},
                     {name:'David Jonas', position:'GMA Media Star', main:'Excellent and worth it!', statement:''}],
                    [{name:'', position:'', main:'', statement:''},
                     {name:'', position:'', main:'', statement:''},
                     {name:'', position:'', main:'', statement:''}],
                    [{name:'', position:'', main:'', statement:''}, 
                     {name:'', position:'', main:'', statement:''},
                     {name:'', position:'', main:'', statement:''}]]

    const toggleBtn = document.getElementsByClassName('card-btns');

    toggleBtn.forEach(button =>{
        button.addEventListener('click', ()=>{
            if(button.id == 'left-btn'){
                pass
            }
            else if (button.id == 'right-btn'){
                pass
            }
        })
    })
});