// variables and const declaration

const search = document.getElementById('search');
const cart = document.getElementById('cart');
const signUp = document.getElementById('sign-up');
const signIn = document.getElementById('sign-in');
const closeButton = document.querySelectorAll('.popup__close');
const featuredSort = document.getElementById('featured-sort');
const featuredMenu = document.getElementById('featured__menu');
const featuredMenuItem = document.querySelectorAll('.featured__menu-item');
const buttonPrevious = document.getElementById('button_previous');
const buttonNext = document.getElementById('button_next');
const heroImages = document.querySelector('.hero__image').children;

// function declaration

function openSearch () {
  const popupSearch = document.getElementById('popupSearch');
  popupSearch.classList.remove('hidden');
}

function openCart () {
  const popupSearch = document.getElementById('popupCart');
  popupSearch.classList.remove('hidden');
}

function openSignUp () {
  const popupSearch = document.getElementById('popupSignUp');
  popupSearch.classList.remove('hidden');
}

function openSignIn () {
  const popupSearch = document.getElementById('popupSignIn');
  popupSearch.classList.remove('hidden');
}

function closePopup (pointerEvent) {
  const parent = pointerEvent.path[1];
  parent.classList.add('hidden');
}

function openMenu () {
  featuredMenu.classList.toggle('featured__menu_open');
}

function chooseMenuItem (event) {
  featuredSort.firstElementChild.innerText = event.target.innerText;
  featuredMenu.classList.remove('featured__menu_open');
}

function showPrevious () {
  let next;
  for (let i = 0; i<heroImages.length; i++) {
    if (heroImages[i].classList == '') {
      i == 0 ? next = (heroImages.length - 1) : next = i - 1;
      heroImages[i].classList.add('hero-img_hidden');
      heroImages[next].classList.remove('hero-img_hidden');
      break;
    }
  }
}

function showNext () {
  let next;
  for (let i = 0; i<heroImages.length; i++) {
    if (heroImages[i].classList == '') {
      i == (heroImages.length - 1) ? next = 0 : next = i + 1;
      heroImages[i].classList.add('hero-img_hidden');
      heroImages[next].classList.remove('hero-img_hidden');
      break;
    }
  }
}

// action

search.addEventListener('click', openSearch);
cart.addEventListener('click', openCart);
signUp.addEventListener('click', openSignUp);
signIn.addEventListener('click', openSignIn);
for (let each of closeButton) {
  each.addEventListener('click', closePopup);  
}
featuredSort.addEventListener('click', openMenu);
for (let each of featuredMenuItem) {
  each.addEventListener('click', chooseMenuItem);
}
buttonPrevious.addEventListener('click', showPrevious);
buttonNext.addEventListener('click', showNext);