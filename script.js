let goalInput = document.getElementById("goal");
let breakfastInput = document.getElementById("breakfast");
let lunchInput = document.getElementById("lunch");
let dinnerInput = document.getElementById("dinner");

let totalDisplay = document.getElementById("total");
let remainingDisplay = document.getElementById("remaining");

// function to check goal first
function checkGoalBeforeMeal(input) {
  if (!goalInput.value || goalInput.value <= 0) {
    alert("กรุณาใส่เป้าหมายที่ต้องกินในหนึ่งวันก่อนที่จะใส่แคลอรี่แต่ละมื้อ!");
    input.value = ""; // clear invalid input
    goalInput.focus(); // move focus back to goal
    return false;
  }
  return true;
}

// calculate calories
function calculateCalories() {
  let goal = parseInt(goalInput.value) || 0;
  let breakfast = parseInt(breakfastInput.value) || 0;
  let lunch = parseInt(lunchInput.value) || 0;
  let dinner = parseInt(dinnerInput.value) || 0;

  let total = breakfast + lunch + dinner;
  let remaining = goal - total;

  totalDisplay.textContent = total;
  remainingDisplay.textContent = remaining;
}

// event listeners
[breakfastInput, lunchInput, dinnerInput].forEach(input => {
  input.addEventListener("input", () => {
    if (checkGoalBeforeMeal(input)) {
      calculateCalories();
    }
  });
});

goalInput.addEventListener("input", calculateCalories);