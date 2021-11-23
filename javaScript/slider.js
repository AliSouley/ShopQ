let sliderOne = document.querySelector("#glider1");
if(sliderOne){
    new Glide(sliderOne, {
    type: "carousel",
    startAt: 0,
    autoplay: 3000,
    gap: 0,
    hoverpause: true,
    perView: 1,
    animationDuration: 800,
    animationTimingFunc: "linear",
    }).mount();
}