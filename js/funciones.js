function principal()
{
    let img = document.getElementsByClassName('contenidoSlider')
    let size = img.length
    let sizeScreen = window.innerWidth
    
    b='f'
    //console.log(size)
    let contador = 0
    let contenido = new Array()
    for(i=0;i<size;i++)
    {
        //copying each elements
        contenido[i] = img[i]
    }


    setInterval(() => {
        let sizeScreen = window.innerWidth
        mover()
        // /console.log(sizeScreen)
        
    }, 4000); 

let mover = function()
{
    if(contador==0)
        {
            contenido[contador].style.animation = 'showImg 3s alternate forwards'
            contenido[size-1].style.animation = 'hiddenImg 3s alternate forwards'
        }else if(contador>0)
        {
            contenido[contador].style.animation = 'showImg 3s alternate forwards'
            contenido[contador-1].style.animation = 'hiddenImg 3s alternate forwards'
            if(contador>4)
            {
                alert('elpepe')
                contenido[5].style.opacity = 0;
            }
        }
        let slider = document.getElementsByClassName('slider') 
        slider[0].style.backgroundImage = 'none'
        //console.log(contador)
    if(contador==4)
    {
        contenido[contador].style.animation = 'showImg 4s alternate forwards'
        contador=-1
        contenido[size-1].style.animation = 'hiddeImg 4s alternate forwards'
        b='v'
    }
    contador++ 
}


    const caja1 = document.getElementsByClassName('caja1')
    const caja2 = document.getElementsByClassName('caja2')

    if(sizeScreen>810)
    {
        caja1[0].addEventListener('mouseover', () => {
            caja1[0].style.animation = 'encimaDe1 1s forwards'
            caja2[0].style.animation = 'detrasDe1 1s forwards'
        })
    
        caja2[0].addEventListener('mouseover', () => {
            caja2[0].style.animation = 'encimaDe2 1s forwards'
            caja2[0].style.animationIteration = '1'
    
            caja1[0].style.animationIteration = '1'
            caja1[0].style.animation = 'detrasDe2 1s forwards'
        })}
    }


//funciones del menu
let btn = document.getElementById('btn')
let btnClose = document.getElementById('btnClose')
let lines = document.getElementsByClassName('line')
let nav = document.getElementById('menu')
let b = 0

btn.onclick = function(){abrir()}
btnClose.onclick = function(){cerrar()};




let facee = document.getElementsByClassName("fa");
let instaa = document.getElementsByClassName("ii");
let pinteres = document.getElementsByClassName("pp");

let btnNav = document.getElementsByClassName('navCon')
btnNav[0].onclick = function ()
{
    alert('jo')
}


btnNav[0].onclick = function(){cerrar()}
btnNav[1].onclick = function(){cerrar()}
btnNav[2].onclick = function(){cerrar()}

facee[0].onclick = function () {
    window.open("https://www.facebook.com/profile.php?id=100010141906901");
  };
  instaa[0].onclick = function () {
    window.open("https://www.instagram.com/randycc24/");
  };
  pinteres[0].onclick = function () {
    window.open(
        "https://co.pinterest.com/randycc24/pins/?fbclid=IwAR3Ymi_XQkx7NIrZaiNs1hqrOTOGgQP-xl5K6NjQvHfl9MmdsP8WFNweUkI"
      );
  };
function abrir()
{
    btn.style.animation = 'openMenu 300ms linear forwards'
    btn.style.position = 'fixed'
    btnClose.style.position = 'fixed'
            lines[0].style.transform = 'rotate(45deg)'
            lines[0].style.position = 'absolute'
            lines[2].style.position = 'absolute'
            lines[2].style.transform = 'rotate(-45deg)'
            lines[1].style.display = 'none'
            btnClose.style.display = 'block'
        nav.style.animation = 'showNav 300ms alternate forwards' 
}

function cerrar()
{
    btn.style.animation = 'closeMenu 300ms linear forwards'
    nav.style.animation = 'hiddeNav 1s alternate forwards' 
    lines[0].style.transform = 'rotate(0deg)'
    lines[0].style.position = 'relative'
    btn.style.position = 'absolute'
    lines[2].style.position = 'relative'
    lines[2].style.transform = 'rotate(0deg)'
    lines[1].style.display = 'block'
    btnClose.style.display = 'none'
}
 
let pantalla = window.innerWidth;
//clipBtn
//pantalla 780
window.onscroll = function() {
    let clipBtn = document.getElementById('clip_btn')
    let boxClip = document.getElementsByClassName('iconStar')

    let y = window.scrollY;
    //console.log(y);
    if(pantalla > 1000 && y>1250)
    {
        boxClip[0].style.animation = 'giro 1s backwards'
        clipBtn.style.animation = 'shine 3s backwards'
    }
    if(pantalla < 780 && y>1900)
    {
        boxClip[0].style.animation = 'giro 1s backwards'
        clipBtn.style.animation = 'shine 3s backwards'
    }
  };

