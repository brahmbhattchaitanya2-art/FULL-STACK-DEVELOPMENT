const recList = document.getElementById("recList");
const recText = document.getElementById("recText");
const recName = document.getElementById("recName");
const addRecBtn = document.getElementById("addRecBtn");

const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

addRecBtn.addEventListener("click", () => {
  const text = recText.value.trim();
  const name = recName.value.trim();

  if (text === "") {
    alert("Please write a recommendation before submitting.");
    return;
  }

  // Task 7: add to existing list (do not remove old)
const newRec = document.createElement("div");
newRec.className = "rec";


 newRec.textContent = name
  ? `“${text}” — ${name}`
  : `“${text}”`;

recList.appendChild(newRec);

  // Task 9: popup confirmation
  popup.classList.add("show");

  recText.value = "";
  recName.value = "";
});

closePopup.addEventListener("click", () => {
  popup.classList.remove("show");
});

// Optional: close popup by clicking outside box
popup.addEventListener("click", (e) => {
  if (e.target === popup) popup.classList.remove("show");
});