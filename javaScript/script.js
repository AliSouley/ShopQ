const menuB = document.querySelector(".menu-b");
const ListNavig = document.querySelector(".list-navig");

document.querySelector('.menu-b').onclick = ()=>{
        ListNavig.classList.toggle('active');
    }


// AdPop

const adPop = document.querySelector(".adpop");
const adpopClose = document.querySelector(".adpop-close");

if (adPop) {
    adpopClose.addEventListener("click", () => {
    adPop.classList.add("hide-adpop");
    });
  
    window.addEventListener("load", () => {
      setTimeout(() => {
        adPop.classList.remove("hide-adpop");
      }, 7000);
    });
  }
  