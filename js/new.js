let menu = document.querySelector('#menu-btn');
let nav = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-minus');
    // menu.classList.toggle('fa-times');
    nav.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-minus');
    // menu.classList.remove('fa-times');
    nav.classList.remove('active');
  
    if(window.scrollY > 60){
      document.querySelector('#scroll-top').classList.add('active');
    }else{
      document.querySelector('#scroll-top').classList.remove('active');
    }
  
  }

  

