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
  [...array, kittens];
  return kitten
}
function prepenedKitten(name) {
  [kittens, ...array];
  return array
}
function removeLastKitten() {
  kittens.slice(0, kittens.length - 3);
  return array
}
