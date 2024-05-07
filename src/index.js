document.addEventListener('DOMContentLoaded', ()=>{

    // Navbar - Scrolling Effect
    var navbar = document.getElementById('fixed-nav');

    window.addEventListener('scroll', ()=>{
        if(window.scrollY > 0){
            navbar.style.backgroundColor = '#fff';
            navbar.style.boxShadow = '0px 0.5px 8px 1px #858585';
        }
        else{
            navbar.style.backgroundColor = 'transparent';
            navbar.style.paddingTop = '10px';
            navbar.style.boxShadow = '0px 1px 2px 1px transparent';
        }
    });

    // Navbar - main logo and home links top scrolling
    var logo = document.querySelectorAll('.top');

    logo.forEach(link =>{
        link.addEventListener('click',()=>{
            window.scrollTo(0,0);
        });
    });

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