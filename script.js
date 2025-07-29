const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    } else {
      entry.target.classList.remove('in-view');
    }
  });
}, { threshold: 0.5 }); // 0.5 = 50% visible


document.querySelectorAll('div','img').forEach(box => {
  observer.observe(box);
});