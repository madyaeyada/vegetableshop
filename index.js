let fullshopping = document.querySelector(".shopping");
document.querySelector("#shopping").onclick = () => {
  fullshopping.classList.toggle('active');
  formsec.classList.remove("active");
  navbar.classList.remove("active");
};
let formsec= document.querySelector(".login-form");
document.querySelector("#user").onclick = () => {
  formsec.classList.toggle("active");
  fullshopping.classList.remove("active");
  navbar.classList.remove("active");
};
let navbar=document.querySelector(".nav");
document.querySelector("#menu-btn").onclick=()=>{
 navbar.classList.toggle("active");
 formsec.classList.remove("active");
fullshopping.classList.remove("active");
};
window.onscroll = () =>{
  fullshopping.classList.remove('active');
  formsec.classList.remove("active");
  navbar.classList.remove("active");
}
let slides = document.querySelectorAll('.home .slider-container .slider');
let index=0;
function next(){
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}
function prev(){
  slides[index].classList.remove("active")
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");

}


