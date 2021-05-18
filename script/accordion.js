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
      // featureSubElems.forEach(el => {
      //   el.classList.add('hidden');
      // })
      // featureLinkElems.forEach(el => {
      //   el.classList.remove('feature__link_active')
      // })

      if (featureSubElems[index].classList.contains('hidden')) {
        featureSubElems[index].classList.remove('hidden');
      } else {
        featureSubElems[index].classList.add('hidden');
      }
      
      if (!elem.classList.contains('feature__link_active')) {
        elem.classList.add('feature__link_active');
      } else {
        elem.classList.remove('feature__link_active');
      }
      
    })
  })

})