// const smoothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');

// Скролл через behavior (еще слабая поддержка браузерами)
// smoothScrollElems.forEach(link => {
//   link.addEventListener('click', (event) => {
//     event.preventDefault();

//     const id = link.getAttribute('href').substring(1);
//     document.getElementById(id).scrollIntoView({
//       behavior: 'smooth',
//     });
//   })
// })

const SPEED = 0.3;

const scroll = (event) => {
  event.preventDefault();

  const target = event.target;
  if(target.matches('[href^="#"]')) {
    const pageY = window.pageYOffset;
    // const hash = target.href.replace(/[^#]*(.*)/, '$1');
    const hash = target.getAttribute('href');
    if (hash === "#") return;
    const elem = document.querySelector(hash);
    const elemCoordinata = elem.getBoundingClientRect().top;

    
    
    let start = 0;
    const step = time => {
      if (!start) {
        start = time;
      }
      const progress = time - start;

      const r = (elemCoordinata < 0 ? 
          Math.max(pageY - progress / SPEED, pageY + elemCoordinata) : 
          Math.min(pageY + progress / SPEED, pageY + elemCoordinata));
      
      window.scrollTo(0, r);

      if (r < pageY + elemCoordinata) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);


  }

}

document.body.addEventListener('click', scroll);