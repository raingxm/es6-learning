function *range(start, end) {
  while(start <= end) {
    yield start;
    start++;
  }
}

let iterator = range(1, 5);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
