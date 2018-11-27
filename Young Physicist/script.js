var n = readline();
var vector = [];
var sumX = 0,
  sumY = 0,
  sumZ = 0;

for (i = 0; i < n; i++) {
  vector.push(readline().split(" "));
  sumX += +vector[i][0];
  sumY += +vector[i][1];
  sumZ += +vector[i][2];
}

if (sumX === 0 && sumY === 0 && sumZ === 0) {
  print("YES");
} else {
  print("NO");
}
