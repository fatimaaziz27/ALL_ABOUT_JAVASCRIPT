// Basic String Methods

// String length
// String charAt()
// String charCodeAt()
// String codePointAt()
// String concat()
// String at()
// String [ ]
// String slice()
// String substring()
// String substr()
// String toUpperCase()
// String toLowerCase()
// String isWellFormed()
// String toWellFormed()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String repeat()
// String replace()
// String replaceAll()
// String split()



// Interpolation
// HTML Templates  
// <!DOCTYPE html>
// <html>
// <body>
// <h1>JavaScript Template Strings</h1>
// <p id="demo"></p>
// <script>
let header = "Template Strings";
let tags = ["template strings", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;

for (const x of tags) {
  html += `<li>${x}</li>`;
}
html += `</ul>`;
document.getElementById("demo").innerHTML = html;
// </script>
// </body>
// </html>



// String Search Methods

// String indexOf()
// String lastIndexOf()
// String search()
// String match()
// String matchAll()
// String includes()
// String startsWith()
// String endsWith()



Basic Methods
Basic number methods can be used on any number:

toString()
toExponential()
toFixed()
toPrecision()
valueOf()



Static Methods
Static methods can only be used on Number:

Number.isFinite()
Number.isInteger()
Number.isNan()
Number.isSafeInteger()
Number.parseInt()
Number.parseFloat()
