const text = document.querySelector('#text');
const count = document.querySelector('#count');

text.addEventListener('keyup',() => {
  count.textContent = text.value.length
  if (count.textContent > 10) {
    count.classList.add('alert')
  } else {
    count.classList.remove('alert')
  }
})