export function randomString() {
  let charSet =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var randomString = '';
  for (var i = 0; i < 4; i++) {
    var randomPoz = Math.floor(Math.random() * charSet.length) + 1;
    randomString += charSet.substring(randomPoz, randomPoz + 1);
  }
  return randomString;
}
