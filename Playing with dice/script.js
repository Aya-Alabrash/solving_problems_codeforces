var data = readline().split(" ");
var a = data[0];
var b = data[1];
var n = 6;
var firstWin = 0,
  secondWin = 0,
  draw = 0;
for (var i = 1; i <= n; i++) {
  if (Math.abs(a - i) == Math.abs(b - i)) {
    draw++;
  } else if (Math.abs(a - i) < Math.abs(b - i)) {
    firstWin++;
  } else if (Math.abs(a - i) > Math.abs(b - i)) {
    secondWin++;
  }
}
print(firstWin + " " + draw + " " + secondWin);
