module.exports = n =>
  [
    s => (s % 10) === 0,
    n => n.reduce((a, c) => +a + +c, 0),
    n =>
      n.map((c, i) =>
        (i + 1) % 2 == 0
          ? 
        (n => (n > 9 ? (a => +a[0] + +a[1])(n.toString().split('')) : n))(c * 2)
          : 
         c
      ),
    n => n.split('').reverse(),
    n =>
      typeof n === "string"
        ? (() => n)()
        : (() => {
            throw Error("Expects type String");
          })(),
  ].reduceRight((g, f) => f(g), n);