const inputText = document.getElementById("input-text");
const inputBtn = document.getElementById("input-btn");
const pDeciphered = document.getElementById("p-deciphered");

inputBtn.addEventListener("click", function () {
    pDeciphered.innerHTML = inputText.value;
    localStorage.setItem("numUses", localStorage.getItem(numUses) + 1);
});