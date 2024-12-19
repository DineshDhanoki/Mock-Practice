var x = 1;
function outer() {
  console.log(x);
  function inner() {
    console.log(x);
  }
  inner();
  var x = 2;
}
outer();
