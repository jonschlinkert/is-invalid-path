const fs = require('fs');
const path = require('path');

const chars = [ ' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?', '@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[', '\\', ']', '^', '_', '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '{', '|', '}', '~' ];

const dest = path.join.bind(path, 'test-files');
const arr = [];

for (const ch of chars) {
  try {
    // fs.mkdirSync(dest(`abc-${ch}-def`));
    fs.writeFileSync(dest(`abc-${ch}-def`), 'test');
  } catch (err) {
    console.log(err.message);
    arr.push(ch);
  }
}

console.log(arr);
