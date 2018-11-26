var line = readline().split(' ').map(Number);
var d1 = line[0];
var d2 = line[1];
var d3 = line[2];

print(Math.min(d1, d2 + d3) + Math.min(d3, d1 + d2) + Math.min(d2, d1 + d3));