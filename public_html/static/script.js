function navbar() {
  var header = document.getElementById('header')
  if (window.innerWidth >= 992) {
    header.innerHTML = '<div class="container">' +
      '<header class="py-3 d-flex justify-content-between align-items-center">' +
      '<a class="cormorant-reg text-white text-decoration-none h4 m-0" href="/">Che Leotards</a>' +
      '<ul class="nav nav-pills">' +
      '<li class="nav-item"><a href="/gallery/init" class="nav-link">Галерея</a></li>' +
      '<li class="nav-item"><a href="/conditions" class="nav-link">Дистанционное сотрудничество</a></li>' +
      '<li class="nav-item"><a href="/contact" class="nav-link">Контакты</a></li>' +
      '<li class="nav-item"><a href="/sale" class="nav-link">Костюмы в продаже</a></li>' +
      '</ul>' +
      '</header>' +
      '</div>'
  } else {
    header.innerHTML = '<div class="container">' +
      '<header class="py-3 d-flex justify-content-between align-items-center">' +
      '<a class="cormorant text-black text-decoration-none" href="/">Che Leotards</a>' +
      '<button class="navbar-btn" data-bs-toggle="collapse" data-bs-target="#navbar"></button>' +
      '</header>' +
      '</div>' +
      '<div class="collapse container" id="navbar">' +
      '<ul class="list-unstyled">' +
      '<li class="mb-3"><a class="text-black text-decoration-none" href="/gallery/init"><small>Галерея</small></a></li>' +
      '<li class="mb-3"><a class="text-black text-decoration-none" href="/conditions"><small>Дистанционное сотрудничсетво</small></a></li>' +
      '<li class="mb-3"><a class="text-black text-decoration-none" href="/contact"><small>Контакты</small></a></li>' +
      '<li class="mb-3"><a class="text-black text-decoration-none" href="/sale"><small>Костюмы в продаже</small></a></li>' +
      '</ul>' +
      '</div>'
  }
}
/*
const fullHeight = () => {
  const el = document.getElementById('bg-img')
  const el_ = document.getElementById('full-nfooter') 
  el.style.height = `${window.innerHeight}px`
}
*/
window.addEventListener('resize', function(event){
  navbar(1)
});

navbar()
//fullHeight()