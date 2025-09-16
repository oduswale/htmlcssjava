function addRecommendation() {
  const input = document.getElementById("recommendation-input");
  const list = document.getElementById("recommendation-list");

  if (input.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = input.value;
    list.appendChild(li);

    alert("Thank you! Your recommendation has been added.");
    input.value = "";
  } else {
    alert("Please write a recommendation before submitting.");
  }
}
