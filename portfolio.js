function displayInput() {
   let userInput = document.getElementById("userInput").value;
   document.getElementById("output").innerHTML = "You entered: " + userInput;
}




<form>
   <label for="userInput">Enter some text:</label>
   <input type="text" id="userInput">
      <button type="button" onclick="displayInput()">Submit</button>
</form>




<p id="output"></p>

