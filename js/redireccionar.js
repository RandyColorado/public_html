function redireccionar()
{
    let btn = document.getElementsByClassName('contenidoMenu')
    let face = document.getElementById("f");
    let wh = document.getElementById("w");
    let ig = document.getElementById("ig");
    let pinteres = document.getElementById("p");
    let galeria = document.getElementById('galeryy')
    galeria.onclick = function(){
      window.location.replace('https://drawrandy.000webhostapp.com/galeria/galeriaUsuarios.php');
    }
    
    const caja1 = document.getElementsByClassName('caja1')
    const caja2 = document.getElementsByClassName('caja2')


    btn[2].onclick = function()
    {
        caja1[0].style.animation = 'encimaDe1 1s forwards'
        caja2[0].style.animation = 'detrasDe1 1s forwards'
    }

    btn[1].onclick = function()
    {
        caja2[0].style.animation = 'encimaDe2 1s forwards'
        caja1[0].style.animation = 'detrasDe2 1s forwards'
    }
  
    face.onclick = function () {
      window.open("https://www.facebook.com/profile.php?id=100010141906901");
    };
    pinteres.onclick = function () {
      window.open(
        "https://co.pinterest.com/randycc24/pins/?fbclid=IwAR3Ymi_XQkx7NIrZaiNs1hqrOTOGgQP-xl5K6NjQvHfl9MmdsP8WFNweUkI"
      );
    };
    ig.onclick = function () {
      window.open("https://www.instagram.com/randycc24/");
    };
    wh.onclick = function () {
      window.open(
        "https://api.whatsapp.com/send?phone=+573218943793&text=Hola, Nececito mas informacion!"
      );
    };
  
}