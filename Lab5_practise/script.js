function analyzeText() {
    let text = document.getElementById("inputText").value;

    let charCount = text.length;

    let words = text.trim().split(/\s+/);

    let wordCount = text.trim() === "" ? 0 : words.length;

    let reversedText = text.split("").reverse().join("");

    document.getElementById("result").innerHTML =
        "<p>Total Characters: " + charCount + "</p>" +
        "<p>Total Words: " + wordCount + "</p>" +
        "<p>Reversed Text: " + reversedText + "</p>";
}