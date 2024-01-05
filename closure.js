function createEl() {
  let count = 0;
  console.log(count, "main");
  function increm() {
      console.log(count, "first");
      console.log(count++, "plus");
      console.log(count, "sec");
      // count++;
      // return count++;
  }
  console.log(count, "after");
  // let msg = `count is ${count}`;
  function log() {
      let msg = `count is ${count}`;
      console.log(msg);
  }
  return [increm, log];
}
let [increm, log] = createEl();
// console.log(increm(), "i-1");
// console.log(increm(), "i-2");
// console.log(increm(), "i-3");
increm();
increm();
increm();
log();