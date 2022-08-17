function* gener() {
  yield "a";
  yield "b";
  yield "c";
  yield "d";
}
const alph = gener();
console.log(alph.next());
console.log(alph.next());
console.log(alph.next());
console.log(alph.next());
console.log(alph.next());
