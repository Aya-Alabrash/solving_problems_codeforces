var count = 0;
for (var i = 1; i < 6; i++) {
  var matrix = readline().split(" ");
  for (var j = 0; j < 5; j++) {
    if (matrix[j] == 1) {

      print(Math.abs(3 - i) + Math.abs(3 - (j + 1)));
      count = 1;
    }
    if (count == 1)
      break;
  }

}