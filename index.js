const add = document.querySelector('#add');
const remove = document.querySelector('#remove');
const stats = document.querySelector('h6')
let click = 0

function addFrnd() {
  stats.innerHTML = 'FRIEND REQUEST SENT';
  add.innerHTML = 'REQUESTED';
  stats.style.color = "green"
}

add.addEventListener('click', addFrnd);

function removeFrnd() {
  stats.innerHTML = 'NO MUTUAL FRIENDS';
  stats.style.color = "red"
  add.innerHTML = "ADD FRIEND"
}

remove.addEventListener('click', removeFrnd);
