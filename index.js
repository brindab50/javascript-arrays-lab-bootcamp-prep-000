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
  [...kittens, name];

}
function prepenedKitten(name) {
  [name, ...kittens];
  
}
function removeFirstKitten() {
 kittens = kittens.slice(1);
 return array
}
function removeLastKitten() {
  kittens.slice(-3)
}
