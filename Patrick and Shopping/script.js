var line = readline().split(' ').map(Number);

var d1 = line[0];
var d2 = line[1];
var d3 = line[2];

var temp1 = 0;
var temp2 = 0;

for (i = 0; i < 3; i++) {
  if (d1 > d2) {
    temp1 = d1;
    temp2 = d2;
    d1 = temp2;
    d2 = temp1;
  }

  if (d2 > d3) {
    temp1 = d2;
    temp2 = d3;
    d2 = temp2;
    d3 = temp1;
  }
}

if (d1 + d2 === d3) {
  print(d3 * 2);
}

if (d1 + d2 > d3) {
  print(d1 + d2 + d3);
}

if (d1 + d2 < d3) {
  print(2 * (d1 + d2));
}