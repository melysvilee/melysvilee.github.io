function concat() {
  var word1 = Number(document.getElementById("input1").value);
  var word2 = Number(document.getElementById("input2").value);
  var phraseStart = "There are many ";
  var phraseStart2 = " ways to choose a";
  var fullSentence = phraseStart + word1 + phraseStart2 + word2;
  
  document.getElementById("result").textContent= "Result: " + fullSentence;
}
