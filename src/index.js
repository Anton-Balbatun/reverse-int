module.exports = function reverse (n) {
    if(n<0) {
    n= String(n).slice(1)
}
n=String(n)
  return n.split('').reverse().join('')
}
