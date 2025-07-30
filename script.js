

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    } else {
      entry.target.classList.remove('in-view');
    }
  });
}, { threshold: 0.5 }); // 0.5 = 50% visible


document.querySelectorAll('div','img','li').forEach(box => {
  observer.observe(box);
});



const ddbtn = document.querySelector(".dropdownbtn");
const ddmenu = document.querySelector(".dropdownMenu")
const main = document.querySelector(".main")
const footer = document.querySelector(".side-content")

ddbtn.addEventListener('click',() =>{
  ddfunction()
})

function ddfunction(){
  ddmenu.classList.toggle("visible")
  main.classList.toggle('opacity')
  footer.classList.toggle('opacity')
}

// click outside to close
document.addEventListener("click", e => {
  // only run if menu is open and click was outside both button + menu
  if (
    ddmenu.classList.contains("visible") &&
    !ddbtn.contains(e.target) &&
    !ddmenu.contains(e.target)
  ) {
    ddfunction();
  }
});

window.addEventListener("scroll", () => {
  if (!ddmenu.classList.contains("visible")) return;

  const rect = ddmenu.getBoundingClientRect();
  const elementHeight = rect.height;

  // calculate how much of the element is still visible
  const visibleTop    = Math.max(rect.top, 0);
  const visibleBottom = Math.min(rect.bottom, window.innerHeight);
  const visibleHeight = Math.max(0, visibleBottom - visibleTop);

  // if less than half its height is visible, close it
  if (visibleHeight < elementHeight / 2) {
    ddfunction();
  }
});