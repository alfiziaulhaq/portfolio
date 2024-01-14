const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
let indent1 =document.querySelector('.indent-wedo');
let indent2 =document.querySelector('.indent-prod');
let wedo = document.querySelector('#wedo');
let subwedo= document.querySelector('.sub-wedo')
let prod = document.querySelector('#prod');
let subproducts= document.querySelector('.sub-products')

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
	subproducts.classList.remove('open');
	subwedo.classList.remove('open');
	indent1.classList.remove('open');
	indent2.classList.remove('open');
	///$(".navlist i").toggleClass("rotate");
};
wedo.onclick = () => {
	wedo.classList.toggle('bx-x');
	subproducts.classList.remove('open');
	subwedo.classList.toggle('open');
	indent1.classList.toggle('open');
	indent2.classList.remove('open');
	///$(".navlist i").toggleClass("rotate");
};
prod.onclick = () => {
	prod.classList.toggle('bx-x');
	subwedo.classList.remove('open');
	subproducts.classList.toggle('open');
	indent2.classList.toggle('open');
	indent1.classList.remove('open');
	
};
window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
	subproducts.classList.remove('open');
	subwedo.classList.remove('open');
	indent1.classList.remove('open');
	indent2.classList.remove('open');
	
};
const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 5000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 5000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}
