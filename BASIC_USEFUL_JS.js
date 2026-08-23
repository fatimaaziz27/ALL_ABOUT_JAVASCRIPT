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

HTML Templates
<!DOCTYPE html>
<html>
<body>
<h1>JavaScript Template Strings</h1>

<p id="demo"></p>

<script>
let header = "Template Strings";
let tags = ["template strings", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;

for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
document.getElementById("demo").innerHTML = html;
</script>

</body>
</html>
