function outer() {
  function inner() {
    console.log(x);
  }
  var x = 5;
  return inner;
}
const inner = outer();
inner();
