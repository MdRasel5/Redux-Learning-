// selectElements
const countValue = document.getElementById("countValue");
const incrementBtn = document.getElementById("incrementBtn")
const decrementBtn = document.getElementById("decrementBtn")

let count = 0;

// eventListeners
// increment

incrementBtn.addEventListener("click", () => {
    count++;
    countValue.innerText = count;
});

decrementBtn.addEventListener("click", () => {
    count--;
    countValue.innerText = count;
});


