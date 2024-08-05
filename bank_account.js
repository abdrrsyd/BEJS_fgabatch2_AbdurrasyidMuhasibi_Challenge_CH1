let balance = 0;

function addBalance() {
  let amount = parseFloat(
    window.prompt("Enter the amount of balance you want to add:")
  );

  if (!isNaN(amount) && amount > 0) {
    balance += amount;
    window.alert(`Your new balance is: ${balance}`);
  } else {
    window.alert("The amount entered is invalid. Please try again.");
  }
}

function reduceBalance() {
  let amount = parseFloat(
    window.prompt("Enter the amount of balance you want to reduce:")
  );

  if (!isNaN(amount) && amount > 0 && amount <= balance) {
    balance -= amount;
    window.alert(`Your new balance is: ${balance}`);
  } else if (amount > balance) {
    window.alert("Balance is not enough to reduce the amount.");
  } else {
    window.alert("The amount entered is invalid. Please try again.");
  }
}
