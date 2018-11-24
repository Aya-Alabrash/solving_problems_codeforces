var string = readline();
var flag = false;

for (var i = 0; i < string.length; i++) {
  var count = 0;
  var temp = i;
  for (; i < string.length && string[i] == string[temp]; count++, i++);
  i--;
  if (count >= 7) flag = true;
}
if (flag == true) print("YES");
else print("NO");
