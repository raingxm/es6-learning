function log(strategy) {
  strategy.handle();
}

log(new class {
  handle() {
    alert('using the alert strategy to handle log');
  }
});
