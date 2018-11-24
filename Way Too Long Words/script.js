var count = readline();

for (var i = 0; i < count; i++) {
  var word = readline();
  if (word.length <= 10) {
    print(word);
  } else {
    print(word[0] + (word.length - 2) + word[word.length - 1]);
  }
}
