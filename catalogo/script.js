class Slider {
  constructor(wrapper) {
    this.wrapper = wrapper;
    this.index = 0;

    this.leftButton = this.wrapper.querySelector(".left-button");
    this.leftButtonImg = this.leftButton.querySelector(".left-button-img");

    this.rightButton = this.wrapper.querySelector(".right-button");
    this.rightButtonImg = this.rightButton.querySelector(".right-button-img");

    this.slideShow = this.wrapper.querySelector(".slideshow");

    this.track = this.slideShow.querySelector(".track");
    this.track_style = getComputedStyle(this.track);

    this.slideElements = this.slideShow.querySelectorAll(".item");
    this.slideWidth = this.slideElements[0].offsetWidth;    

    this.visible_elements = parseInt(
      this.track_style.getPropertyValue("--visible_elements"),
    );
    this.gap = parseFloat(this.track_style.gap);

    this.addEvents();
    this.loadSlide();
  }
  prev() {
    this.index--;
    this.loadSlide();
  }
  next() {
    this.index++;
    this.loadSlide();
  }
  loadSlide() {
    if (this.index <= 0) {
      this.leftButton.classList.add("hidden");
      this.leftButtonImg.classList.add("hidden");
    } else {
      this.leftButton.classList.remove("hidden");
      this.leftButtonImg.classList.remove("hidden");
    }

    if(this.index >= this.slideElements.length - this.visible_elements){
        this.rightButton.classList.add("hidden");
        this.rightButtonImg.classList.add("hidden");
    }else{
        this.rightButton.classList.remove("hidden");
        this.rightButtonImg.classList.remove("hidden");
    }

    this.track.style.transform = `translateX(-${this.index * (this.slideWidth + this.gap)}px)`

    if(this.visible_elements < 3){
        document.getElementById("bolosCaseiros_Scroll").classList.add("hidden")
        document.getElementById("bolosCaseirosLink").setAttribute('href', '#bolosCaseiros_Slide')
    }
    else{
        document.getElementById("bolosCaseiros_Slide").classList.add("hidden")
    }
  }
  addEvents() {
    this.leftButton.addEventListener("click", () => this.prev());
    this.rightButton.addEventListener("click", () => this.next());
  }
}

const sliders = document.querySelectorAll(".wrapper");
console.log(sliders);

sliders.forEach((slider) => {
  new Slider(slider);
});
