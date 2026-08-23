Continue Statement
Example
for (let i = 1; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}


JavaScript Labels
Syntax
A label is an identifier followed by a colon (:).
labelname: statement;

labelname: {
  statements
}

Continue to Labelname
Syntax
continue labelname;
Example
Continue to loop1:
let text = "";
loop1: for (let j = 1; j < 5; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) { continue loop1; }
    text += i;
   }
}

Example
Continue to loop2:
let text = "";
loop1: for (let j = 1; j < 5; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) { continue loop2; }
    text += i;
   }
}
