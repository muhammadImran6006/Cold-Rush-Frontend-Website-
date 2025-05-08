
const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});








const track = document.getElementById('sliderTrack');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('dotsContainer');
let currentIndex = 0;

function updateSlider(index) {
  track.style.transform = `translateX(-${index * 100}%)`;
  document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function goToSlide(index) {
  currentIndex = (index + slides.length) % slides.length;
  updateSlider(currentIndex);
}

nextBtn.onclick = () => goToSlide(currentIndex + 1);
prevBtn.onclick = () => goToSlide(currentIndex - 1);

slides.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.className = 'dot';
  dot.onclick = () => goToSlide(i);
  dotsContainer.appendChild(dot);
});

updateSlider(currentIndex);
setInterval(() => goToSlide(currentIndex + 1), 5000);