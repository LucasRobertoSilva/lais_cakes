const track = document.querySelector(".track");
const slideElements = document.querySelectorAll(".item");
const leftBtn = document.querySelector(".left-button");
const leftBtnImg = document.querySelector(".left-button-img");
const rightBtn = document.querySelector(".right-button");
const rightBtnImg = document.querySelector(".right-button-img")

let index = 0;

function loadSlide() {
  const slideWidth = slideElements[0].offsetWidth;

  const track_style = getComputedStyle(track);
  const gap = parseFloat(track_style.gap);
  const visible_elements = parseInt(track_style.getPropertyValue("--visible_elements"));  
  
  track.style.transform = `translateX(-${index * (slideWidth + gap - 1)}px)`;

  if (index <= 0) {
    leftBtn.classList.add("hidden");
    leftBtnImg.classList.add('hidden');
  } else {
    leftBtn.classList.remove("hidden");
    leftBtnImg.classList.remove('hidden');
  }
  
  if (index >= slideElements.length - visible_elements - 1) {
    rightBtn.classList.add("hidden");
    rightBtnImg.classList.add("hidden")
  } else {
    rightBtn.classList.remove("hidden");
    rightBtnImg.classList.remove("hidden");
  }

  console.log(slideElements[0].style.width);
}

leftBtn.addEventListener("click", () => {
  index--;
  loadSlide();
});

rightBtn.addEventListener("click", () => {
  index++;
  loadSlide();
});


  
const itens = document.querySelectorAll(".item");

itens.forEach(item => {item.addEventListener("click", function() {
  const imgConteiner = this.children[0];
  const priceconteiner = imgConteiner.children[1];
  priceconteiner.classList.toggle("priceConteinerVisible");
  const nameConsteiner = this.children[1]
  const nameProduct = nameConsteiner.children[0]
  nameProduct.classList.toggle("productNameVisible");

})})

// const imgConteiner = elemento.children[0];
// priceconteiner = imgConteiner.children[1];

// 

loadSlide();
