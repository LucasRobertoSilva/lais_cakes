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

  track.style.transform = `translateX(-${index * (slideWidth + gap)}px)`;

  if (index <= 0) {
    leftBtn.classList.add("hidden");
    leftBtnImg.classList.add('hidden');
  } else {
    leftBtn.classList.remove("hidden");
    leftBtnImg.classList.remove('hidden');
  }

  if (index >= slideElements.length - visible_elements) {
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

loadSlide();
