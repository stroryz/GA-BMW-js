document.addEventListener('DOMContentLoaded', () => {

  const featureLinkElems = document.querySelectorAll('.feature__link');
  const featureSubElems = document.querySelectorAll('.feature-sub');

  // for (let i = 0; i < featureLinkElems.length; i++) {
  //   featureLinkElems[i].addEventListener('click', () => {
  //     featureSubElems[i].classList.toggle('hidden');
  //     featureLinkElems[i].classList.toggle('feature__link_active');
  //   })
  // }

  featureLinkElems.forEach((elem, index) => {
    elem.addEventListener('click', () => {
      if(elem.classList.contains('feature__link_active')) {
        elem.classList.remove('feature__link_active');
        featureSubElems[index].classList.add('hidden');
      } else {
        featureSubElems.forEach(el => {
        el.classList.add('hidden');
        })
        featureLinkElems.forEach(el => {
          el.classList.remove('feature__link_active')
        })
        featureSubElems[index].classList.remove('hidden');
        elem.classList.add('feature__link_active');
      }
      
    })
  })

})