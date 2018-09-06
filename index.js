var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens
}
function destructivelyRemoveLastKitten() {
  kittens.pop(name);
  return kittens
}
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens
}
function appendKitten(name){
  [...kittens, array];
  return kitten
}
function prepenedKitten(name) {
  [array, ...kittens];
  return array
}
function removeFirstKitten() {
 kittens = kittens.slice(1);
 return kittens
}
function removeLastKitten() {
  kittens.slice(-3)
}
