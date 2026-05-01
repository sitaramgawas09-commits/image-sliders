const slide = document.querySelectorAll(".slides")
let slideindex = 0;

document.addEventListener("DOMContentLoaded",loaded)
function loaded(){
    slide[slideindex].classList.add("displayslide")
}
function show(index){
if(index >= slide.length){
    slideindex=0;
}

else if(index < 0){
   slideindex = slide.length-1
}
 slide.forEach(element =>{
    element.classList.remove("displayslide") 
 })
   slide[slideindex].classList.add("displayslide") 
}

function prevSlide(){
  slideindex--;
  show(slideindex)
}

function nextSlide(){
  slideindex++;
  show(slideindex)
}


let slide1 = document.getElementById("slide1");
let x=0;
let y=0;

document.addEventListener("keydown",event =>{
    console.log(event.key)

  
        if(event.key ==="ArrowUp"){
            y-=20;
        }
        else if(event.key === "ArrowDown"){
            y+=20
        }
        else if(event.key === "ArrowLeft"){
            x-=20
        }
         else if(event.key === "ArrowRight"){
            x+=20
        }
        slide1.style.top = `${y}px`
        slide1.style.left = `${x}px`

})



